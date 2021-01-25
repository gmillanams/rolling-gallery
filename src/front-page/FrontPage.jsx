import React, {  Suspense, SuspenseList } from 'react'
import { head } from 'ramda'

import { fetchGallery } from '../fetch-gallery'
import Footer from '../footer/Footer.jsx'
import GalleryHead from '../gallery-head/GalleryHead.jsx'
import Spinner from '../spinner/Spinner.jsx'

import './FrontPage.css'
import {createResource} from '../utils/suspense'

const galleries = [
  'brokengifs',
  'wastedgifs',
  'slygifs',
  'mildlyinteresting',
  'reactiongifs',
  'gifs',
  'chemicalreactiongifs',
  'woahdude',
  'mechanical_gifs',
  'oddlysatisfying',
  'combinedgifs',
  'unexpected'
]

let galleryHeads = []

const fetchGalleryPromise = (gallery) => fetchGallery(0, gallery).then((galleryData) => {
  const galleryHead = head(galleryData)
  return galleryHead
})

const GalleryContainer = ({gallery}) => {
  if  (!galleryHeads[gallery]) {
    galleryHeads[gallery] = createResource(fetchGalleryPromise(gallery))
  }

  return <GalleryHead item={galleryHeads[gallery].read()} key={gallery.id}/>
}

export const FrontPage = () => {
  return (
    <div className='front-page'>
      <div className='galleries'>
        <SuspenseList revealOrder="forwards" tail="collapsed">
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[0]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[1]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[2]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[3]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[4]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[5]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[6]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[7]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[8]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[9]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[10]}/></Suspense>
          <Suspense  fallback={<div className='gallery-head-spinner'><Spinner/></div>}><GalleryContainer gallery={galleries[11]}/></Suspense>
        </SuspenseList>
      </div>
      <Footer/>
    </div>
  )

}



export default FrontPage
