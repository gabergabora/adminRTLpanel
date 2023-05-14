import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ContextProvider } from "./context/ContextProvider.jsx";
import "./index.css";

//  syncfusion license ///////////////////////

registerLicense(
  "Mgo+DSMBaFt+QHJqVk1mQ1BGaV1CX2BZfVl0QmlYfE4BCV5EYF5SRHNeQV1mS39QdE1lXn4=;Mgo+DSMBPh8sVXJ1S0R+X1pCaV5AQmFJfFBmRmlbeFRxd0U3HVdTRHRcQlhiSn5WdERgW3dWeXU=;ORg4AjUWIQA/Gnt2VFhiQlJPcEBDX3xLflF1VWBTfVl6dVZWESFaRnZdQV1mSH1Tc0diWn1XcHNU;MjAyODk1MEAzMjMxMmUzMjJlMzNoY1NOcGgvRXR2RGtYMndmLy9BRGI4MW9yS2xMZEFzY0NtKytxWFN5VzFBPQ==;MjAyODk1MUAzMjMxMmUzMjJlMzNWcTJ0N0lTeTF1Q3hVTUE4eGRsWHhCSy9BS0JzRkV4WjZvNUFEem5mS1BzPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldXGFWfFN0RnNadVx3flRFcC0sT3RfQF5jTH9QdkBhWHxceXNcRw==;MjAyODk1M0AzMjMxMmUzMjJlMzNEVkF6YU0xaWhCVG8reUN6d0IwQmxQTjZJS25uODZsMDhVRXZEcDNTNWx3PQ==;MjAyODk1NEAzMjMxMmUzMjJlMzNHU0M4VTB3NlhxMFhkK3NObmc2ZUtaODAxZDc5QUJTUHlTY250a1FNTGgwPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBDX3xLflF1VWBTfVl6dVZWESFaRnZdQV1mSH1Tc0diWnxedHNU;MjAyODk1NkAzMjMxMmUzMjJlMzNsK3lBbG9ES2p5Z1NwNGNOcXduK2Q0RjhJdUtvMnpjUFhmODIwOUdQREhzPQ==;MjAyODk1N0AzMjMxMmUzMjJlMzNWTTloamxkblQxQjEzQnl0SERvUXhJT1F0RGFPUnQzZ1lFWGs2ZkYydEI4PQ==;MjAyODk1OEAzMjMxMmUzMjJlMzNEVkF6YU0xaWhCVG8reUN6d0IwQmxQTjZJS25uODZsMDhVRXZEcDNTNWx3PQ=="
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
