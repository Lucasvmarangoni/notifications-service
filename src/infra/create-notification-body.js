"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateNotificationsBody = void 0;
var class_validator_1 = require("class-validator");
var CreateNotificationsBody = /** @class */ (function () {
    function CreateNotificationsBody() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)() // Validação 0 recipente não pode estar vazio
        ,
        (0, class_validator_1.isUUID)() // Validação 1 recipente deve ser um uuid
    ], CreateNotificationsBody.prototype, "recipientId");
    __decorate([
        (0, class_validator_1.Length)(5, 255) // Validação 2 content deve ter entre 5 e 255 caracteres
        ,
        (0, class_validator_1.IsNotEmpty)()
    ], CreateNotificationsBody.prototype, "content");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateNotificationsBody.prototype, "category");
    return CreateNotificationsBody;
}());
exports.CreateNotificationsBody = CreateNotificationsBody;
