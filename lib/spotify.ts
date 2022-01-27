import SpotifyWebApi from 'spotify-web-api-node'

const scopes = ['user-read-private', 'user-read-email'].join(',')

const params = {
  scopes: scopes,
}

const queryParamString = new URLSearchParams(params)

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export default spotifyApi

export { LOGIN_URL }
