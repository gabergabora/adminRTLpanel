import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { RxComponent1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/dummy";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const handelCloseSidebar = () => {
    if (activeMenu && screenSize <= 1024) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="mr-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handelCloseSidebar}
              className="flex items-center gap-3 mr-3 mt-4 text-xl font-bold tracking-tight  dark:text-white text-slate-900"
            >
              <span
                className="border-2 border-gray-500 rounded-full p-[5px] flex items-center justify-center
            "
              >
                <RxComponent1 className="text-xl" />
              </span>
              <span>پــارس ادمینــ</span>
            </Link>
            <TooltipComponent
              enableRtl={true}
              content="بستن منو"
              position="BottomCenter"
            >
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="text-xl rounded-full p-1 hover:bg-light-gray dark:hover:bg-gray-500 mt-4 ml-4 block dark:text-gray-50 lg:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.to}`}
                    key={link.name}
                    onClick={handelCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-5 pr-4 pt-2 pb-2.5 rounded-lg text-white m-2 "
                        : "flex items-center gap-5 pr-4 pt-2 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200    dark:hover:text-black hover:bg-light-gray m-2"
                    }
                  >
                    {link.icon}
                    <span className="text-sm">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
