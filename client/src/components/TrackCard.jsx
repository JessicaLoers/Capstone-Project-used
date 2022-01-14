import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ track_name, artist, year, cover_image }) {
  //-- > try to remove %20 from URL - failed ;)
  // let name = track_name
  // name = name.split(' ').join('-')
  // console.log(name)
  // const url = `${name}`

  return (
    <SingleTrack className='card'>
      <CoverImage src={cover_image} />
      <TrackDetails>
        <TrackName>{track_name}</TrackName>
        <ArtistName>by {artist} </ArtistName>
        <Year>{year}</Year>
        <Link to={`/track/${track_name}`}>Visit</Link>
      </TrackDetails>
    </SingleTrack>
  )
}
export default TrackCard

// --> some styling
const TrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 10px;
`
const SingleTrack = styled.div`
  background-color: var(--cardtrack);
  border: solid 1px var(--cardtrack);
`
const CoverImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  object-fit: cover;
  width: 25vw;
  height: 25vw;
  margin-left: 5px;
  border-radius: 2px;
  justify-self: center;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`
const TrackName = styled.h3`
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
