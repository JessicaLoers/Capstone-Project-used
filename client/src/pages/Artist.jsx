import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import CardTrack from '../components/CardTrack'

export default function Artist({ artists, tracks, onAddToFavourites, user }) {
  const favLabel = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 38'
      fill='#f7c4d4'
      height='39px'
      width='60px'
    >
      <path d='M19,0a19,19,0,0,0,0,38H59V0Zm5.26,30.2-1.88,1.69L20.5,30.18c-6.68-6.05-11.09-10-11.09-14.94a7.06,7.06,0,0,1,7.13-7.13,7.8,7.8,0,0,1,5.84,2.7,7.77,7.77,0,0,1,5.83-2.7,7.06,7.06,0,0,1,7.13,7.13C35.34,20.14,30.93,24.13,24.26,30.2Z' />
    </svg>
  )
  const { artist_name } = useParams()

  const thisArtist = artists.find(
    (artist) => artist.artist_name === artist_name
  )
  const thisArtistTrack = tracks.filter((item) =>
    item.artist.includes(thisArtist.artist_name)
  )
  return (
    <CardWrapper>
      <ImageContainer>
        <h1>{thisArtist.artist_name}</h1>
        <ArtistImage src={thisArtist.artist_image} />
      </ImageContainer>
      <span
        onClick={() => onAddToFavourites(thisArtist, user)}
        className='favIcons'
      >
        <i className='favLabel'>{favLabel}</i>
        {thisArtist.fav_of_user.includes(user._id) ? (
          <span className='circle'></span>
        ) : (
          <i></i>
        )}
      </span>

      <Info>{thisArtist.infos}</Info>

      {thisArtistTrack.map((track) => (
        <CardTrack
          key={track._id}
          track_name={track.track_name}
          cover_image={track.cover_image}
          year={track.year}
        />
      ))}
    </CardWrapper>
  )
}

const ImageContainer = styled.section`
  position: relative;

  h1 {
    bottom: 0;
    display: flex;
    font-size: 2.6rem;
    font-weight: 800;
    left: 1rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    position: absolute;
    z-index: 90;
  }
`
const ArtistImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  height: 40vh;
  justify-self: center;
  object-fit: cover;
  width: 100vw;
`
const CardWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-bottom: 15rem;
  margin-top: 2rem;
`
const Info = styled.section`
  font-size: 0.8rem;
  margin: 1rem;
  width: 80vw;
`
