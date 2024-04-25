import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Countries from "./components/Countries";
import NotFoundPage from "./routes/NotFound";
import CountryDetails from "./routes/CountryDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "",
          element: <Countries />,
        },
        {
          path: "countries/:countryCode",
          element: <CountryDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
