"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const assword_1 = __importDefault(require("p../assword"));
exports.default = {
    entities: [Post_1.Post],
    dbName: 'lireddit',
    password: assword_1.default,
    type: 'postgresql',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map