"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const password_1 = require("../password");
exports.default = {
    entities: [Post_1.Post],
    dbName: 'lireddit',
    password: password_1.password,
    type: 'postgresql',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map