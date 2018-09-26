import React, { Component } from 'react';
import { connect } from "react-redux";
import {startAddStation} from "../action/stationsAction";


export class AddStation extends Component {

    state = {
        external_id:"",
        name:"",
        latitude:"",
        longitude:"",
        altitude:"",
        isValid:false,
        error:"",
        showAddStation:false,
        showstationList:false
        
    }
    handleExternalIdChange=(e)=>{
        const external_id=e.target.value;
        this.setState(()=> ({external_id}) );
    }
    handleNameChange=(e)=>{
        const name=e.target.value;
        this.setState(()=> ({name}) );
        
    }
    handleLatitudeChange=(e)=>{
        const latitude=e.target.value;    
        this.setState(()=> ({latitude}) );
        
    }
    handleLongitudeChange=(e)=>{
        const longitude=e.target.value;
        this.setState(()=> ({longitude}) );
    }
    handleAltitiudeChange=(e)=>{
        const altitude=e.target.value;
        this.setState(()=> ({altitude}) );
    }

    submitForm=(e)=>{
    e.preventDefault();
    console.log()
    if(!(this.state.latitude >-90) || !(this.state.latitude<90)){
        this.setState(()=>({error:"Please Enter valid latitude range"}));
        this.setState(()=> ({latitude:""}) );
    }else if(!(this.state.longitude >-180) || !(this.state.longitude<180)){
        this.setState(()=>({error:"Please Enter valid longitude range"}));
        this.setState(()=> ({longitude:""}) );
    }
    else{
        this.setState(()=>({error:""}));
        const data={
            "external_id":this.state.external_id,
            "name":this.state.name,
            "latitude":parseFloat(this.state.latitude),
            "longitude":parseFloat(this.state.longitude),
            "altitude":parseFloat(this.state.altitude)
            }       
            this.props.dispatch(startAddStation(data));
            this.props.history.push("/viewStation");
    }
     
    }

    render() {
        
        return (
            
                <div className="station-container">
                    <form className="form" onSubmit={this.submitForm}>
                    {this.state.error && <p className="form-error-text">{this.state.error} </p> }
                            <input value={this.state.external_id}
                                onChange={this.handleExternalIdChange}
                                placeholder="unique id"
                                autoFocus
                                type="text"  
                                required
                                className="text-input"/>
                        
                        
                            <input
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Station name"
                                type="text"
                                required 
                                className="text-input" />
                        
                        
                            <input
                                value={this.state.latitude}
                                onChange={this.handleLatitudeChange}
                                placeholder="latitude[-90,+90]" type="text" 
                                required
                                className="text-input" /> 
                        
                            <input
                                value={this.state.longitude}
                                onChange={this.handleLongitudeChange}
                                placeholder="longitude[-180, +180]" type="text" 
                                required
                                className="text-input" />
                        
                        
                            <input
                                value={this.state.altitiude}
                                onChange={this.handleAltitiudeChange}
                                placeholder="altitiude(in meter)" type="number" step="any"
                                required
                                className="text-input" /> 
                       <div>
                       <button className="button">Add Station</button>
                       </div> 
                    </form>
                    </div>     
        )
    }
}


export default connect()(AddStation);