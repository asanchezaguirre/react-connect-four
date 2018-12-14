import React, { Component} from 'react';
import Grid from './components/Grid'

class App extends Component{
  render(){
    var cells = [];

    for (let y = 0; y < 6; y++) {
      var row = [];
      for (let x = 0; x < 7; x++){
        row.push(<Grid x={x} y={y} />)
      } 
      cells.push(<div className="row">{row}</div>)
    }
    return(
        <div>
         {cells}
        </div>
      );
  }
}
export default App;

//Declaro una variable vacìa para las celdas
//Hago dos for
//LLamo a Grid para darles valores desde for
