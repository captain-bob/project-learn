/* 
*用递归将路由表按照角色过滤
*
 */

export function filterRoutes(role,routes) {
    return routes.filter(v => {
        if(v.meta.role.indexOf(role)>-1) {
            if(v.children&&v.children.length>0) {
                v.children=filterRoutes(role,v.children);
            }
            return true;
        }
        return false;
    })
}