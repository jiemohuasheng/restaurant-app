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
      restaurants: [],
    }

  //create an arrow function to get the data
  getRestaurant = async (e) => {
    
    //prevent the full page refresh
    e.preventDefault();

    //get data from input label
    const city = e.target.elements.city.value;

    //make a api call
    const api_call = await fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}&appid=${API_KEY}`);

    //convert the data that get from api_call to json file
    const data = await api_call.json();

    //if enter city, show the data
    if(city){
      
      //setState method to update state
      this.setState({
        restaurants: data.restaurants,
      });
    }else{
      this.setState({
        restaurants: [],
      });
    }
  }

  render(){
    const { restaurants } = this.state;
    return(
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                
                  <div className="title-container">
                    <Titles />
                  </div>

                  <div className="form-container">
                    <Form getRestaurant = { this.getRestaurant } />
                  </div>

                  <div className="restaurants-container row">

                    {/* use index to visit single data in restaurants
                        @restaurants  all restaurants
                        @restaurant   every sigle restaurant
                        @key          the unique id of restaurant
                    */}
                 
                    { restaurants.map((restaurant, index) => {
                      return <div className="col-md-4 restaurant_box" key={restaurant.id}>
                                <Restaurants
                                  name = { restaurant.name }
                                  address = { restaurant.address }
                                  price = { restaurant.price}
                                  image_url = { restaurant.image_url }
                                />
                             </div>
                      })
                    }
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default App;