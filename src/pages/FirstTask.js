import {useEffect} from "react";
import ProgressBar from '../components/ProgressBar'
import {useSelector} from "react-redux";
import {loadList, selectHeight, selectList, selectWidth} from "../store/modules/progressBar";
import {useAppDispatch} from "../store/hooks";

function FirstTask(){
    const width = useSelector(selectWidth)
    const height = useSelector(selectHeight)
    const dispatch = useAppDispatch()
    const data = useSelector(selectList)

    useEffect(() => {
        dispatch(loadList())
    }, [])

    return (
        <>
            <div>
                <ProgressBar items={data} width={width} height={height}/>
            </div>
        </>
    )
}

export default FirstTask