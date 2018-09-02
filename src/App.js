import React from "react";

//import child components
import Titles from "./components/Titles";
import Form from "./components/Form";
import Restaurants from "./components/Restaurants";

//API key: "a1c7b724-0a20-42be-9dd4-23d873db1f9b"
const API_KEY = "a1c7b724-0a20-42be-9dd4-23d873db1f9b";

//URL: "http://opentable.herokuapp.com/api/restaurants?city=ottawa&appid=a1c7b724-0a20-42be-9dd4-23d873db1f9b"

class App extends React.Component{
  //use state object to show the data on the screen
    state = {
      name: undefined,
      address: undefined,
      price: undefined,
      //rating: undefined,
      error: undefined
    }

  //create a arrow function to get the data
  getRestaurant = async (e) => {
    
    //prevent the full page refresh
    e.preventDefault();

    //get data from input label
    const city = e.target.elements.city.value;

    //make a api call
    const api_call = await fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}&appid=${API_KEY}`);

    //convert the data that get from api_call to json file
    const data = await api_call.json();

    //if you enterd city, show the data
    if(city){
      //show the data
      console.log(data);

      //setState method
      this.setState({
        name: data.restaurants[0].name,
        address: data.restaurants[0].address,
        price: data.restaurants[0].price,
        //rating: data.restaurants.aggregate_score,
        error: ""
      });
    }else{
      this.setState({
        name: undefined,
        address: undefined,
        price: undefined,
        //rating: undefined,
        error: "Please enter the city name."
      });
    }
  }

  render(){
    return(
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                
                  <div className="title-container">
                    <Titles />
                  </div>

                  <div class="form-container">
                    <Form getRestaurant = { this.getRestaurant } />
                  </div>

                  <div class="restaurants-container row">
                    <div class="col-md-4">
                      <Restaurants
                        name = { this.state.name }
                        address = { this.state.address }
                        price = { this.state.price}
                        //rating = { this.state.aggregate_score}
                        error = { this.state.error }
                      />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default App;