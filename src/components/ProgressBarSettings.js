import {useSelector} from "react-redux";
import {selectHeight, selectWidth, setHeight, setWidth} from "../store/modules/progressBar";
import {useAppDispatch} from "../store/hooks";


function ProgressBarSettings(){
    const width = useSelector(selectWidth)
    const height = useSelector(selectHeight)
    const dispatch = useAppDispatch()

    function handleWidthChange(e){
        dispatch(setWidth(Number(e.target.value)))
    }

    function handleHeightChange(e){
        dispatch(setHeight(Number(e.target.value)))
    }

    return (
        <div>
            <div>
                <label htmlFor="width">Width</label>
                <input onChange={handleWidthChange} id="width" type="number" value={width}/>
            </div>
            <div>
                <label htmlFor="width">Height</label>
                <input onChange={handleHeightChange} id="height" type="number" value={height}/>
            </div>
        </div>
    )
}

export default ProgressBarSettings