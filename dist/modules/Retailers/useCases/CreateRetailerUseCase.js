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
exports.CreateRetailerUseCase = void 0;
const RetailerRepository_1 = require("../repositories/RetailerRepository");
const bcrypt_1 = require("bcrypt");
class CreateRetailerUseCase {
    execute(full_name, cpf, cnpj, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const retailerRepository = new RetailerRepository_1.RetailerRepository();
            const retailerAlreadyExists = yield retailerRepository.findByEmail(email);
            if (retailerAlreadyExists) {
                throw new Error("User already exists");
            }
            const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
            const retailer = yield retailerRepository.create(full_name, cpf, cnpj, email, hashedPassword);
            return retailer;
        });
    }
}
exports.CreateRetailerUseCase = CreateRetailerUseCase;
//# sourceMappingURL=CreateRetailerUseCase.js.map