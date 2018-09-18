import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StationItem from "./StationItem";


export  class StationListItem extends Component {
    
  render() {
   let stationItem;
        if(this.props.stationList){
          stationItem=this.props.stationList.map((station,i)=>(
                <StationItem key={i} {...station.data} />
            ))
            
        }
    return (
      <div className="station-container">
      <Link className="button" to="/addStation">Add Station</Link><br/> 
      <div className="station-list">
      <div className="station-list-title"><h1>Station List</h1></div>
      {this.props.stationList.length===0 && <p className="no-station">No stations added</p> }
      
     {stationItem} 
      </div>
      </div>
     
          
    )
  }
}
 const mapStateToProps=(state)=>{
  return{
stationList:state.stationReducer
  }
} 

export default connect(mapStateToProps)(StationListItem);

