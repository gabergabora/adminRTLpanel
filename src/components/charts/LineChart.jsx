import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="line-chart"
      height="420px"
      primaryXAxis={{
        ...LinePrimaryXAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...LinePrimaryYAxis,
        labelStyle: { color: currentMode === "Dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      style={{ color: "#fff" }}
      palettes={[
        "#00BDAE",
        currentMode === "Dark" ? "#f6e58d" : "#4b4b4b",
        "#EE5A24",
      ]}
      legendSettings={{
        background: currentMode === "Dark" ? "#33373E" : "#FFF",
        textStyle: {
          color: currentMode === "Dark" ? "white" : "",
        },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
