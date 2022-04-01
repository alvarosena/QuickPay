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
exports.AuthenticateRetailerUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const generateToken_1 = require("../../../utils/generateToken");
const RetailerRepository_1 = require("../repositories/RetailerRepository");
class AuthenticateRetailerUseCase {
    execute(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const retailerRepository = new RetailerRepository_1.RetailerRepository();
            const retailer = yield retailerRepository.findByEmail(email);
            if (!retailer) {
                throw new Error("Retailer not found.");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, retailer.password);
            if (!passwordMatch) {
                throw new Error("Password don't match!");
            }
            const token = (0, generateToken_1.generateToken)(retailer.id);
            const acessToken = {
                access_token: token,
            };
            return acessToken;
        });
    }
}
exports.AuthenticateRetailerUseCase = AuthenticateRetailerUseCase;
//# sourceMappingURL=AuthenticateRetailerUseCase.js.map