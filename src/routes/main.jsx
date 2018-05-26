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
        path: "/main/dashboard",
        name: "Dashboard",
        icon: DashboardIcon,
        component: Test
    },
    {
        collapse: true,
        path: "-page",
        name: "Company",
        state: "openCopmany",
        icon: Image,
        views: [
            {
                path: "/main/copmany-management",
                name: "Management",
                mini: "CM",
                component: Test
            },
            {
                path: "/main/company-list",
                name: "Add Company",
                mini: "AC",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/main/organization",
        name: "Structure",
        state: "openOrganizationStructure",
        icon: Apps,
        views: [
            {
                path: "/main/establishmentVsPOS",
                name: "Establishment",
                mini: "EP",
                component: Test
            },
            {
                path: "/main/warehouse",
                name: "Warehouse",
                mini: "WH",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/main/entity",
        name: "Entity",
        state: "openEntity",
        icon: ContentPaste,
        views: [
            {
                path: "/main/products",
                name: "Products",
                mini: "PD",
                component: Test
            },
            {
                path: "/main/product-class",
                name: "Product class",
                mini: "PC",
                component: Test
            },
            {
                path: "/main/discount",
                name: "Discount",
                mini: "DC",
                component: Test
            },
            {
                path: "/main/tax",
                name: "Tax",
                mini: "TX",
                component: Test
            },
            {
                path: "/main/service-fee",
                name: "Service Fee",
                mini: "SF",
                component: Test
            },
            {
                path: "/main/vendor",
                name: "Vendor",
                mini: "VD",
                component: Test
            },
            {
                path: "/main/establishment",
                name: "Establishment",
                mini: "EB",
                component: Test
            },
            {
                path: "/main/warehouse",
                name: "Warehouse",
                mini: "WH",
                component: Test
            }
        ]
    },
    {
        path: "/main/vendors-management",
        name: "Vendors",
        icon: DashboardIcon,
        component: Test
    },
    {
        path: "/main/inventory",
        name: "Inventory",
        icon: DashboardIcon,
        component: Test
    },
    {
        path: "/main/crm",
        name: "CRM",
        icon: DashboardIcon,
        component: Test
    },
    {
        path: "/main/hrms",
        name: "HRMS",
        icon: DashboardIcon,
        component: Test
    },
    {
        collapse: true,
        path: "/main/report",
        name: "Report",
        state: "openReport",
        icon: GridOn,
        views: [
            {
                path: "/main/report/summary",
                name: "Summary",
                mini: "SM",
                component: Test
            },
            {
                path: "/main/report/by-tills",
                name: "By Tills",
                mini: "BT",
                component: Test
            },
            {
                path: "/main/report/orders",
                name: "Orders",
                mini: "OD",
                component: Test
            },
            {
                path: "/main/report/payment",
                name: "Payments",
                mini: "PM",
                component: Test
            },
            {
                path: "/main/report/hourlySales",
                name: "Hourly Sales",
                mini: "HS",
                component: Test
            },
            {
                path: "/main/report/productProfit",
                name: "Product Profit",
                mini: "PP",
                component: Test
            },
            {
                path: "/main/report/Inventory",
                name: "Inventory",
                mini: "IV",
                component: Test
            },
            {
                path: "/main/report/customers",
                name: "Customers",
                mini: "CM",
                component: Test
            },
            {
                path: "/main/report/vendors",
                name: "Vendors",
                mini: "VN",
                component: Test
            },
            {
                path: "/main/report/debts",
                name: "Debts",
                mini: "DB",
                component: Test
            },
            {
                path: "/main/report/discount",
                name: "Discount",
                mini: "DC",
                component: Test
            },
            {
                path: "/main/report/service-fee",
                name: "Service Fee",
                mini: "SF",
                component: Test
            }
        ]
    },
    {
        collapse: true,
        path: "/main/settings",
        name: "Settings",
        state: "openSettings",
        icon: GridOn,
        views: [
            {
                path: "/main/settings/currency",
                name: "Currency",
                mini: "CC",
                component: Test
            },
            {
                path: "/main/settings/account",
                name: "Account",
                mini: "AC",
                component: Test
            },
            {
                path: "/main/settings/payment-type",
                name: "Payment Ty0e",
                mini: "PT",
                component: Test
            }
        ]
    },
    {
        path: "/main/schedule",
        name: "Schedule",
        icon: DashboardIcon,
        component: Test
    },
    {
        redirect: true,
        path: "/main",
        pathTo: "/main/dashboard",
        name: "Dashboard"
    }
];

export default dashRoutes;
