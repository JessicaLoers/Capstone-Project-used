import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ key, artistName, infos, tracks, artist_image }) {
  return (
    <SingleArtist>
      <ArtistImage src={artist_image} />
      <TrackDetails>
        <ArtistName>{artistName}</ArtistName>
        <Link to="/artist">Visit</Link>
      </TrackDetails>
    </SingleArtist>
  )
}
export default TrackCard



{/* <Link to={`/artist/${artistName}`}>Visit</Link> */}

// Styling

const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 10px;
`
const SingleArtist = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #d6c6c3;
  border-radius: 1px;
  margin: 5px;
  padding: 5px;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`

const ArtistImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  object-fit: cover;
  width: 25vw;
  height: 25vw;
  border-radius: 100px;
  justify-self: center;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`

const ArtistName = styled.h2`
  text-align: left;
`
