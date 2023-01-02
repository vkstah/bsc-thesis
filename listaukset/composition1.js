const Counter = (props) => {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <Header />
      <Dashboard>   // Elements are passed directly to the output via the special children prop
        <Display count={count} />
        <CounterControls>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </CounterControls>
      </Dashboard>  // Instead of the <Element /> syntax, the closing tag is used here
      <Footer />
    </div>
  )
}