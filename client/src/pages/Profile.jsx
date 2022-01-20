import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CardTrack from '../components/CardTrack'

import userImageOverlay from '../assets/icons/userImageOverlay.svg'

export default function Profile({ tracks, user, onLoginUser }) {
  const { name } = useParams()

  useEffect(() => {
    name && onLoginUser(name)
  }, [])

  const userFavouriteTracks = user.favourite_tracks
  return (
    <StyledWrapper>
      <UserInfoContainer>
        <UserImageContainer>
          <img
            className='user-image--overlay'
            src={userImageOverlay}
            alt='used bunny'
          />
          <img className='user-image' src={user.user_image} alt='user image' />
        </UserImageContainer>
        <div>
          <h1>Hey {user.first_name}!</h1>
          <ul>
            <li>Track Artist: {userFavouriteTracks?.length}</li>
            <li>Track Favourites: {userFavouriteTracks?.length}</li>
            <li>Track Entries: {userFavouriteTracks?.length}</li>
          </ul>
        </div>
      </UserInfoContainer>

      <h3 className='favourite-headline'>Your Favourite Tracks</h3>
      <div className='horizontal-scroll-wrapper'>
        {userFavouriteTracks?.map((track) => (
          <div className='wrapper-items' key={track._id}>
            <CardTrack
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
            />
          </div>
        ))}
      </div>

      <h3 className='favourite-headline'>
        Your Favourite Artists ... coming soon!
      </h3>
      <div className='horizontal-scroll-wrapper'>
        {userFavouriteTracks?.map((track) => (
          <div className='wrapper-items' key={track._id}>
            <CardTrack
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
            />
          </div>
        ))}
      </div>

      <h3 className='favourite-headline'>Your Added Tracks ... coming soon!</h3>
      <div className='horizontal-scroll-wrapper'>
        {userFavouriteTracks?.map((track) => (
          <div className='wrapper-items' key={track._id}>
            <CardTrack
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
            />
          </div>
        ))}
      </div>
    </StyledWrapper>
  )
}

const UserImageContainer = styled.div`
  align-items: flex-end;
  justify-items: center;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .user-image--overlay {
    display: grid;
    height: 25vh;
    position: absolute;
    z-index: 90;
  }
  .user-image {
    filter: grayscale(var(--value, 100%));
    --value: 100%;
    width: auto;
    height: 28vw;
    border-radius: 100%;
    margin-bottom: 3px;
  }
`

const UserInfoContainer = styled.div`
  align-items: flex-end;
  background-color: var(--secondarycolor);
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 32vh;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 0.8rem;
  }
`
const StyledWrapper = styled.div`
  .horizontal-scroll-wrapper {
    width: 100vw;
    height: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .wrapper-items {
      display: inline-block;
      vertical-align: middle;
      margin-left: 1rem;
    }
    .wrapper-items:first-child {
      margin-left: 0;
    }
  }
  .favourite-headline {
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
    margin-top: 1.2rem;
  }
`
