import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ trackName, artistName, year, cover, key}) {
  return (
    <SingleTrack key={key}>
      <CoverImage src={cover}/>
      <TrackDetails>
      <TrackName>{trackName}</TrackName>
      <ArtistName>by {artistName} </ArtistName>
      <Year>{year}</Year>
      <Link to={`/track/${trackName}`}>Visit</Link>
      </TrackDetails>
    </SingleTrack>
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
const SingleTrack = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: tomato;
  border-radius: 1px;
  margin: 5px;
  padding: 5px;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`

const CoverImage = styled.img`
 filter: grayscale(var(--value, 100%)); --value:100%;
  width: auto;
  height: 25vw;
  border-radius: 2px;
  justify-self: center;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`

const TrackName = styled.h2`
  text-align: left;
`
const ArtistName = styled.p`
  text-align: left;
`
const Year = styled.p`
  text-align: left;
`

const FavIcon = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 2.5rem;
  margin-left: 22rem;
`


