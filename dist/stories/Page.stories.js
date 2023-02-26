"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Page_1 = require("./Page");
exports.default = {
    title: 'example',
    component: Page_1.Page,
};
var Template = function () { return (0, jsx_runtime_1.jsx)(Page_1.Page, {}); };
exports.Basic = Template.bind({});
