import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-gray-450 text-teal-980 mb-48 dark:text-white">
      <Header />
      <Outlet />
    </section>
  );
};

export default RootLayout;
