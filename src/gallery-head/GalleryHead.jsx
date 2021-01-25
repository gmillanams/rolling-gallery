import './GalleryHead.css'
import React, {  Suspense } from 'react'
import GalleryItem from '../gallery-item/GalleryItem.jsx'

export const GalleryHead = ({ item }) => {

  const { section } = item

  return (
    <a className='gallery-head' href={`?r=${section}`}>
      <Suspense>
        <GalleryItem  item={item}  />
      </Suspense>
      <span className='gallery-head__name'>{section}</span>
    </a>
  )
}

export default GalleryHead
