import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import tracksdata from '../lib/tracksdata'
import TrackCard from '../components/TrackCard'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function TrackOverview() {
  const { title } = useParams()
  const thisTrack = tracksdata.find((track) => track.title === title)
  const sampledIn = tracksdata.filter((item) =>
    item.sampled.includes(thisTrack.track_id)
  )

  const containsSamples = tracksdata.filter((item) =>
    item.sampled_in.includes(thisTrack.track_id)
  )

  return (
    <StyledWrapper>
      <div>
        <YoutubeEmbed embedId={thisTrack.video_id} />
      </div>

      <TrackInfoContainer>
        <h1>{thisTrack.title}</h1>
        <h2>{thisTrack.album}</h2>
        <p>{thisTrack.year}</p>
        <p>{thisTrack.artist_name}</p>
        <p>Sampled by: {sampledIn.length}</p>
        <p>Contains Samples: {containsSamples.length}</p>
      </TrackInfoContainer>

      <div>
        <h3>Sampled in:</h3>
        {sampledIn.map((track) => (
          <TrackCard
            key={track.track_id}
            trackName={track.title}
            artistName={track.artist_name}
            cover={track.cover_image}
            year={track.year}
          />
        ))}
      </div>

      <div>
        <h3>Contains Samples of:</h3>
        {containsSamples.map((track) => (
          <TrackCard
            key={track.track_id}
            trackName={track.title}
            artistName={track.artist_name}
            cover={track.cover_image}
            year={track.year}
          />
        ))}
      </div>
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

