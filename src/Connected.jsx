import React from 'react'
import { useDispatch } from 'react-redux'
import  {loadData} from './actions'

const Connected = () => {
const dispatch = useDispatch()
const handleClick = () => dispatch(loadData({}))

    return (
        <div>
            <button onClick={handleClick} >
                Click me
            </button>

            
        </div>
    )
}

export default Connected
