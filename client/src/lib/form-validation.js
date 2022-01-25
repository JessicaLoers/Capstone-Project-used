const hasTrackNameMinLenght = (track_name, stringLength) => {
  return track_name.length > stringLength
}

const hasValidArtist = (artist) => artist !== ''
const isYearValid = (year) => year > 1900

const isTrackValid = (track) =>
  hasTrackNameMinLenght(track.track_name, 1) &&
  hasValidArtist(track.artist) &&
  isYearValid(track.year)

export { isTrackValid }