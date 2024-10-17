// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FeedPage from "../pages/FeedPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import { renderRoutes } from "./generate-routes";

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
      {
        name: "404 not found",
        title: "404 not found",
        component: NotFoundPage,
        path: "/404",
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

export const Routes = renderRoutes(routes);
