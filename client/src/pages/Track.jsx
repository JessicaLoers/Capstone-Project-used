import styled from 'styled-components'
import { useParams } from 'react-router-dom'
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

export default function Track({ tracks, addTracksToFavourites }) {
  const { track_name } = useParams()
  const thisTrack = tracks.find((track) => track.track_name === track_name)
  const sampledIn = tracks.filter((item) =>
    item.sampled.includes(thisTrack.track_name)
  )
  const containsSamples = tracks.filter((item) =>
    item.sampled_in.includes(thisTrack.track_name)
  )

  return (
    <StyledWrapper>
      <VideoContainer>
        <div className='favIcons'>
          <span className='circle'></span>
          <i className='favLabel'>{favLabel}</i>
        </div>
        <YoutubeEmbed embedId={thisTrack.video_id} />
      </VideoContainer>
      <TrackInfoContainer>
        <button onClick={() => addTracksToFavourites(thisTrack)}>add</button>
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
