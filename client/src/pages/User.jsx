import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CardTrack from '../components/CardTrack'

export default function User({ tracks, user, onLoginUser }) {
  const { name } = useParams()

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/user/' + name)
        const userFromApi = await response.json()
        onLoginUser(userFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    name && fetchUser()
  }, [])

  console.log(user.favourite_tracks)

  const userFavouriteTracks = user.favourite_tracks

  return (
    <StyledWrapper>
      <h1>Hey {user.first_name}</h1>
      <TrackInfoContainer>
        <UserImage src={user.user_image} alt='user image' />
      </TrackInfoContainer>

      <div>
        <h2>Your Favourite Tracks</h2>
        {userFavouriteTracks?.map((track) => (
          <div key={track._id}>
            <CardTrack
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
            />
          </div>
        ))}
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
`
const UserImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  width: auto;
  height: 25vw;
  border-radius: 100%;
  justify-self: center;
  /* box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
`
