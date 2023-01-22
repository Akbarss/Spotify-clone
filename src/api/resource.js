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
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}