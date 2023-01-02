const themeStyles = {
  light: { background: "#fafafa" },
  dark: { background: "#2b2b2b" }
}
const ThemeContext = React.createContext(themeStyles.light)

const App = () => {
  return (
    <ThemeContext.Provider value={themeStyles.light}>
      <Dashboard />
    </ThemeContext.Provider>
  )
}

const Dashboard = () => {
  return <Card />
}

const Card = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ background: theme.background }}>
      // Card content...
    </div>
  )
}