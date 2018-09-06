import request from './request'

const getRestaurant = user => request(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)

export { getRestaurant }
