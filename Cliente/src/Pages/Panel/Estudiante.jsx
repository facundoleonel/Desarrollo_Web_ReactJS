import React, { useContext } from 'react'
import { userContext } from '../../Layout'

export const Estudiante = () => {
  const { currentUser, logoutUser } = useContext(userContext)
  return (
    <div>Estudiante
      { JSON.stringify(currentUser) }

      <button onClick={()=>logoutUser()}>Quitar usuario</button>
    </div>
  )
}
