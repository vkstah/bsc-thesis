const reducer = (state, action) => {    // State management logic is decoupled from the component
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Counter = () => {
  const [ state, dispatch ] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <Display count={state.count} />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}