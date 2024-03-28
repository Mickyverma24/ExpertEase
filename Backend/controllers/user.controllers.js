import User from "../models/user.model.js";

export const retriveAllUsers = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const allUsersExceptLoggedIn = await User.find({_id : {$ne:loggedInUserId}}).select("-password");
        res.status(200).send(allUsersExceptLoggedIn);
        
    } catch (error) {
        console.log("Error in the User Controller :", error.message);
        res.status(500).send("Internal server Error");
    }

}
