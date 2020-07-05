const User=require('../models/user')
const jwt=require('jsonwebtoken')

const auth=async(req,res,next)=>{
    try{
    const token=req.header('Authorization').replace('Bearer ','')
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    const user=await User.findOne({_id:decoded._id,'tokens.token':token})


    req.token=token
    req.user=user
    if(!user){
        throw new Error()
    }

}catch{
    res.status(401).send('User Not Authorized')
}
    
 
 next()
}

module.exports=auth