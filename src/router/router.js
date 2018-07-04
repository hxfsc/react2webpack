import Base from "../components/base/BaseComponent";
import Intro from "../components/base/IntroComponent";
import Props from "../components/base/PropsComponent";
import DateC from "../components/base/DateComponent";
import Toggle from "../components/base/ToggleComponent";
import FormInput from "../components/base/FormInputComponent";
import TableBaseComponent from "../components/table/TableBaseComponent";
import CheckboxComponent from "../components/Form/CheckboxComponent";



export default [{
    path: "/",
    exact: true,
    component: Base
},{
    path: "/base",
    component: Base
},{
    path: "/intro",
    component: Intro
},{
    path: "/toggle",
    component: Toggle
},{
    path: "/forminput",
    component: FormInput
},{
    path: "/table-base",
    component: TableBaseComponent
},{
    path: "/checkbox",
    component: CheckboxComponent
}]
