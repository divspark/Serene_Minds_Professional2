import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Slidercomp } from "./Slidercomp";
import Poster from "../assets/poster.png";
export default function AppWrapper() {
  return (
    <main className="flex bg-white h-screen">
      <aside className="w-1/6 h-ful sticky top-0">
        <Slidercomp />
      </aside>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="p-5">
          <img src={Poster} alt="Poster" className="w-full object-cover" />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
