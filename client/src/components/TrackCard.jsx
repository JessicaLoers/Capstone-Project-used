import styled from 'styled-components'
import { Link } from 'react-router-dom'

function TrackCard({ track_name, artist, year, cover_image }) {
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
  //-- > try to remove %20 from URL - failed for now;)
  // let name = track_name
  // name = name.split(' ').join('-')
  // console.log(name)
  // const url = `${name}`
  return (
    <SingleTrack className='card'>
      <CoverImage src={cover_image} />
      <div className='card_details'>
        <h3>{track_name}</h3>
        <p>{artist} </p>
        <p>{year}</p>
      </div>
      <Link to={`/track/${track_name}`} className='card_arrow'>
        <span>{arrow}</span>
      </Link>
    </SingleTrack>
  )
}
export default TrackCard

const SingleTrack = styled.div`
  background-color: var(--cardtrack);
  border: solid 1px var(--cardtrack);
  p {
    font-size: 0.8rem;
  }
`
const CoverImage = styled.img`
  border-radius: 2px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  height: 20vw;
  justify-self: center;
  margin-left: 5px;
  object-fit: cover;
  width: 20vw;
`
