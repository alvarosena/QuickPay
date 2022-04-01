"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retailerRoutes = void 0;
const express_1 = require("express");
const AuthenticateRetailerController_1 = require("../modules/Retailers/useCases/AuthenticateRetailerController");
const CreateRetailerController_1 = require("../modules/Retailers/useCases/CreateRetailerController");
exports.retailerRoutes = (0, express_1.Router)();
const createRetailerController = new CreateRetailerController_1.CreateRetailerController();
const authenticateRetailerController = new AuthenticateRetailerController_1.AuthenticateRetailerController();
exports.retailerRoutes.post('/', createRetailerController.handle);
exports.retailerRoutes.post('/auth/login', authenticateRetailerController.handle);
//# sourceMappingURL=retailer.routes.js.map