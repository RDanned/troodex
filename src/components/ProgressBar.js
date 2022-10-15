import {useEffect, useState} from "react";
import { v4 as uid } from 'uuid';
import ProgressBarItem from './ProgressBarItem'
import ProgressBarSettings from "./ProgressBarSettings";
import ProgressBarLegend from "./ProgressBarLegend";

function ProgressBar(props){
    const [legendData, setLegendData] = useState([])

    const [items, setItems] = useState([])

    useEffect(() => {
        if(props.items){
            setItems(
                props.items.reduce((results, item) => {
                    if(item.value !== 0)
                        for(let i = 0; i !== Math.ceil(item.percent); i++){
                            results.push(<ProgressBarItem key={uid()} color={item.color} width={props.width} height={props.height}/>)
                        }
                    return results
                }, [])
            )

            setLegendData(props.items.reduce((results, item) => {
                if(item.value !== 0) results.push({color: item.color, text: `${item.name}: ${item.value}(${item.percent} %)` })
                return results
            }, []))
        }
    }, [props])

    return (
        <>
            <div className="progress-bar" style={{maxWidth: 100 * props.width + 100}}>
                <div className="progress-bar-settings">
                    <ProgressBarSettings />
                </div>
                <div className="progress-bar-items">
                    {items}
                </div>
                <ProgressBarLegend data={legendData}/>
            </div>
        </>
    )
}

export default ProgressBar