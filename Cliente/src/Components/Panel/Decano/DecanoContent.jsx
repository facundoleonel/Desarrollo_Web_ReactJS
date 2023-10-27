import { PieChart } from "chartist";
import React, { Component } from "react";
import { obtenerData } from "./utils";

export class DecanoContent extends Component {
  async componentDidUpdate(){
    const {labels, series} = await obtenerData();
    // console.log(metric);

    const options = {
      height: "400px",
      
    };
    const data = {
      labels,
      series };

    new PieChart("#grafico", data, options);
  }
  render() {
    return (
      <>
        <div id="grafico"></div>
      </>
    );
  }
}
