import Base from "../page/base/BaseComponent";
import Intro from "../page/base/IntroComponent";
import Props from "../page/base/PropsComponent";
import DateC from "../page/base/DateComponent";
import Toggle from "../page/base/ToggleComponent";
import FormInput from "../page/base/FormInputComponent";
import TableBaseComponent from "../page/table/TableBaseComponent";
import CheckboxComponent from "../page/Form/CheckboxComponent";

export default [
  {
    path: "/base",
    name: "基础",
    component: Base,
    icon: "appstore",
    id: 1,
    children: [
      {
        path: "/datec",
        name: "基础一",
        id: 2,
        component: DateC
      },
      {
        path: "/dated",
        name: "基础一",
        id: 3,
        component: Base
      },
      {
        path: "/dateg",
        name: "基础一",
        id: 4,
        component: Base
      },
      {
        path: "/datef",
        name: "基础一",
        id: 5,
        component: Base
      },
      {
        path: "/datee",
        name: "基础一",
        id: 6,
        component: Base
      }
    ]
  },
  {
    path: "/intro",
    name: "简介",
    component: Intro,
    icon: "appstore",
    id: 7,
    children: [
      {
        path: "/datec",
        name: "简介一",
        id: 8,
        component: DateC
      },
      {
        path: "/datef",
        name: "简介一",
        id: 9,
        component: DateC
      },
      {
        path: "/datej",
        name: "简介一",
        id: 10,
        component: DateC
      },
      {
        path: "/dateh",
        name: "简介一",
        id: 11,
        component: DateC
      },
      {
        path: "/dateg",
        name: "简介一",
        id: 12,
        component: DateC
      },
      {
        path: "/datee",
        name: "简介一",
        id: 13,
        component: DateC
      },
      {
        path: "/datef",
        name: "简介一",
        id: 14,
        component: DateC
      }
    ]
  },
  {
    path: "/toggle",
    name: "切换",
    component: Toggle,
    icon: "appstore",
    id: 15,
    children: [
      {
        path: "/datefd",
        name: "切换一",
        id: 16,
        component: Toggle
      },
      {
        path: "/dateffs",
        name: "切换一",
        id: 17,
        component: Toggle
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 18,
        component: Toggle
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 19,
        component: Toggle
      },
      {
        path: "/dateff",
        name: "切换一",
        id: 20,
        component: Toggle
      },
      {
        path: "/datefs",
        name: "切换一",
        id: 21,
        component: Toggle
      },
      {
        path: "/datefd",
        name: "切换一",
        id: 22,
        component: Toggle
      },
      {
        path: "/dates",
        name: "切换一",
        id: 221,
        component: Toggle
      }
    ]
  },
  {
    path: "/forminput",
    name: "表单输入",
    component: FormInput,
    icon: "appstore",
    id: 23,
    children: [
      {
        path: "/datesg",
        name: "切换一",
        id: 23,
        component: Toggle
      },
      {
        path: "/datetts",
        name: "切换一",
        id: 24,
        component: Toggle
      },
      {
        path: "/datets",
        name: "切换一",
        id: 25,
        component: Toggle
      },
      {
        path: "/datec",
        name: "切换一",
        id: 26,
        component: Toggle
      },
      {
        path: "/datesa",
        name: "切换一",
        id: 27,
        component: Toggle
      },
      {
        path: "/datesf",
        name: "切换一",
        id: 28,
        component: Toggle
      },
      {
        path: "/dates",
        name: "切换一",
        id: 29,
        component: Toggle
      },
      {
        path: "/datec",
        name: "切换一",
        id: 30,
        component: Toggle
      }
    ]
  },
  {
    path: "/table-base",
    name: "基础表单",
    id: 31,
    component: TableBaseComponent,
    icon: "appstore",
    children: [
      {
        path: "/toggle",
        name: "切换一",
        id: 32,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 33,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 34,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 35,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 36,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 37,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 38,
        component: Toggle
      },
      {
        path: "/toggle",
        name: "切换一",
        id: 39,
        component: Toggle
      }
    ]
  },
  {
    path: "/checkbox",
    name: "多选",
    component: CheckboxComponent,
    icon: "appstore",
    id: 40,
    children: [
      {
        path: "/togglecd",
        name: "切换一",
        id: 41,
        component: Toggle
      },
      {
        path: "/toggleaq",
        name: "切换一",
        id: 42,
        component: Toggle
      },
      {
        path: "/toggle345",
        name: "切换一",
        id: 43,
        component: Toggle
      },
      {
        path: "/toggle22",
        name: "切换一",
        id: 44,
        component: Toggle
      },
      {
        path: "/toggle5",
        name: "切换一",
        id: 45,
        component: Toggle
      },
      {
        path: "/toggle4",
        name: "切换一",
        id: 46,
        component: Toggle
      },
      {
        path: "/toggle3",
        name: "切换一",
        id: 47,
        component: Toggle
      },
      {
        path: "/toggle2",
        name: "切换一",
        id: 48,
        component: Toggle
      }
    ]
  }
];
