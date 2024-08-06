const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { add_new_user, find_one_user } = require("../services/user.services");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email?.trim()) return res.status(400).json({ status: false, message: "Please provide email!" });
    if (!password?.trim()) return res.status(400).json({ status: false, message: "Please provide password!" });

    const email_exists = await find_one_user({ email }, { email: 1 });
    if (email_exists) return res.status(400).json({ status: false, message: "User already exists!" });

    const add_user = await add_new_user({ email : email.trim().toLowerCase(), password : password.trim() });
    if (!add_user) return res.status(400).json({ status: false, message: "Unable to register. Please try again later!" });

    return res.status(201).json({ status: true, message: "User created successfully" });
  } catch (error) {
    console.log("error===>",error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ status: false, message: "Please provide email!" });
    if (!password) return res.status(400).json({ status: false, message: "Please provide password!" });

    const email_exists = await find_one_user({ email }, { email: 1, password: 1 });
    if (!email_exists) return res.status(400).json({ status: false, message: "User does not exists!" });

    if (!(await bcrypt.compare(password, email_exists.password))) {
      return res.status(401).json({status:false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ user_id: email_exists._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(201).json({ status: true, token, message: "Logged in successfully" });
  } catch (error) {
    console.log("error===>",error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
