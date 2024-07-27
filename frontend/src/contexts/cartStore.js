import React from 'react'
import { cartContext } from './cartContext'
function cartStore({children}) {
  return (
   <cartContext.Provider value={}>

   </cartContext.Provider>
  )
}

export default cartStore