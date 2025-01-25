import express from "express";
import { Routes } from "../types/interfaces/app.inter";
import AuthRoute from "./auth.route";
import ProfileRoute from "./profile.route";
import AssignmentRoute from "./assignment.route";
import CommunityRoute from "./community.route";

const AppRouter = express.Router();

const appRoutes: Routes = [
    {
        path: "/auth",
        router: AuthRoute,
    },
    {
        path: "/profile",
        router: ProfileRoute,
    },
    {
        path: "/assignment",
        router: AssignmentRoute,
    },
    {
        path: "/community",
        router: CommunityRoute,
    }
];

appRoutes.forEach((route) => {
    AppRouter.use(route.path, route.router);
});

export default AppRouter;
