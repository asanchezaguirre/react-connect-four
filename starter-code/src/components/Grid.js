import React, { Component} from 'react';


class Grid extends Component{

	handleClick(){
		console.log("Click on column")
	}

	render(){
		return(
			<div className= "cell" onClick ={()=> this.handleClick()}>
				<p>{this.props.x}, {this.props.y}</p>
			</div>
			);
	}
}
export default Grid;


//Se pinta el Grid utilizando eje x y eje y, para definir la tabla
//Declaro el evento del click, sobre el div en donde tendré las celdas
//