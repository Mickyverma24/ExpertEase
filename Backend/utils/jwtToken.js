import jwt from'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res)=>{
    // generating token 
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'15d'}) 
    res.cookie("jwt",token,{
        maxAge : 15*24*60*60*1000,
        httpOnly :true, // prevents from XSS attacks 
        sameSite : "strict", // prevents from csrf attack by prevenint cookies from cross -origin request
        secure : process.env.NODE_ENV !== "development"
    })
    
}
export default generateTokenAndSetCookie;