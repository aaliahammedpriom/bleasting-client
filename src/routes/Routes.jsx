import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import FitnessPlan from "../pages/FitnessPlan/FitnessPlan";
import MealPlan from "../pages/mealPlan/MealPlan";
import ClientExperienses from "../pages/ClientExperirnces/ClientExperienses";
import Excurtions from "../pages/Excutsions/Excursions";
import Accommondation from "../pages/Accommondation/Accommondation";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import MyWallet from "../pages/Mywallet/MyWallet";
import UserAccount from "../layouts/UserAccount";
import MyOrder from "../pages/MyOrder/MyOrder";
import MyAddresses from "../pages/MyAddresses/MyAddresses";
import MySubscriptions from "../pages/MySubscriptions/MySubscriptions";
import MyBooking from "../pages/MyBooking/MyBooking";
import MyAccount from "../pages/MyAccount/MyAccount";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "fitnessplan",
                element: <FitnessPlan></FitnessPlan>,
            },
            {
                path: "mealplan",
                element: <MealPlan></MealPlan>,
            },
            {
                path: "clientexperienses",
                element: <ClientExperienses></ClientExperienses>,
            },
            {
                path: "excurtions",
                element: <Excurtions></Excurtions>,
            },
            {
                path: "accommodation",
                element: <Accommondation></Accommondation>,
            },
            {
                path: "pricing",
                element: <Pricing></Pricing>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
            {
                path: "faq",
                element: <TermsAndConditions></TermsAndConditions>,
            },
            {
                path: "account",
                element: <UserAccount></UserAccount>,
                children: [
                    {
                        path: "my-wallet",
                        element: <MyWallet></MyWallet>,
                    },
                    {
                        path: "my-orders",
                        element: <MyOrder></MyOrder>,
                    },
                    {
                        path: "my-addresses",
                        element: <MyAddresses></MyAddresses>,
                    },
                    {
                        path: "my-subscriptions",
                        element: <MySubscriptions></MySubscriptions>,
                    },
                    {
                        path: "my-bookings",
                        element: <MyBooking></MyBooking>,
                    },
                    {
                        path: "my-account",
                        element: <MyAccount></MyAccount>,
                    },
                    
                ]
            },
        ],

    },
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
