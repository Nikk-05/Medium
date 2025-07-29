"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchemaValidation = exports.createBlogSchemaValidation = exports.loginSchemaValidation = exports.signUpSchemaValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpSchemaValidation = zod_1.default.object({
    email: zod_1.default.email(),
    fullname: zod_1.default.string().min(6).max(50),
    password: zod_1.default.string().min(6)
});
exports.loginSchemaValidation = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string().min(6)
});
exports.createBlogSchemaValidation = zod_1.default.object({
    title: zod_1.default.string().min(1).max(100),
    content: zod_1.default.string().min(1).max(5000),
    published: zod_1.default.boolean().optional()
});
exports.updateBlogSchemaValidation = zod_1.default.object({
    title: zod_1.default.string().min(1).max(100).optional(),
    content: zod_1.default.string().min(1).max(5000).optional(),
    published: zod_1.default.boolean().optional()
});
