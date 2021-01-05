import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    console.log('UserContext',UserContext)
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            return( <div> User Context Value {user}, {channel} </div> )
        </div>
    )
}

export default ComponentF
