// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
      },
      {
        name: "signup",
        title: "Signup page",
        component: SignUpPage,
        path: "/signup",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: HomePage,
        path: "/home",
      },
      {
        name: "profile",
        title: "profile page",
        component: ProfilePage,
        path: "/profile",
      },
      {
        name: "feed",
        title: "feed page",
        component: FeedPage,
        path: "/feed",
      },
    ],
  },
];
