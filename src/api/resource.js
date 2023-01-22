export function useResource() {
  return {
    posts: wrapPromise(fetchPosts())
  }
}

const wrapPromise = (promise) => {
  let status = 'pending'
  let result
  const suspender = promise
    .then(r => {
      result = r
      status = 'success'
    }, e => {
      result = e
      status = 'error'
    })

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    }
  }
}

const fetchPosts = (e) => {
  return fetch('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?')
    .then(res => res.json())
}