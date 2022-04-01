"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../modules/Users/useCases/AuthenticateUserController");
const CreateUserController_1 = require("../modules/Users/useCases/CreateUserController");
exports.userRoutes = (0, express_1.Router)();
const createUserController = new CreateUserController_1.CreateUserController();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
exports.userRoutes.post('/', createUserController.handle);
exports.userRoutes.post('/auth/login', authenticateUserController.handle);
//# sourceMappingURL=user.routes.js.map