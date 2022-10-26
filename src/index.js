import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const WidgetDivs = document.querySelectorAll('.trupulse-widget')
WidgetDivs.forEach(Div => {
  const companyName = Div.getAttribute("data-company-name")
  return(
    ReactDOM.render(
      <React.StrictMode>
        <App companyName={companyName}/>
      </React.StrictMode>,Div
    )
  )
  })