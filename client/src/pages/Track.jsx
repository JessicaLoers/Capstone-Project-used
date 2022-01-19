import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CardTrack from '../components/CardTrack'
import YoutubeEmbed from '../components/YoutubeEmbed'

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

export default function Track({ tracks, user }) {
  const { track_name } = useParams()
  const thisTrack = tracks.find((track) => track.track_name === track_name)
  const sampledIn = tracks.filter((item) =>
    item.sampled.includes(thisTrack.track_name)
  )
  const containsSamples = tracks.filter((item) =>
    item.sampled_in.includes(thisTrack.track_name)
  )

  async function addToFavourite() {
    const addToFavouriteTrack = {
      trackId: thisTrack._id,
      userId: user._id,
    }
    const result = await fetch('/api/favourite', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(addToFavouriteTrack),
    })
    return await result.json(addToFavouriteTrack)
  }

  function addToFavourites(track) {
    if (thisTrack.fav_of_user.includes(user._id)) {
      return removeFromFavourite(track)
    } else {
      addToFavourite(track)
    }
  }
  useEffect(() => addToFavourite(), [])

  async function removeFromFavourite() {
    const favouriteTrack = {
      trackId: thisTrack._id,
      userId: user._id,
    }
    const result = await fetch('/api/favourite/remove', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(favouriteTrack),
    })
    return await result.json(favouriteTrack)
  }

  useEffect(() => removeFromFavourite(), [])

  return (
    <StyledWrapper key={thisTrack._id}>
      <VideoContainer>
        <YoutubeEmbed embedId={thisTrack.video_id} />
      </VideoContainer>
      <span onClick={addToFavourites} className='favIcons'>
        <i className='favLabel'>{favLabel}</i>
        {thisTrack.fav_of_user.includes(user._id) ? (
          <span className='circle'></span>
        ) : (
          <i></i>
        )}
      </span>

      <TrackInfoContainer>
        <h2>{thisTrack.track_name}</h2>
        <p>from year {thisTrack.year}</p>
        <p>by {thisTrack.artist}</p>
        <p>Sampled by {thisTrack.sampled_in.length}</p>
        <p>Contains Samples of {thisTrack.sampled.length}</p>
      </TrackInfoContainer>
      <div>
        <h3 className='collections-headline'>Sampled in:</h3>
        {sampledIn.map((track) => (
          <CardTrack
            key={track._id}
            track_name={track.track_name}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div>
      <div>
        <h3 className='collections-headline'>Contains Samples of:</h3>
        {containsSamples.map((track) => (
          <CardTrack
            key={track._id}
            track_name={track.track_name}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div>
    </StyledWrapper>
  )
}

const VideoContainer = styled.section`
  position: relative;
`

const StyledWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-bottom: 13rem;
  margin-top: 2rem;

  .collections-headline {
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
    margin-top: 1.2rem;
  }
`
const TrackInfoContainer = styled.div`
  margin: 1rem;
  p {
    font-size: 0.8rem;
  }
`

{
  /* <button onClick={() => addTracksToFavourites(thisTrack._id)}> */
}

//body: JSON.stringify(track),
// async function addTracksToFavourites(track) {
//   const result = await fetch('api/favourite/61e6732cb45e3076aadeae41/', {
//     method: 'POST',
//   })

//   return await result.json()
// }

/* <i className='favLabel'>{favLabel}</i> 
        <span className='circle'></span>
        
        
        */
