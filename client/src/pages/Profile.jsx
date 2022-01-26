import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import CardTrack from '../components/CardTrack'
import CardArtist from '../components/CardArtist'

import userImageOverlay from '../assets/icons/userImageOverlay.svg'

export default function Profile({ user, onLoginUser, tracks }) {
  const { name } = useParams()

  useEffect(() => {
    name && onLoginUser(name)
  }, [])

  const userFavouriteTracks = user.favourite_tracks
  const userFavouriteArtists = user.favourite_artists
  const filteredTracksByUserId = tracks.filter(
    (track) => track.entry_of_user == user._id
  )

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
            <li>Favourite Tracks: {userFavouriteTracks?.length}</li>
            <li>Favourite Artists: {userFavouriteArtists?.length}</li>
          </ul>
        </div>
      </UserInfoContainer>

      <h3 className='favourite-headline'>Your Favourite Tracks</h3>
      <div className='horizontal-scroll-wrapper'>
        {userFavouriteTracks?.length > 0 ? (
          userFavouriteTracks?.map((track) => (
            <div className='wrapper-items' key={track._id}>
              <CardTrack
                track_name={track.track_name}
                artist={track.artist}
                cover_image={track.cover_image}
                year={track.year}
              />
            </div>
          ))
        ) : (
          <MessageTracks className='card'>
            <p>It's time to add Favourite Tracks</p>
          </MessageTracks>
        )}
      </div>

      <h3 className='favourite-headline'>Your Favourite Artists</h3>
      <div className='horizontal-scroll-wrapper'>
        {userFavouriteArtists?.length > 0 ? (
          userFavouriteArtists?.map((artist) => (
            <div className='wrapper-items' key={artist._id}>
              <CardArtist
                artist_name={artist.artist_name}
                artist_image={artist.artist_image}
              />
            </div>
          ))
        ) : (
          <MessageArtist className='card'>
            <p>Go to Search and find your Favourite!</p>
          </MessageArtist>
        )}
      </div>
      <h3 className='favourite-headline'>Your Added Tracks</h3>
      <div className='horizontal-scroll-wrapper'>
        {filteredTracksByUserId?.length > 0 ? (
          filteredTracksByUserId?.map((track) => (
            <div className='wrapper-items' key={track._id}>
              <CardTrack
                track_name={track.track_name}
                artist={track.artist}
                cover_image={track.cover_image}
                year={track.year}
              />
            </div>
          ))
        ) : (
          <MessageTracks className='card'>
            <p>It's time to add Favourite Tracks</p>
          </MessageTracks>
        )}
      </div>
    </StyledWrapper>
  )
}

const MessageTracks = styled.div`
  background-color: var(--cardtrack);
  border: solid 1px var(--cardtrack);
  p {
    margin-left: 1rem;
  }
`

const MessageArtist = styled.div`
  background-color: var(--cardartist);
  border: solid 1px var(--cardartist);
  p {
    margin-left: 1rem;
  }
`

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
    height: 27vw;
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
  margin-bottom: 15rem;
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
