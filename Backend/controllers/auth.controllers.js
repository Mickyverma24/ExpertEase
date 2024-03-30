import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/jwtToken.js";
// controllers for authentication

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Password Does not match" });
    }

    const user = await User.findOne({ username: username });

    if (user) {
      return res.status(401).json({ error: "User already exists.." });
    }
    // these are simple string interpolation that's why we did not use await here because it is not an asynchronous task
    const profilePicBoy = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const profilePicGirl = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profile: gender === "male" ? profilePicBoy : profilePicGirl,
    });

    if (newUser) {
      // generating token and setting up cookies
      generateTokenAndSetCookie(newUser._id, res);
      let savedUser = await newUser.save();
      res
        .status(200)
        .json({ message: "User created successfully....", user: savedUser });
    } else {
      res.status(400).send({ error: "Invalid User" });
    }
    // here i can return user details also .... Take care of that while development
  } catch (error) {
    console.log("Error in SignUp Controller...", error.message);
    res.status(400).json({ error: "Something went wrong while signing" });
  }
};
// login controller
export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isCorrectPassword) {
      return res
        .status(401)
        .json({ error: "username or password is not correct..!" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).send({
      Id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profile,
    });
  } catch (error) {
    console.log("Error while login :", error.message);
    res.status(400).send({ error: "Internal Server Error" });
  }
};

// logout controller
export const logOut = (req, res) => {
  try {
    // res.cookie("jwt", "", {maxAge : 0});
    res.clearCookie("jwt"); 
    res.status(200).send({"message":"user loggout succssfully"});
  } catch (error) {
    console.log("Error while Logout :", error.message);
    res.status(400).send({ error: "Internal Server Error" });
  }
};
