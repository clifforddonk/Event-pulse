import { createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import CreateAccount from "./CreateAccount";

export const router = createBrowserRouter([
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <CreateAccount /> },
]);
