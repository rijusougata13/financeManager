const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

module.exports = {
  create,
  login,
  checkToken,
  update,
  user
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch (err) {
    console.log(err);
    res.status(400).json("Bad Credentials");
  }
}

async function update(req, res) {
  try {
    const user = await User.findById(req.params.id);
    user.maxExpanse = req.body.maxExpanse;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
}

async function user(req, res) {
  try {
    const user = await User.findById(req.params.id);
   
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error finidng user" });
  }
}


function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}



/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
