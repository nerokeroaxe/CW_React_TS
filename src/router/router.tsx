import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import CreateSpaceShipPage from "../pages/CreateSpaceShipPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "/create", element: <CreateSpaceShipPage /> }
        ]
    },
])

export default router;