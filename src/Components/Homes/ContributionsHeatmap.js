// ContributionsHeatmap.js
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../../Assets/Styles/ContributionsHeatmap.css';

const ContributionsHeatmap = ({ data }) => {
    const totalCount = data.reduce((total, day) => total + day.count, 0);
    return (
        <div className="contributions-heatmap">
            <div className="heatmap-header">
                 <h4 style={{fontSize:'15px'}}>{totalCount} Submissions in Past One Year </h4>
                <select style={{padding:'10px'}}>
                    <option value="2024" >Current</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
                <h4> Max Streaks : 238 </h4>
                <h4>Total Active Days : 238</h4>  
            </div>
            {/* <div className="stats">
                <div className="stat">
                    <h3>Total Contribution</h3>
                    <p>42 days</p>
                </div>
                <div className="stat">
                    <h3>Total Hours Spent</h3>
                    <p>23.29 Hours</p>
                </div>
                <div className="stat">
                    <h3>Average Time</h3>
                    <p>0.55 Hours per day</p>
                </div>
            </div> */}
            <CalendarHeatmap
                startDate={new Date('2024-01-01')}
                endDate={new Date('2024-12-31')}
                values={data}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
            />
        </div>
    );
};

export default ContributionsHeatmap;


