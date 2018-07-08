"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.set('port', 6789);
server.get('/', (req, res) => {
    res.send('Test Page Online');
});
server.listen(server.get('port'), () => {
    console.log(`Server is running at http://localhost:${server.get('port')} in ${server.get('env')} mode`);
});
