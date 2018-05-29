import SignUp from "../containers/SignUp/SignUp";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";

const singlePagesRoutes = [
    {
        path: "/sign-up",
        name: "Sign Up",
        short: "Sign Up",
        mini: "SU",
        icon: PersonAdd,
        component: SignUp
    },
    {
        path: "/sign-in",
        name: "Login Page",
        short: "Login",
        mini: "LP",
        icon: Fingerprint,
        component: SignUp
    },
    {
        path: "/confirmation",
        name: "Confirmation",
        short: "Confirmation",
        mini: "CM",
        icon: Fingerprint,
        component: SignUp
    }
];

export default singlePagesRoutes;