import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.tsx";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-stone-500 to-stone-700">
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout;
