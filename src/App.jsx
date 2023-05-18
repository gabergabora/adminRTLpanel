/* eslint-disable no-unused-vars */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { RiSettingsLine } from "react-icons/ri";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
import Calendar from "./pages/Calendar";
import LineChart from "./pages/Charts/LineChart";
import Customers from "./pages/Customers";
import Ecommerce from "./pages/Ecommerce";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";

// local setting for syncfusion

import { loadCldr } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
import * as numbers from "cldr-data/main/fa/numbers.json";
import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as weekData from "cldr-data/supplemental/weekData.json";
import Area from "./pages/Charts/Area";
import Bar from "./pages/Charts/Bar";
import ColorMapping from "./pages/Charts/ColorMapping";
import Financial from "./pages/Charts/Financial";
import Pyramid from "./pages/Charts/Pyramid";
import Stacked from "./pages/Charts/Stacked";
import Pie from "./pages/Charts/pie";
import ColorPicker from "./pages/ColorPicker";
import Editor from "./pages/Editor";
import Kanban from "./pages/Kanban";

function App() {
  loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
  const {
    activeMenu,
    themeSetting,
    setThemeSetting,
    currentColor,
    currentMode,
    isClicked,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-[10000]">
            <TooltipComponent content="تنظیمات" position="TopRight">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full"
                style={{ background: currentColor }}
                onClick={() => setThemeSetting(true)}
              >
                <RiSettingsLine />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed shrink-0  
              dark:bg-secondary-dark-bg bg-white"
              style={{ zIndex: isClicked.cart ? "10" : "10009" }}
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen min-w-full grow ${
              activeMenu && "lg:pr-72"
            }`}
          >
            <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashbord */}

                <Route path="/" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
