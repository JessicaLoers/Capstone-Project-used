const hasTrackNameMinLenght = (name, stringLength) =>
    name.length > stringLength
  //const hasValidArtist = (artist) => artist != ''


  const isTrackValid = (track) => 
  hasTrackNameMinLenght(track.name, 3) //&&
 // hasValidArtist(track.artist)


  export default isTrackValid