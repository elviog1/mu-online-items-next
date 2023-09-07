import React from 'react'
import CardItem from './CardItem'

export default function UpgradeItem({item}) {
  console.log(item)
  return (
    <div className='flex justify-center py-5'>
      <CardItem item={item} />
    </div>
  )
}
