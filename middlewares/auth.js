const jwt = require("jsonwebtoken")


const auth = async(req,res,next)=>{
    // console.log("hello");
    let token = req.headers.authorization
    try {
        if(token){
            token = token.split(" ")[1];
            // console.log(token);
            let secretKey = process.env.SECRET
            const user = await jwt.verify(token,secretKey)
            // console.log(user);
            req.userId = user.id;
            // if(user){
            //     next();
            // }else{
            //     res.status(400).json({msg:"wrong token"})
            // }


        }else{
            res.status(400).json({msg:"unauthorized user "})
        }
        next();
        
    } catch (error) {
        console.error(error)
        res.status(400).json({msg:"unauthorized user catch"})

        
    }
}



module.exports = auth