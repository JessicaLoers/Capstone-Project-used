import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ key, artist_name, infos, tracks, artist_image }) {
  return (
    <SingleArtist className='card'>
      <ArtistImage src={artist_image} />
      <TrackDetails>
        <ArtistName>{artist_name}</ArtistName>
        <Link to={`/artist/${artist_name}`}>Visit</Link>
      </TrackDetails>
    </SingleArtist>
  )
}
export default TrackCard

// Styling

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 10px;
`
const SingleArtist = styled.div`
  background-color: var(--cardartist);
  border: solid 1px var(--cardartist);
`

const ArtistImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  object-fit: cover;
  width: 25vw;
  height: 25vw;
  border-radius: 100px;
  justify-self: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`

const ArtistName = styled.h2`
  text-align: left;
`
