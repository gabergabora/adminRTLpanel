import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  colorMappingData,
  rangeColorMapping,
} from "../../data/dummy";

import ChartHeadr from "../../components/ChartHeader";
import { useStateContext } from "../../context/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeadr
        category="میله‌ای - رنگی"
        title="دمای هوای مشهد در سال 1400"
      />
      <div className="w-full">
        <ChartComponent
          enableRtl
          id="charts"
          primaryXAxis={{
            ...ColorMappingPrimaryXAxis,
            labelStyle: { color: currentMode === "Dark" ? "white" : "" },
            titleStyle: { color: currentMode === "Dark" ? "white" : "" },
          }}
          primaryYAxis={{
            ...ColorMappingPrimaryYAxis,
            labelStyle: { color: currentMode === "Dark" ? "white" : "" },
            titleStyle: { color: currentMode === "Dark" ? "white" : "" },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
          legendSettings={{
            background: currentMode === "Dark" ? "#33373E" : "#FFF",
            textStyle: {
              color: currentMode === "Dark" ? "white" : "",
            },
            mode: "Range",
          }}
        >
          <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="تهران"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
