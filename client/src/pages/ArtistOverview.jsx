import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { saveToLocal, loadFromLocal } from '../lib/localStorage'


export default function ArtistOverview(allArtists) {
    let artist = allArtists

    console.log(artist)

  return (
<>
<h1>hello</h1>
{/* {artist.map((artist, index) => (
          <ArtistCard
            key={index}
            artistName={artist.artistName}
            infos={artist.infos}
            tracks={artist.tracks}
            artist_image={artist.artist_image}
          />
        ))} */}
</>
  )

}
