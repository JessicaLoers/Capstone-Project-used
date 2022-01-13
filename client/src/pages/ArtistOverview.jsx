import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import TrackCard from '../components/TrackCard'

export default function ArtistOverview({ artists }) {
  const { artist_name } = useParams()
  const thisTrack = artists.find((artist) => artist.artist_name === artist_name)
  const sampledIn = artists.filter((item) =>
    item.sampled.includes(thisTrack.track_name)
  )
  const containsSamples = artists.filter((item) =>
    item.sampled_in.includes(thisTrack.track_name)
  )

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
