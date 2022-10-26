import React from 'react'
import FadeTransition from '../shared/FadeTransition'

import { BiUserX } from 'react-icons/bi'

const UserNotFound = () => {
  return (
    <FadeTransition>
      <BiUserX />
    </FadeTransition>
  )
}

export default UserNotFound
