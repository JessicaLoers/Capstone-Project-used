import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import userdata from '../lib/userdata'
import TrackCard from './TrackCard'

export default function Profile() {
  const { name } = useParams()
  const thisMember = userdata.find((user) => user.name === name)
 
  return (
    <StyledWrapper>
      <h1>Hey {thisMember.name}</h1>
      <TrackInfoContainer>
      <UserImage src={thisMember.image} alt="user image" />
      </TrackInfoContainer>

<div>
  <h2>Your Favourite Artists</h2>
</div>
<div>
  <h2>Your Favourite Tracks</h2>
</div>
<div>
  <h2>Your Added Tracks</h2>
</div>
      
    </StyledWrapper>
  )
}

const TrackInfoContainer = styled.div`
  margin: 1rem;
`
const StyledWrapper = styled.div`
  margin-top: 2rem;
   h3 {
     margin-left: 1rem;
   }
`
const UserImage = styled.img`
 filter: grayscale(var(--value, 100%)); --value:100%;
  width: auto;
  height: 25vw;
  border-radius: 100%;
  justify-self: center;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`

