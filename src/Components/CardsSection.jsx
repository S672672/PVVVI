import React from 'react'
import Cards from './Cards'

export default function CardsSection() {
  return (
    <div className='m-10 min-h-96 w-screen flex justify-center items-center gap-4 overflow-x-auto flex-no-wrap'> 
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" isAvailable="Available ->"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" isAvailable="Available ->"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" isAvailable="Available ->"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" isAvailable="Available ->"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" isAvailable="Available ->"/>
    </div>
  )
}