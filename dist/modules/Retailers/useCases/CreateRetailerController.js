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
exports.CreateRetailerController = void 0;
const CreateRetailerUseCase_1 = require("./CreateRetailerUseCase");
class CreateRetailerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { full_name, cpf, cnpj, email, password } = request.body;
            const createRetailerUseCase = new CreateRetailerUseCase_1.CreateRetailerUseCase();
            const retailer = yield createRetailerUseCase.execute(full_name, cpf, cnpj, email, password);
            return response.status(201).json(retailer);
        });
    }
}
exports.CreateRetailerController = CreateRetailerController;
//# sourceMappingURL=CreateRetailerController.js.map