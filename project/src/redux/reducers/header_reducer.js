import { CHANGE_ITEMS } from '../common';

const init = [
  {
    id: '1', name: '用户管理', path: '/user',
    children: [
      { id: '1-1', name: '用户一览', path: '/user/userList' },
      { id: '1-2', name: '用户添加', path: '/user/addUser' }
    ]
  },
  {
    id: '2', name: '数据展示', path: '/data',
    children: [
      { id: '2-1', name: '菜单1', path: '/data/menu1' }
    ]
  }
]
let match = window.location.pathname === '/' ? '/user' : window.location.pathname;
let initState = init.filter(item => match.indexOf(item.path) > -1);

export function header_reducer(preState = initState[0], action) {
  switch (action.type) {
    case CHANGE_ITEMS:
      return action.data;
    default:
      return preState;
  }
}

export function all_path_reducer(preState = init, action) {
  return preState;
}