import React, {useContext} from 'react'
import ChildOfP1 from './ChildOfP1'
import context from './Context'

function Parent1() {
    const {theme} = useContext(context);

  return (
    <div className={theme?"dark":"light"}>Parent1
    <ChildOfP1 theme={theme}/>
    </div>
  )
}

export default Parent1