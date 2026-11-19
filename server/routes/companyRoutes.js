import express from "express";
import { optionalProtect } from "../middlewares/authMiddleware.js";
import { prepareCompany } from "../controllers/companyController.js";

const router = express.Router();

router.post("/prepare",optionalProtect, prepareCompany);

export default router;