export default {
    routeHeader(state) { /* 面包屑对应的路由头 */
        if(state.currentroute.length>1) {
            
            return state.currentroute[1].meta.name;
        }
        return state.currentroute[0].meta.name;
    }
}