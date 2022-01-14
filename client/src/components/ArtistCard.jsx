import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ key, artist_name, infos, tracks, artist_image }) {
  const arrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      fill='#f8f8f8'
    >
      <g>
        <path d='M0,0h24v24H0V0z' fill='none' />
      </g>
      <g>
        <polygon points='6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12' />
      </g>
    </svg>
  )

  return (
    <SingleArtist className='card'>
      <ArtistImage src={artist_image} />
      <div className='card_details'>
        <h3>{artist_name}</h3>
      </div>
      <Link to={`/artist/${artist_name}`} className='card_arrow'>
        <span>{arrow}</span>
      </Link>
    </SingleArtist>
  )
}
export default TrackCard

// Styling
const SingleArtist = styled.div`
  background-color: var(--cardartist);
  border: solid 1px var(--cardartist);
`
const ArtistImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  object-fit: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 100px;
  justify-self: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`
