count is 0

the count variable is outside the lexical scope of increment and log function.When log function is invoked.it searches for count variable and it found in its parent function.Count variable is declared as zero so it displays as zero.So Increment function doesnt change the value of count because it is declared as zero