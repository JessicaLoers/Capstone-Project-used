import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import TrackCard from '../components/TrackCard'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function TrackOverview({ tracks }) {
  const { track_name } = useParams()
  const thisTrack = tracks.find((track) => track.track_name === track_name)
  const sampledIn = tracks.filter((item) =>
    item.sampled.includes(thisTrack.track_name)
  )
  const containsSamples = tracks.filter((item) =>
    item.sampled_in.includes(thisTrack.track_name)
  )

  return (
    <StyledWrapper key={thisTrack._id}>
      <div>
        <YoutubeEmbed embedId={thisTrack.video_id} />
      </div>
      <TrackInfoContainer>
        <h2>{thisTrack.track_name}</h2>
        <h2>{thisTrack.album}</h2>
        <p>{thisTrack.year}</p>
        <p>{thisTrack.artist}</p>
        <p>Sampled by: {thisTrack.sampled_in.length}</p>
        <p>Contains Samples: {thisTrack.sampled.length}</p>
      </TrackInfoContainer>

      <div>
        <h3>Sampled in:</h3>
        {sampledIn.map((track) => (
          <TrackCard
            track_name={track.track_name}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div>

      <div>
        <h3>Contains Samples of:</h3>
        {containsSamples.map((track) => (
          <TrackCard
            track_name={track.track_image}
            artist={track.artist}
            cover_image={track.cover_image}
            year={track.year}
          />
        ))}
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-bottom: 13rem;
  margin-top: 2rem;
  h3 {
    margin-left: 1rem;
  }
`
const TrackInfoContainer = styled.div`
  margin: 1rem;
`
