import {useEffect, useState} from "react";

function ProgressBarItem(props){
    const [styles, setStyles] = useState({
        backgroundColor: props.color,
        width: props.width,
        height: props.height
    })

    useEffect(() => {
        setStyles({
            backgroundColor: props.color,
            width: props.width,
            height: props.height
        })
    }, [props])

    return (
        <div className="progress-bar-item" style={styles}>

        </div>
    )
}

export default ProgressBarItem