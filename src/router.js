export default [{
    path: '/',
    redirect: '/home'
  },
  {
    // 后台账户管理模块
    path: '/home',
    component: function (resolve) {
      require(['./components/home.vue'], resolve)
    },
    children: [{
        path: 'lists',
        component: function (resolve) {
          require(['./components/mallLists.vue'], resolve)
        }
      },
      {
        path: 'particulars',
        component: function (resolve) {
          require(['./components/mallParticulars.vue'], resolve)
        },
        children: [{
          path: 'commodity',
          component: function (resolve) {
            require(['./components/commodity.vue'], resolve)
          }
        }, {
          path: 'details',
          component: function (resolve) {
            require(['./components/details.vue'], resolve)
          }
        }, {
          path: 'evaluate',
          component: function (resolve) {
            require(['./components/evaluate.vue'], resolve)
          }
        }, ]
      }
    ]
  },
]
