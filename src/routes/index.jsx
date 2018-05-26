import Test from "../components/empty";
import Main from "../containers/Main/Main";
var indexRoutes = [
    {
        path: "/main",
        name: "Main",
        component: Main
    },
    {
        path: "/sign-in",
        name: "Sign In",
        component: Test
    },
    {
        path: "/sign-up",
        name: "Sign Up",
        component: Test
    },
    {
        path: "/confirm",
        name: "Confirmation",
        component: Test
    }
];

export default indexRoutes;