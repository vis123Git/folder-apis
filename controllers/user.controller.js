const { update_user } = require("../services/user.services");

exports.logout = async (req, res) => {
  try {
    const user_id = req.user_id;

    const update_token = await update_user(user_id, { token: "" });
    if (!update_token) return res.status(400).json({ status: false, message: "Unable to logout. Please try again later!" });

    return res.status(201).json({ status: true, message: "Logged out successfully" });
  } catch (error) {
    console.log("error===>", error);
    return res.status(400).json({ status: false, message: "Something went wrong!" });
  }
};
