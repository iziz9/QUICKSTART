import React, { useContext, useState } from 'react'
import MatzipContext from './MatzipContext';
import MatzipItem from './MatzipItem';

const MatzipList = () => {
  const value = useContext(MatzipContext)

  const items = value?.state.matzipList.map(item => {
    return (
      <MatzipItem key={item.no}
        matzip={item}
        deleteMatzip={value?.actions.deleteMatzip}
        toggleDone={value?.actions.toggleDone}
      />
    )
  })

  return (
    <div className='row'>
      {""}
      <div className='col'>
        <ul className='list-group'>{items} </ul>
      </div>
    </div>
  )
}

export default MatzipList