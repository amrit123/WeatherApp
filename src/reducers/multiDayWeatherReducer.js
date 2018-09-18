

const fiveDayweatherList=[];

export default(state=fiveDayweatherList,action)=>{
    switch(action.type){
        case "GET_FIVE_DAY_WEATHER":
       return [
           action.data
       ]

      
        default:
        return state
    }

}