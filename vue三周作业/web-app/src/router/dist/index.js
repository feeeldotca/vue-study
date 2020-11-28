"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var jindutown_vue_1 = require("@/components/jindutown.vue");
var jindulife_vue_1 = require("@/components/jindulife.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/',
        name: 'Home',
        component: jindutown_vue_1["default"]
    },
    {
        path: '/about',
        name: 'About',
        component: jindulife_vue_1["default"]
    }
];
var router = new vue_router_1["default"]({
    routes: routes,
    // linkActiveClass: 'selected',
    linkExactActiveClass: 'selected'
});
exports["default"] = router;
