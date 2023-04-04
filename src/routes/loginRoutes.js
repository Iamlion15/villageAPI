import express from 'express';
import authenticationController from '../controllers/authenticationController';
import session from 'express-session';

const router=express.Router();
router.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 120000 
      }
  }));

router.post("/getOTP",authenticationController.getOTP);
router.post("/clogin",authenticationController.citizenLogin);

export default router;