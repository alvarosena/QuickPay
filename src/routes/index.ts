import { Router } from "express";
import { retailerRoutes } from "./retailer.routes";
import { transactionRoutes } from "./transaction.routes";
import { userRoutes } from "./user.routes";

export const router = Router();

router.use('/api/v1/retailer', retailerRoutes);
router.use('/api/v1/users', userRoutes);
router.use('/api/v1/transactions', transactionRoutes);