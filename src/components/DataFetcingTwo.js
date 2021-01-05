import React, { useState, useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        default:
            return state
    }
}

function DataFetcingTwo() {
    const [state, dispatch] = useReducer(reducer,initialState)
    const [postOrder, setPostOrder] = useState(3)

    useEffect(() => {
        console.log('load the new post')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postOrder}`)
        .then( response => {
            dispatch({type:'FETCH_SUCCESS', payload:response.data})
        })
        .catch( error => {
            dispatch({type:'FETCH_ERROR', payload:error})
        })
    },[postOrder])

    return (
        <div>
            <input　type="text" onClick={(e)=>{
                setPostOrder(e.target.value)
                console.log('postOrder',postOrder)
            }} ></input>
            {/* <input　type="text" ></input> */}
            {state.loading ? 'loading' : state.post.title}
            {state.error ? 'error' : null}
        </div>
    )
}

export default DataFetcingTwo
