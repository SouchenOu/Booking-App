import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log("token here-->", token);
    if (!token) {
        return res.status(500).json("You are not authenticated");
    }

    jwt.verify(token, "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ=", (err, user) => {
        if (err) return res.status(500).json("Token is not valid");
        req.user = user;
        next(); // Pass control to the next middleware
    });
};
export const verifyUser = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next();
        }else{
            if(err){
                return res.status(403).json("You are not authorized");
            }
        }
    })
}

export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin)
        {
            next();
        }else{
            if(err){
                return res.status(403).json("You are not authorized");
            }
        }
    })
}
