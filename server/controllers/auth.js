import Users from "../Modules/Users.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"




export const register = async (req, res, next) =>{
   
    try{
       console.log("enter to register");
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({
            ...req.body,
            password: hash,
        });
        console.log("newUser backend-->", newUser);

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    console.log(err);
  }

}

export const login = async (req, res, next) => {
    // console.log("enter to login");
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    // try{
    //     // first : check if there is a user wit this username
    //     const user = await Users.findOne({username: req.body.username});
    //     console.log("user body", req.body.username);
    //     if(!user) return res.status(401).json("wrong username, SignUp please!");
    //     //then if all good we should compare the password
    //     const comparePassword = await bcrypt.compare(req.body.password, user.password);

    //     if(!(req.body.password === user.password)) 
    //     {
    //         return res.status(400).json("wrong password");
    //     }
    //     const token = jwt.sign({id : user._id, isAdmin: user.isAdmin}, "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ=");
    //     // then we should setting this token into cookies (we add cookieParser)
    //         const {password, isAdmin, ...otherDetails} = user._doc;
    //     // so if its all good we can send our user
    //     const newUser = user.save();
    //     res.cookie("access_token", token, {httpOnly : true}).status(200).json({...otherDetails});

    // }catch(err){
    //     res.status(500).json(err);

    // }
    try {
        const user = await Users.findOne({ username: req.body.username });
        if(!user) return res.status(401).json("wrong username, SignUp please!");
    
        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );
        // if (!isPasswordCorrect)
        //     return res.status(400).json("wrong password");
        if(!(req.body.password === user.password)) 
        {
            return res.status(400).json("wrong password");
        }
    
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ="
        );
    
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ details: { ...otherDetails }, isAdmin });
      } catch (err) {
        next(err);
      }
}