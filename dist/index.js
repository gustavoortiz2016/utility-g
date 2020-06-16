"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utility = void 0;
const numero_1 = __importDefault(require("./numero"));
const moneda_1 = __importDefault(require("./moneda"));
const globalizacion_1 = __importDefault(require("./globalizacion"));
const cadena_1 = __importDefault(require("./cadena"));
/**
 * Libreria de utilidades Javascript
 */
exports.utility = {
    Globalizacion: globalizacion_1.default.esSV,
    Moneda: moneda_1.default,
    Numero: numero_1.default,
    Cadena: function () {
        return new cadena_1.default(this.Globalizacion);
    }
};
//# sourceMappingURL=index.js.map