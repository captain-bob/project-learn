export default {
    setCurrentRoute(state,route) {
        state.currentroute=route;
    },
    setActiveRoute(state,name) {
        state.activeRoute=name;
    },
    LOGIN_IN(state,token) {
        state.token=token;
    }
}