import Test from "../components/empty";
import Main from "../containers/Main/Main";
import SignUp from "../containers/SignUp/SignUp";
import SinglePage from "../containers/SinglePage/SinglePage";
var indexRoutes = [
    {
        path: "/main",
        name: "Main",
        component: Main
    },
    {
        path: "/sign-in",
        name: "Sign In",
        component: SinglePage
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: SignUp
    },
    {
        path: "/confirm",
        name: "Confirmation",
        component: SinglePage
    }
];

export default indexRoutes;