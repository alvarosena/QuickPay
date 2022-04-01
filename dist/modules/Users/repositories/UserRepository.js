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
exports.UserRepository = void 0;
const database_1 = require("../../../database");
class UserRepository {
    create(full_name, cpf, cnpj, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.user.create({
                data: {
                    full_name,
                    cpf,
                    cnpj,
                    email,
                    password,
                }
            });
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.user.findFirst({
                where: {
                    email
                }
            });
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.user.findFirst({
                where: {
                    id,
                }
            });
            return user;
        });
    }
    update(id, cash) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.user.update({
                where: {
                    id,
                },
                data: {
                    cash,
                }
            });
            return user;
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map