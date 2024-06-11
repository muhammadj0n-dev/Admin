import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import App from "../App";
import { Photos, Users, Comments, Todos, Login,Cars } from "@pages";
import MiniDrawer from "../components/pages/driwer"; 

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elemetn={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<MiniDrawer />}>
          <Route index element={<Cars />} />
          <Route path="users" element={<Users />} />
          <Route path="photos" element={<Photos />} />
          <Route path="comments" element={<Comments />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default index;
