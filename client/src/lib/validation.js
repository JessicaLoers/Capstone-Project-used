const hasTrackNameMinLenght = (track_name, stringLength) =>
  track_name.length > stringLength
//const hasValidArtist = (artist) => artist != ''

const isTrackValid = (track) => hasTrackNameMinLenght(track.track_name, 1) //&&
// hasValidArtist(track.artist)

export default isTrackValid
