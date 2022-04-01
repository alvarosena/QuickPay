import { Router } from "express";
import { retailerRoutes } from "./retailer.routes";

export const router = Router();

router.use('/api/v1/retailer', retailerRoutes)