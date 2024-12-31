import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-settings-applications',
      keepAlive: true,
      order: 0,
      title: '系统管理',
    },
    name: 'System',
    path: '/system',
    children: [
      {
        meta: {
          title: '用户列表',
        },
        name: 'UserList',
        path: '/sys/userList',
        component: () => import('#/views/sys/userList.vue'),
      },
    ],
  },
];

export default routes;
