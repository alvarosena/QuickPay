"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const auth_1 = __importDefault(require("../config/auth"));
const jsonwebtoken_1 = require("jsonwebtoken");
function generateToken(user_id) {
    const { secret, expiresIn } = auth_1.default.jwt;
    if (secret) {
        const token = (0, jsonwebtoken_1.sign)({}, secret, {
            subject: user_id,
            expiresIn,
        });
        return token;
    }
}
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map