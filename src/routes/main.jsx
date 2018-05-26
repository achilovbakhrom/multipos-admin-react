import Test from "../components/empty";


// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";


var dashRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: DashboardIcon,
        component: Test
    },
    {
        collapse: true,
        path: "-page",
        name: "Pages",
        state: "openPages",
        icon: Image,
        views: [
            {
                path: "/components/buttons",
                name: "Buttons",
                mini: "B",
                component: Test
            },
            {
                path: "/components/grid-system",
                name: "Grid System",
                mini: "GS",
                component: Test
            },
            {
                path: "/components/panels",
                name: "Panels",
                mini: "P",
                component: Test
            },
            {
                path: "/components/sweet-alert",
                name: "Sweet Alert",
                mini: "SA",
                component: Test
            },
            {
                path: "/components/notifications",
                name: "Notifications",
                mini: "N",
                component: Test
            },
            { path: "/components/icons", name: "Icons", mini: "I", component: Test },
            {
                path: "/components/typography",
                name: "Typography",
                mini: "T",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/components",
        name: "Components",
        state: "openComponents",
        icon: Apps,
        views: [
            {
                path: "/components/buttons",
                name: "Buttons",
                mini: "B",
                component: Test
            },
            {
                path: "/components/grid-system",
                name: "Grid System",
                mini: "GS",
                component: Test
            },
            {
                path: "/components/panels",
                name: "Panels",
                mini: "P",
                component: Test
            },
            {
                path: "/components/sweet-alert",
                name: "Sweet Alert",
                mini: "SA",
                component: Test
            },
            {
                path: "/components/notifications",
                name: "Notifications",
                mini: "N",
                component: Test
            },
            { path: "/components/icons", name: "Icons", mini: "I", component: Test },
            {
                path: "/components/typography",
                name: "Typography",
                mini: "T",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/forms",
        name: "Forms",
        state: "openForms",
        icon: ContentPaste,
        views: [
            {
                path: "/forms/regular-forms",
                name: "Regular Forms",
                mini: "RF",
                component: Test
            },
            {
                path: "/forms/extended-forms",
                name: "Extended Forms",
                mini: "EF",
                component: Test
            },
            {
                path: "/forms/validation-forms",
                name: "Validation Forms",
                mini: "VF",
                component: Test
            },
            { path: "/forms/wizard", name: "Wizard", mini: "W", component: Test }
        ]
    },
    {
        collapse: true,
        path: "/tables",
        name: "Tables",
        state: "openTables",
        icon: GridOn,
        views: [
            {
                path: "/tables/regular-tables",
                name: "Regular Tables",
                mini: "RT",
                component: Test
            },
            {
                path: "/tables/extended-tables",
                name: "Extended Tables",
                mini: "ET",
                component: Test
            },
            {
                path: "/tables/react-tables",
                name: "React Tables",
                mini: "RT",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/maps",
        name: "Maps",
        state: "openMaps",
        icon: Place,
        views: [
            {
                path: "/maps/google-maps",
                name: "Google Maps",
                mini: "GM",
                component: Test
            },
            {
                path: "/maps/full-screen-maps",
                name: "Full Screen Map",
                mini: "FSM",
                component: Test
            },
            {
                path: "/maps/vector-maps",
                name: "Vector Map",
                mini: "VM",
                component: Test
            }
        ]
    },
    { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Test },
    { path: "/charts", name: "Charts", icon: Timeline, component: Test },
    { path: "/calendar", name: "Calendar", icon: DateRange, component: Test },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;
