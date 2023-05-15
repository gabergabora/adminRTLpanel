/* eslint-disable no-unused-vars */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { RiSettingsLine } from "react-icons/ri";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateContext } from "./context/ContextProvider";
function App() {
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
              className={`w-72 fixed shrink-0  z-[10000000]
              }] dark:bg-secondary-dark-bg bg-white`}
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
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
