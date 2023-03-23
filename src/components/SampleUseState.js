import { useState } from 'react'

const SampleUseState = () => {

  const [counter, setCounter] = useState(0)
  const [name, setName] =  useState('Alguem')

  console.log('Component log...')
 
  return (
    <div>
        <h2>Contador: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(counter-1)}>-</button>
        <hr />

        <h2>Oii {name}</h2>
        <button onClick={() => setName('Fabrícia')}>Fabrícia</button>
        <button onClick={() => setName('Jão')}>Jão</button>
    </div>
  )
}

export default SampleUseState