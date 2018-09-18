//current weather reducers
const currentWeather=[];

export default(state=currentWeather,action)=>{
    switch(action.type){
        case "SET_CURRENT_WEATHER":
       return [
           action.weather
       ]

      
        default:
        return state
    }

}
