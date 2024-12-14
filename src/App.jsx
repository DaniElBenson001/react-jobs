import React from 'react'

const App = () => {
  const name = 'Daniel';
  const names = ['Daniel', 'Joy', 'Ebube', 'Melody', 'Bro Love']

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello { name }</p>

      <ul>
        {names.map((name, index) => (
          <li key = {index}>{ name } - { name.length }</li>
        ))}
      </ul>

      
    </>
  )
}

export default App;