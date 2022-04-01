"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((0, cors_1.default)());
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
app.get('/', (request, response) => {
    return response.json({ message: "QuickPay" });
});
const port = process.env.PORT;
app.listen(port || 8080, () => console.log('Server running on http://localhost:8080'));
//# sourceMappingURL=app.js.map