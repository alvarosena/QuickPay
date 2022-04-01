"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const generateToken_1 = require("../../../utils/generateToken");
const UserRepository_1 = require("../repositories/UserRepository");
class AuthenticateUserUseCase {
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            const user = yield userRepository.findByEmail(email);
            if (!user) {
                throw new Error("User not found.");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new Error("Password don't match!");
            }
            const token = (0, generateToken_1.generateToken)(user.id);
            const accessToken = {
                access_token: token,
            };
            return accessToken;
        });
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=AuthenticateUserUseCase.js.map