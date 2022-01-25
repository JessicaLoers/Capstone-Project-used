const hasTrackNameMinLenght = (track_name, stringLength) => {
  return track_name.length > stringLength
}

const hasValidArtist = (artist) => artist !== ''
const isYearValid = (year) => year > 1900

const isTrackValid = (track) =>
  hasTrackNameMinLenght(track.track_name, 1) &&
  hasValidArtist(track.artist) &&
  isYearValid(track.year)

const isTrackSingleValue = (pair) => pair.first !== pair.second
const isArtistSingleValue = (selection) =>
  selection.firstArtist !== selection.secondArtist

const isSampleValid = (pair, selection) =>
  isTrackSingleValue(pair) && isArtistSingleValue(selection)

export { isTrackValid, isSampleValid }
