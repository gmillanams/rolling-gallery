import React from 'react'
import {createResource} from '../utils/suspense'

const preloadImage = (src) => {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = src
    img.onload = () => {
      resolve(src)
    }
  })
}

const preloadVideo = (src) => {
  return new Promise(resolve => {
    const video = document.createElement('video')
    video.src = src
    video.preload = 'auto'
    video.oncanplaythrough = () => {
      resolve(src)
    }
  })
}

let resources = []

export const GalleryItem = ({item, onLoad}) => {

  const { animated, link, mp4 } = item

  if (!resources[link]) {
    resources[link] = createResource(animated ? preloadVideo(mp4) :  preloadImage(link))
  }


  return animated ? <video src={resources[link].read()}
                           autoPlay
                           loop
                           muted
                           playsInline className='gallery-item' /> : <img className='gallery-item' src={resources[link].read()}/>
}


export default GalleryItem
