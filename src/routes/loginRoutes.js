import express from 'express';
import authenticationController from '../controllers/authenticationController';
import adminController from '../controllers/adminAuthController';
import session from 'express-session';

const router=express.Router();
router.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000 
      }
  }));


router.post("/getOTP",authenticationController.getOTP);
router.post("/clogin",authenticationController.citizenLogin);
router.post("/adminlogin",adminController.loginUser);
router.post("/mdlogin",adminController.loginMudugudu);

export default router;