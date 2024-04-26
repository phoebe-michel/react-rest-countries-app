import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Countries, { countriesLoader } from "./components/Countries";
import NotFoundPage from "./routes/NotFound";
import CountryDetails, { countryLoader } from "./routes/CountryDetails";

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
          loader: countriesLoader,
        },
        {
          path: "countries/:countryCode",
          element: <CountryDetails />,
          loader: countryLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
