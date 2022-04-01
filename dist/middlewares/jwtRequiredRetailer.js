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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtRequiredRetailer = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const RetailerRepository_1 = require("../modules/Retailers/repositories/RetailerRepository");
function jwtRequiredRetailer(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { secret } = auth_1.default.jwt;
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                throw new Error("Token is missing.");
            }
            const [, token] = authHeader.split(" ");
            const { sub: retailer_id } = (0, jsonwebtoken_1.verify)(token, secret);
            const retailerRepository = new RetailerRepository_1.RetailerRepository();
            const retailer = yield retailerRepository.findById(retailer_id);
            if (!retailer) {
                throw new Error("User not found.");
            }
            request.user = {
                id: retailer_id
            };
            next();
        }
        catch (error) {
            return response.status(400).json(error);
        }
    });
}
exports.jwtRequiredRetailer = jwtRequiredRetailer;
//# sourceMappingURL=jwtRequiredRetailer.js.map