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
exports.CreateTransactionController = void 0;
const CreateTransactionUseCase_1 = require("./CreateTransactionUseCase");
class CreateTransactionController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: user_id } = request.user;
            const { amount, retailer_email } = request.body;
            const createTransactionUseCase = new CreateTransactionUseCase_1.CreateTransactionUseCase();
            const transaction = yield createTransactionUseCase.execute(amount, user_id, retailer_email);
            return response.status(201).json(transaction);
        });
    }
}
exports.CreateTransactionController = CreateTransactionController;
//# sourceMappingURL=CreateTransactionController.js.map