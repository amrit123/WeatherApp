const stationList=[];

export default(state=stationList,action)=>{
    switch(action.type){
        case "ADD_STATION":
       return [
           ...state,
           action.station
       ]

      
        default:
        return state
    }

}