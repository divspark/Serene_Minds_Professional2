import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Slidercomp } from "./Slidercomp";
import AdBanner from "./Ad/AdBanner";
export default function AppWrapper() {
  return (
    <main className="flex bg-white h-screen">
      {/* Fixed Sidebar */}
      <aside className="w-[290px] fixed top-0 left-0 h-full z-10">
        <Slidercomp />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col ml-[290px] h-screen">
        {/* Sticky Header */}
        <header className="sticky top-0 ">
          <Header />
        </header>

        {/* Main Content with Scroll */}
        <section className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
