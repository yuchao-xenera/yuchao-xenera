import UserManage from "../compoents/user/UserManage"
import AddUser from "../compoents/user/AddUser"
import DataMenu from "../compoents/user/DataMenu"
import UserList from "../compoents/user/UserList"

// 路由配置
const routes = [
    {
        id:1,
        title:'用户一览',
        path:'/userList',
        component:UserList
        // component:UserManage
    },
    {
        id:2,
        title:'用户添加',
        path:'/addUser',
        component:AddUser
    },
    {
        id:3,
        title:'菜单1',
        path:'/dataMenu',
        component:DataMenu
    },
]

export default routes