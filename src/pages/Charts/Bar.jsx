import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import ChartHeadr from "../../components/ChartHeader";
import { useStateContext } from "../../context/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeadr category="میله‌ای" title="تعداد مدال‌های المپیک" />
      <ChartComponent
        enableRtl
        id="charts"
        primaryXAxis={{
          ...barPrimaryXAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        primaryYAxis={{
          ...barPrimaryYAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        style={{ color: "#fff" }}
        palettes={[
          "#00BDAE",
          currentMode === "Dark" ? "#ffa801" : "#4b4b4b",
          "#ff5e57",
        ]}
        legendSettings={{
          background: currentMode === "Dark" ? "#33373E" : "#FFF",
          textStyle: {
            color: currentMode === "Dark" ? "white" : "",
          },
        }}
      >
        <Inject
          services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
