import ProgressBarLegendItem from './ProgressBarLegendItem'
import {v4 as uid} from 'uuid'

function ProgressBarLegend(props){
    const items = props.data.map(item => <ProgressBarLegendItem key={uid()} color={item.color} text={item.text} />)

    return (
        <div className="progress-bar-legend">
            {items}
        </div>
    )
}

export default ProgressBarLegend