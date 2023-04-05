import express from 'express';
import adminController from './../controllers/adminAuthController';
import { createUser } from './../controllers/userController';
const {getAllUsers} = require('./../controllers/userController')
const router = express.Router();

router.route('/create')
      .post(createUser);

router.route('/')
      .get(getAllUsers)

router.post("/adminSignup",adminController.createUser);      

export default router