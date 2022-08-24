import express from "express";
import {
  userSignUp
} from "../controller";

const router = express.Router();

router.post("/signup", userSignUp);

export default router;