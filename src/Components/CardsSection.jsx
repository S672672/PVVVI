import React from 'react'
import Cards from './Cards'

export default function CardsSection() {
  return (
    <div className='m-10 min-h-96 w-screen flex justify-center items-center gap-4 overflow-x-auto flex-wrap'> 
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" description="Hello world"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" description="Hello world"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" description="Hello world"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" description="Hello world"/>
        <Cards picture="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRlXCwCHJ45U/v2/-1x-1.jpg" description="Hello world"/>
    </div>
  )
}