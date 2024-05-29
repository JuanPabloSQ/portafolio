import Page from "./page/page"
import { ThemeContextProvider } from "./context/ThemeContext"



function App() {

  return (
    <ThemeContextProvider>
        <Page/>
    </ThemeContextProvider>
  )
}

export default App
