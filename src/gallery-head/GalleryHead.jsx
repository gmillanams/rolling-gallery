import './GalleryHead.css'
import React, { useState } from 'react'
import Spinner from '../spinner/Spinner.jsx'
import GalleryItem from '../gallery-item/GalleryItem.jsx'

export const GalleryHead = ({ item }) => {
  const [fetching, setFetching] = useState(true)

  const markReady = () => {
    setFetching(false)
  }

  const { section } = item

  return (
    <a className='gallery-head' href={`?r=${section}`}>
      {fetching && (
        <span className='gallery-head__spinner'>
          <Spinner />
        </span>
      )}
      <GalleryItem playOnHover item={item} onLoad={() => markReady()} />
      <span className='gallery-head__name'>{section}</span>
    </a>
  )
}

export default GalleryHead
