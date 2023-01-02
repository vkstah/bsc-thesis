const Counter = (props) => {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}