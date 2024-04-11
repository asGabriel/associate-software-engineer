"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = (who) => console.log(`Hello ${who}!`);
exports.hello = hello;
(0, exports.hello)("olaaa 123"); // vai dar bom
(0, exports.hello)(123); // vai dar erro
