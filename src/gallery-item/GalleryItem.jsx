import React from 'react'


export const GalleryItem = ({ item, onLoad }) => {
  const { animated, link, mp4 } = item

  return animated ? (
    <video
      className='gallery-item'
      src={mp4}
      onCanPlayThrough={onLoad}
      autoPlay
      loop
      muted
      playsInline
    />
  ) : (
    <img className='gallery-item' onLoad={onLoad} src={link} />
  )
}

export default GalleryItem
