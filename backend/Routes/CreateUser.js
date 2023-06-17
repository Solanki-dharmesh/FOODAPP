const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const jwtSecret="cfvgdebvknlm#@$%^^&nyingcbmf2xntwe"


router.use(express.json());

router.post(
  "/creatuser",
  [
    body("name").isLength({ min: 6 }),
    body("password").isLength({ min: 6 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPassword,
      }).then(res.json({ success: true }));

      console.log("user created");
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [body("password").isLength(), body("email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userdata = await User.findOne({email});
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }

      const pwdCompare= await bcrypt.compare(req.body.password,userdata.password)
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }

      const data={
        user:{
          id:userdata.id
        }
      }
      
      const authToken=jwt.sign(data,jwtSecret)
      return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
