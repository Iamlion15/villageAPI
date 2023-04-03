import express from 'express';
import { createUser } from './../controllers/userController';
const {getAllUsers} = require('./../controllers/userController')
const router = express.Router();

router.route('/create')
      .post(createUser);

router.route('/')
      .get(getAllUsers)

export default router