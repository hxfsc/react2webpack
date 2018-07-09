import Base from "../components/base/BaseComponent";
import Intro from "../components/base/IntroComponent";
import Props from "../components/base/PropsComponent";
import DateC from "../components/base/DateComponent";
import Toggle from "../components/base/ToggleComponent";
import FormInput from "../components/base/FormInputComponent";
import TableBaseComponent from "../components/table/TableBaseComponent";
import CheckboxComponent from "../components/Form/CheckboxComponent";

export default [
    {
        path: "/",
        exact: true,
        breadcrumbName: "首页",
        component: Base
    },
    {
        path: "/base",
        breadcrumbName: "基础",
        component: Base
    },
    {
        path: "/intro",
        breadcrumbName: "简介",
        component: Intro,
        routes: [
            {
                path: "/intro/bus",
                component: DateC
            },
            {
                path: "/intro/cart",
                component: DateC
            }
        ]
    },
    {
        path: "/toggle",
        breadcrumbName: "切换",
        component: Toggle
    },
    {
        path: "/forminput",
        breadcrumbName: "表单输入",
        component: FormInput
    },
    {
        path: "/table-base",
        breadcrumbName: "基础表单",
        component: TableBaseComponent
    },
    {
        path: "/checkbox",
        breadcrumbName: "多选",
        component: CheckboxComponent
    }
];
