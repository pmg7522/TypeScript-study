import express from "express";
import {
  userSignUp,
  userLogin,
} from "../controller";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

export default router;