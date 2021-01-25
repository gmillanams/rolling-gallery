import React, { useEffect, useState } from 'react'
import { head, map } from 'ramda'

import { fetchGallery } from '../fetch-gallery'
import Footer from '../footer/Footer.jsx'
import GalleryHead from '../gallery-head/GalleryHead.jsx'
import Spinner from '../spinner/Spinner.jsx'

import './FrontPage.css'

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
  'unexpected',
]

export const FrontPage = () => {
  const [fetching, setFetching] = useState(true)
  const [galleryHeads, setGalleryHeads] = useState([])

  useEffect(() => {
    if (galleryHeads.length != galleries.length) {
      fetchGallery(0, galleries[galleryHeads.length]).then((galleryData) => {
        const galleryHead = head(galleryData)
        setGalleryHeads([...galleryHeads, galleryHead])
      })
    } else {
      setFetching(false)
    }
  }, [galleryHeads])

  return (
    <div className='front-page'>
      <div className='galleries'>
        {map(
          (galleryHead) => (
            <GalleryHead item={galleryHead} key={galleryHead.id} />
          ),
          galleryHeads
        )}
        {fetching && (
          <div className='gallery-head-spinner'>
            <Spinner />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default FrontPage
