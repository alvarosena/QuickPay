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
exports.CreateTransactionUseCase = void 0;
const RetailerRepository_1 = require("../../Retailers/repositories/RetailerRepository");
const UserRepository_1 = require("../../Users/repositories/UserRepository");
const TransactionRepository_1 = require("../repositories/TransactionRepository");
class CreateTransactionUseCase {
    execute(amount, user_id, retailer_email) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionsRepository = new TransactionRepository_1.TransactionRepository();
            const retailerRepository = new RetailerRepository_1.RetailerRepository();
            const userRepository = new UserRepository_1.UserRepository();
            const user = yield userRepository.findById(user_id);
            const retailer = yield retailerRepository.findByEmail(retailer_email);
            if (!retailer || !user) {
                throw new Error("Transaction Failed.");
            }
            const userCash = user.cash - amount;
            const retailerCash = user.cash + amount;
            yield userRepository.update(user.id, userCash);
            yield retailerRepository.update(retailer.id, retailerCash);
            const transaction = yield transactionsRepository.create(amount, user_id, retailer.id);
            return transaction;
        });
    }
}
exports.CreateTransactionUseCase = CreateTransactionUseCase;
//# sourceMappingURL=CreateTransactionUseCase.js.map