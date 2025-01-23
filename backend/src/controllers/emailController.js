const Email = require("../models/email");

exports.getEmails = async (req, res) => {
  const userId = req.userId; 
  //const userId = 1;
  try {
    const emails = await Email.findAll({ where: { userId } });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching emails." });
  }
};
