const ComplexComponent = () => {
  const [ state, setState ] = useState({
    someString: '',
    someInteger: 0,
    someArrayOfObjects: [
      {
        // Some arbitrary number of objects with some values...
      }
    ]
  })
  return (
    <div>
      <button onClick={() => setState(
        {
          ...state,
          someString: 'Updated string'
        }
      )>Click to update state</button>
    </div>
  )
}