const router = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/add", verify, async (req, res) => {
  try {
    const { assets, fixedIncome, equity, alternatives } = req.body;

    const userId = req.id;

    // Find the user by one and update alternatives,assets,fixedIncome,equity
    const user = await User.findOneAndUpdate(
      userId,
      { alternatives, assets, fixedIncome, equity },
      { new: true }
    );

    // Return the updated user to the client
    res.json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the wealth" });
  }
});
router.delete("/delete", verify, async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findOneAndUpdate(
      userId,
      { $unset: { assets: 1, fixedIncome: 1, equity: 1, alternatives: 1 } },
      { new: true }
    );
    res.json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the user" });
  }
});

module.exports = router;
