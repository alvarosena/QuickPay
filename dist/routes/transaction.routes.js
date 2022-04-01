"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRoutes = void 0;
const express_1 = require("express");
const CreateTransactionController_1 = require("../modules/Transactions/useCases/CreateTransactionController");
const jwtRequiredUser_1 = require("../middlewares/jwtRequiredUser");
exports.transactionRoutes = (0, express_1.Router)();
const createTransactionController = new CreateTransactionController_1.CreateTransactionController();
exports.transactionRoutes.post('/', jwtRequiredUser_1.jwtRequiredUser, createTransactionController.handle);
//# sourceMappingURL=transaction.routes.js.map