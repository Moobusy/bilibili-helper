"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var bh_option_component_1 = require("./bh-option.component");
var bh_button_component_1 = require("../bh-button/bh-button.component");
var BhOptionModule = (function () {
    function BhOptionModule() {
    }
    BhOptionModule.prototype.ngDoBootstrap = function () { };
    return BhOptionModule;
}());
BhOptionModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            bh_option_component_1.BhOptionComponent,
            bh_button_component_1.BhButtonComponent
        ],
        bootstrap: [bh_option_component_1.BhOptionComponent]
    }),
    __metadata("design:paramtypes", [])
], BhOptionModule);
exports.BhOptionModule = BhOptionModule;