import { PieChart } from "chartist";
import React, { Component } from "react";

export class Ejemplo extends Component {
  componentDidMount() {
    const data = {
      labels: ["Inscripciones", "Estudiantes", "Carreras", "Materias"],
      series: [20, 15, 40, 20],
    };

    const options = {
      width: '300px',
      height: '300px'
    };

    new PieChart("#grafico", data, options);
  }
  render() {
    return <>
    <div id="grafico"></div>
    </>;
  }
}

//   return (
//     <div>{Grafico.createChart()}</div>
//   )
// }
