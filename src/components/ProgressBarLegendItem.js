import {useEffect, useState} from "react";

function ProgressBarLegendItem(props){
    const styles = {
        backgroundColor: props.color
    }

    return (
        <div className="progress-bar-legend-item">
            <div className="progress-bar-legend-item-circle" style={styles}></div>
            <div className="progress-bar-legend-item-text">
                {props.text}
            </div>
        </div>
    )
}

export default ProgressBarLegendItem