function createCollection(name, description, tracks) {
  var playlist = {
    name: name,
    description: description,
    tracks: tracks || []
  }
  return playlist
}

function createTrack(title, artist, duration) {
  var track = {
    title: title || 'unknown',
    duration: duration || 0,
    artist: artist || 'unknown'
  }
  return track
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.'
  }
}

function addTrack(playlist, track) {
  playlist.tracks.push(track)
  return playlist
}

function getTotalDuration(playlist) {
  var totalDuration = 0;
  for (var i = 0; i < playlist.tracks.length; i++) {
    var songDuration = playlist.tracks[i].duration
    totalDuration += songDuration
  }
  return totalDuration
}

function findTracksByArtist(playlist, artist) {
  var artistTracks = []
  for (var i = 0; i < playlist.tracks.length; i++) {
    if (playlist.tracks[i].artist === artist) {
      artistTracks.push(playlist.tracks[i])
    }
  }
  return artistTracks
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
   }