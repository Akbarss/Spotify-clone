import { useState } from 'react'
import LazyLoad from 'react-lazy-load';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LazyLoad  height={762} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
        <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
      </LazyLoad>
    </div>
  )
}

export default App
