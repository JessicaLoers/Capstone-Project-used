const hasTrackNameMinLenght = (track_name, stringLength) => {
  return track_name.length > stringLength
}

const hasValidArtistValue = (artist) => artist !== ''
const isYearValid = (year) => year > 1900

const isTrackSingleValue = (pair) => pair.first !== pair.second
const isArtistSingleValue = (selection) =>
  selection.firstArtist !== selection.secondArtist

const isArtistValid = (artist) => hasValidArtistValue(artist.artist_name)
const isTrackValid = (track) =>
  hasTrackNameMinLenght(track.track_name, 3) &&
  hasValidArtist(track.artist) &&
  isYearValid(track.year)
const isSampleValid = (pair, selection) =>
  isTrackSingleValue(pair) && isArtistSingleValue(selection)

export { isArtistValid, isTrackValid, isSampleValid }
