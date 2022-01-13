import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { saveToLocal, loadFromLocal } from '../lib/localStorage'

export default function ArtistOverview(artists) {
  return (
    <>
      <h1>hello</h1>
      {artists.map((artist, index) => (
        <ArtistCard
          key={index}
          artist_name={artist.artist_name}
          infos={artist.infos}
          tracks={artist.tracks}
          artist_image={artist.artist_image}
        />
      ))}
    </>
  )
}
