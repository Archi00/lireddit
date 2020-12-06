"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const password_1 = require("../gitignore/password");
const path_1 = __importDefault(require("path"));
const port_1 = require("../gitignore/port");
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: 'lireddit',
    password: password_1.password,
    type: 'postgresql',
    port: port_1.port,
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map