export default {
    set token(value) {
        sessionStorage.setItem("token",value);
    },
    get token() {
        return sessionStorage.getItem("token");
    },
    currentroute:'', /* 当前路由，用于设置面包屑 */
    activeRoute:'',/* 用于ellement导航组件default-active属性设置当前激活菜单 */
}