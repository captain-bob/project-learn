/* 为具有children的路由设置第一个children为默认路径 */

export function redirect(routes) {
    routes.forEach(route => {
        if(route.children&&route.children.length>0) {
            route.redirect=({name:route.children[0].name});
        }
    });
}