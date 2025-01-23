const User = require("../models/User");
const Email = require("../models/email");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/token");
const { dummyEmails } = require("../utils/data");

// Register
exports.register = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ email, password: hashedPassword, first_name: first_name, last_name: last_name});

    // Assign dummy emails to the user
    const emails = dummyEmails.map((email) => ({ ...email, userId: user.id }));
    await Email.bulkCreate(emails);

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error registering user." });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found." });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials." });

    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in." });
  }
};
