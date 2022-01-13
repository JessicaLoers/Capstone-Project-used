import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import TrackCard from '../components/TrackCard'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function TrackOverview({ tracks }) {
  const { track } = useParams()
  // const thisTrack = tracks.find((track) => track.track_name === track)

  // const sampled_in = tracks.filter((item) =>
  //   item.sampled.includes(thisTrack.track_name)
  // )

  // const containsSamples = tracks.filter((item) =>
  //   item.sampled_in.includes(thisTrack.track_id)
  // )

  return (
    <StyledWrapper>
      {/* <div>
        <YoutubeEmbed embedId={thisTrack.video_id} />
      </div> */}

      <TrackInfoContainer>
        <h1>{tracks.track_name}</h1>
        {/* <h2>{tracks.album}</h2>
        <p>{tracks.year}</p>
        <p>{tracks.artist_name}</p>
        <p>Sampled by: {sampled_in.length}</p>
        <p>Contains Samples: {sampled.length}</p> */}
      </TrackInfoContainer>

      {/* <div key={tracks._id}>
        <h3>Sampled in:</h3>
        {sampled_in.map((track) => (
          <TrackCard
            track_name={track.track}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div>

      <div key={tracks._id}>
        <h3>Contains Samples of:</h3>
        {sampled.map((track) => (
          <TrackCard
            track_name={track.track}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div> */}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-top: 2rem;
  h3 {
    margin-left: 1rem;
  }
`

const TrackInfoContainer = styled.div`
  margin: 1rem;
`
