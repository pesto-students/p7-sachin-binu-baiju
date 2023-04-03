const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { signupValidation, loginValidation } = require("../validation");

// router.get("/", (req, res) => {
//   console.log("hello");
// });

router.post("/signup", async (req, res) => {
  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //checking if email exists
  const existEmail = await User.findOne({ email: req.body.email });
  if (existEmail) return res.status(400).send("email existes");

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const saveduser = await user.save();
    res.header('Content-Type','application/json')
    res.status(200).send({ user: saveduser });
    console.log(saveduser);
  } catch (err) {
    res.status(400).send({ status: "failed", msg: err });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("No user found");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send("Invalid password");
  }

  const token = jwt.sign({_id:user._id,email:user.email},process.env.TOKEN_KEY);
  res.header("auth-token",token).send(token);

});

module.exports = router;
