import React from 'react'

function ChildOfP1({theme}) {
  return (
    <div  className={theme?"dark":"light"}>ChildOfP1</div>
  )
}

export default ChildOfP1