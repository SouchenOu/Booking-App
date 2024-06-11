import Users from "../Modules/Users.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import CreateError from "../utils/error.js"


// const CreateError = require('../utils/error');

export const register = async (req, res, next) =>{
  
console.log("register backend");
  try{
    const user = await Users.findOne({email : req.body.email});
    console.log("user register-->", user);
    if(user){
      return next(new CreateError('User Alrighdy exist', 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);


    const newUser = new Users({
          ...req.body,
          password: hashedPassword ,
      });
      console.log("newUser backend-->", newUser);
      const token = jwt.sign({_id : newUser._id}, 'secretkey123' , {expiresIn : '90d'})
      await newUser.save();
      res.status(200).json({status : 'success', message: 'User registered succefully ', token});


  }catch(err){
        console.log(err);


  }

}

// export const login = async (req, res, next) => {
//     // console.log("enter to login");
//     // const salt = bcrypt.genSaltSync(10);
//     // const hash = bcrypt.hashSync(req.body.password, salt);
//     // try{
//     //     // first : check if there is a user wit this username
//     //     const user = await Users.findOne({username: req.body.username});
//     //     console.log("user body", req.body.username);
//     //     if(!user) return res.status(401).json("wrong username, SignUp please!");
//     //     //then if all good we should compare the password
//     //     const comparePassword = await bcrypt.compare(req.body.password, user.password);

//     //     if(!(req.body.password === user.password)) 
//     //     {
//     //         return res.status(400).json("wrong password");
//     //     }
//     //     const token = jwt.sign({id : user._id, isAdmin: user.isAdmin}, "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ=");
//     //     // then we should setting this token into cookies (we add cookieParser)
//     //         const {password, isAdmin, ...otherDetails} = user._doc;
//     //     // so if its all good we can send our user
//     //     const newUser = user.save();
//     //     res.cookie("access_token", token, {httpOnly : true}).status(200).json({...otherDetails});

//     // }catch(err){
//     //     res.status(500).json(err);

//     // }
//     try {
//         const user = await Users.findOne({ username: req.body.username });
//         if(!user) return res.status(401).json("wrong username, SignUp please!");
    
//         const isPasswordCorrect = await bcrypt.compare(
//           req.body.password,
//           user.password
//         );
//         // if (!isPasswordCorrect)
//         //     return res.status(400).json("wrong password");
//         if(!(req.body.password === user.password)) 
//         {
//             return res.status(400).json("wrong password");
//         }
    
//         const token = jwt.sign(
//           { id: user._id, isAdmin: user.isAdmin },
//           "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ="
//         );
    
//         const { password, isAdmin, ...otherDetails } = user._doc;
//         res
//           .cookie("access_token", token, {
//             httpOnly: true,
//           })
//           .status(200)
//           .json({ details: { ...otherDetails }, isAdmin });
//       } catch (err) {
//         next(err);
//       }
// }

export const login = async (req, res, next) => {

  try {
    const user = await Users.findOne({ username: req.body.username });
    if(!user) return next(new CreateError('User not found', 404));
    // if (!user) return res.status(401).json("Wrong username, SignUp please!");

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!(req.body.password === user.password)) 
    {
      // return res.status(400).json("wrong password");
      if(!user) return next(new CreateError('wrong password', 404));

    }
    console.log("user backend here-->", user);

    const token = jwt.sign({_id : user._id}, 'secretkey123' , {expiresIn : '90d'});
    res.status(200).json({status: 'success', token, message : 'Logged in succefuly', user : {_id : user._id, username : user.username, email : user.email}})

    // Generate JWT token with 24 hours expiration
    // const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
    //   "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ=",
    //   { expiresIn: '24h' } // Token expires in 24 hours
    // );

    // const { password, isAdmin, ...otherDetails } = user._doc;
    // res
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000 // Cookie expires in 24 hours
    //   })
    //   .status(200)
    //   .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token").send("Logged out successfully.");
};