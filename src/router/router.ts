interface IRouter {
  path: string,
  name: string,
  component: string,
  icon: string,
  children: IRouter[]
}

const routes = [
  {
    path: "/base",
    name: "基础",
    component: null,
    icon: "appstore",
    children: [
      {
        path: "/base",
        name: "基础一",
        component: null
      },
      {
        path: "/dated",
        name: "基础一",
        id: 3,
        component: null
      },
      {
        path: "/dateg",
        name: "基础一",
        id: 4,
        component: null
      },
      {
        path: "/datef",
        name: "基础一",
        id: 5,
        component: null
      },
      {
        path: "/datee",
        name: "基础一",
        id: 6,
        component: null
      }
    ]
  },
  {
    path: "/redux",
    name: "Redux",
    component: null,
    icon: "appstore",
    id: 7,
    children: [
      {
        path: "/datec",
        name: "简介一",
        id: 8,
        component: null
      },
      {
        path: "/datef",
        name: "简介一",
        id: 9,
        component: null
      },
      {
        path: "/datej",
        name: "简介一",
        id: 10,
        component: null
      },
      {
        path: "/dateh",
        name: "简介一",
        id: 11,
        component: null
      },
      {
        path: "/dateg",
        name: "简介一",
        id: 12,
        component: null
      },
      {
        path: "/datee",
        name: "简介一",
        id: 13,
        component: null
      },
      {
        path: "/datef",
        name: "简介一",
        id: 14,
        component: null
      }
    ]
  },
  {
    path: "/pages",
    name: "布局",
    component: null,
    icon: "appstore",
    id: 15,
    children: [
      {
        path: "/datefd",
        name: "切换一",
        id: 16,
        component: null
      },
      {
        path: "/dateffs",
        name: "切换一",
        id: 17,
        component: null
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 18,
        component: null
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 19,
        component: null
      },
      {
        path: "/dateff",
        name: "切换一",
        id: 20,
        component: null
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 21,
        component: null
      },
      {
        path: "/datefd",
        name: "切换一",
        id: 22,
        component: null
      },
      {
        path: "/dates",
        name: "切换一",
        id: 221,
        component: null
      }
    ]
  },
  {
    path: "/forminput",
    name: "表单输入",
    component: null,
    icon: "appstore",
    id: 23,
    children: [
      {
        path: "/datesg",
        name: "切换一",
        id: 23,
        component: null
      },
      {
        path: "/datetts",
        name: "切换一",
        id: 24,
        component: null
      },
      {
        path: "/datets",
        name: "切换一",
        id: 25,
        component: null
      },
      {
        path: "/datec",
        name: "切换一",
        id: 26,
        component: null
      },
      {
        path: "/datesa",
        name: "切换一",
        id: 27,
        component: null
      },
      {
        path: "/datesf",
        name: "切换一",
        id: 28,
        component: null
      },
      {
        path: "/dates",
        name: "切换一",
        id: 29,
        component: null
      },
      {
        path: "/datec",
        name: "切换一",
        id: 30,
        component: null
      }
    ]
  },
  {
    path: "/table-null",
    name: "基础表单",
    id: 31,
    component: null,
    icon: "appstore",
    children: [
      {
        path: "/toggle",
        name: "切换一",
        id: 32,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 33,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 34,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 35,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 36,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 37,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 38,
        component: null
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 39,
        component: null
      }
    ]
  },
  {
    path: "/checkbox",
    name: "多选",
    component: null,
    icon: "appstore",
    id: 40,
    children: [
      {
        path: "/togglecd",
        name: "切换一",
        id: 41,
        component: null
      },
      {
        path: "/toggleaq",
        name: "切换一",
        id: 42,
        component: null
      },
      {
        path: "/toggle345",
        name: "切换一",
        id: 43,
        component: null
      },
      {
        path: "/toggle22",
        name: "切换一",
        id: 44,
        component: null
      },
      {
        path: "/toggle5",
        name: "切换一",
        id: 45,
        component: null
      },
      {
        path: "/toggle4",
        name: "切换一",
        id: 46,
        component: null
      },
      {
        path: "/toggle3",
        name: "切换一",
        id: 47,
        component: null
      },
      {
        path: "/toggle2",
        name: "切换一",
        id: 48,
        component: null
      }
    ]
  }
]


export { IRouter }
export default routes
