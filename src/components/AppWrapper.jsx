import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Slidercomp } from "./Slidercomp";
import AdBanner from "./Ad/AdBanner";
export default function AppWrapper() {
  return (
    <main className="flex bg-white h-screen">
      <aside className="w-[290px] h-ful sticky top-0">
        <Slidercomp />
      </aside>
      <div className="flex flex-1 flex-col h-screen">
        <Header />
        {/* <AdBanner /> */}
        <Outlet />
      </div>
    </main>
  );
}
