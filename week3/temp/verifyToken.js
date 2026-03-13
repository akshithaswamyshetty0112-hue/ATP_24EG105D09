import jwt from "jsonwebtoken"
const {verify}=jwt


export function verifyToken(req,res,next){
    //token verification logic
   // console.log("token obj is:",req.cookies)-->can use this also
   const token=req.cookies?.token;
   console.log(token)
   //if req from unauthorised user
   if(!token){
          return res.status(401).json({message:"plz login"})
   }
   try{
   //if token existed
    const decodedToken=verify(token,'abcdef')
    console.log(decodedToken)
    req.user=decodedToken
    //call next
    next()
   }catch(err){//token invalid
        res.status(401).json({message:"session expired.plz re-login"})
   }
    //to access cookies property of request object we need cookie parser middleware .otherwise req.cookies is undefined
    //install cookies parser middleware
    // npm cookie install cookie-parser
}