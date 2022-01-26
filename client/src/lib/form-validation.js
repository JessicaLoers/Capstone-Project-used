const hasTrackNameMinLenght = (track_name, stringLength) => {
  return track_name.length > stringLength
}

//## Add Artist
const hasValidArtistValue = (artist) => artist !== ''
const hasValidArtistInfo = (info) => info !== ''
const isArtistImageALink = (artist_image) =>
  artist_image.match(/\.(jpeg|jpg|gif|png)$/) != null
//
const isArtistValid = (artist) =>
  hasValidArtistValue(artist.artist_name) &&
  hasValidArtistInfo(artist.infos) &&
  isArtistImageALink(artist.artist_image)

//## Add Track
const hasValidTrackValue = (artist) => artist !== ''
const isYearValid = (year) => year > 1900
const isTrackCoverALink = (cover_image) =>
  track_cover.match(/\.(jpeg|jpg|gif|png)$/) != null
//
const isTrackValid = (track) =>
  hasValidTrackValue(track.track_name) &&
  hasValidArtistValue(track.artist) &&
  isTrackCoverALink(track.cover_image) &&
  isYearValid(track.year)

//## Add Sample
const isTrackSingleValue = (pair) => pair.first !== pair.second
const isArtistSingleValue = (selection) =>
  selection.firstArtist !== selection.secondArtist

const isSampleValid = (pair, selection) =>
  isTrackSingleValue(pair) && isArtistSingleValue(selection)

export { isArtistValid, isTrackValid, isSampleValid }
