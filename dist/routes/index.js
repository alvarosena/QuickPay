"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const retailer_routes_1 = require("./retailer.routes");
const transaction_routes_1 = require("./transaction.routes");
const user_routes_1 = require("./user.routes");
exports.router = (0, express_1.Router)();
exports.router.use('/api/v1/retailers', retailer_routes_1.retailerRoutes);
exports.router.use('/api/v1/users', user_routes_1.userRoutes);
exports.router.use('/api/v1/transactions', transaction_routes_1.transactionRoutes);
//# sourceMappingURL=index.js.map