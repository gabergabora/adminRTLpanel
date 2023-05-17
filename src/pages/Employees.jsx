import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import Header from "../components/Header";
import { employeesData, employeesGrid } from "../data/dummy";
import customPager from "../utilities/customPager";

const Employees = () => {
  let grid;
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="صفحه" title="کارمندان" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        enableRtl
        pageSettings={{
          template: (pagerData) => customPager(pagerData, grid),
          pageSize: 8,
        }}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
