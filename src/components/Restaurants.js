import React from "react";

class Restaurants extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.image_url && <img src={this.props.image_url} />
				}
				{
					this.props.name && <p><b>{this.props.name}</b></p>
				}
				{
					this.props.address && <p>Address: {this.props.address}</p>
				}
				{
					this.props.price && <p>Price: ${this.props.price}</p>
				}
			</div>
		);
	}
};

export default Restaurants;