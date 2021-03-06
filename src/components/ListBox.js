import React, { Component } from "react";
import LaunchDetail from './LaunchDetail';
import '../App.css';

class ListBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            matchedYearLaunchLists: []
        }

        this.selectYear = this.selectYear.bind(this);
        this.descendSort = this.descendSort.bind(this);
    }

    componentDidMount() {
        this.setState({ matchedYearLaunchLists: this.props.launchLists });
    }

    descendSort(){
        this.props.descendSort();
    }

    selectYear(event){
        this.props.selectYear(event.target.value);
    }

    render(){
        const noRepeatLaunchYearsWithA = this.props.noRepeatLaunchYears.map(launchYear => {
            return (
                // <a href="#" onClick={this.selectYear}>{launchYear}</a>
                <option className="yearOption" value={launchYear} key={launchYear}>{launchYear}</option>
            );
        });
        
        const launchLists = this.props.launchLists.map(launchDetail => {
            return (
                <LaunchDetail flightNumber = {launchDetail.flight_number}
                missionName = {launchDetail.mission_name}
                launchDateUTC = {launchDetail.launch_date_utc}
                rocketName = {launchDetail.rocket.rocket_name}
                key = {launchDetail._id}
                />
            );
        });

        return (
            <div className="container list-box">
                <div className="row list-button">
                    <div className="dropdown">
                        <button className="btn btn-info fliter-year">
                            Filter by Year <span className="icon-select"> </span>
                        </button>
                        <select id="select-year" 
                        className="dropdown-year" 
                        onChange={this.selectYear}>
                            {noRepeatLaunchYearsWithA}
                        </select>
                        {/* <div className="dropdown-year"> */}
                            
                        {/* </div> */}
                        
                    </div>
                    <button id="sort-descend" 
                    className="btn btn-info sort" 
                    onClick={this.descendSort}>
                        Sort Descending <span className="icon-sort"> </span>
                    </button>
                </div>
                <div id="launch-lists">
                    {launchLists}
                </div>
            </div>
        )
    }
}

export default ListBox;