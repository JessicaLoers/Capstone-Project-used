import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export default function ArtistOverview({
  key,
  artistName,
  infos,
  artist_image,
  tracks,
  allArtist,
}) {
  const { name } = useParams()
  const thisArtist = allArtist.find((artist) => artist.artistName === artistName )

  console.log(allArtist)

  return (
    <div>
      <div>{/* <YoutubeEmbed embedId={thisTrack.video_id} /> */}</div>

      <div>
        <h1>{thisArtist.artistName}</h1>
        <h2>{thisArtist.infos}</h2>
      </div>
    </div>
  )
}
