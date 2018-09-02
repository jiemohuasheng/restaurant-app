import React from "react";

class Restaurants extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.name && <p>Name: {this.props.name}</p>
				}
				{
					this.props.address && <p>Address: {this.props.address}</p>
				}
				{
					this.props.price && <p>Price: {this.props.price}</p>
				}
				{
					this.props.error && <p>{this.props.error}</p>
				}
			</div>
		);
	}
};

export default Restaurants;