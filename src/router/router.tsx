import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
//
import HomePage from "../page/HomePage";
import UsersPage from "../page/UsersPage";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'users', element: <UsersPage /> }
      ]
    }
  ])
}
