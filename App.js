import { Navbar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import { theme } from './theme'
import Home from './pages/Home';
import { committes } from './constants/index'
import Committe from './pages/Committe';

function App() {
  const [color, setColor] = React.useState('')
  const [bgColor, setBgColor] = React.useState('')
  React.useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setColor(theme.dark.text)
      setBgColor(theme.dark.background)
    }
    else {
      setColor(theme.light.text)
      setBgColor(theme.light.background)
    }
  }, [])

  const handleChangeTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setColor(theme.dark.text)
      setBgColor(theme.dark.background)
    }
    else {
      setColor(theme.light.text)
      setBgColor(theme.light.background)
    }
  }
  return (
    <div className="App" color={color} bgColor={bgColor} style={{color: color, background: bgColor}}>
      <Router>
        <Navbar color={color} bgColor={bgColor} handleChangeTheme={handleChangeTheme} />
        <Routes>
          <Route path="/" element={<Home color={color} bgColor={bgColor}/>} />
          <Route path="/*" element={<h1>Not Found</h1>} />
          {committes.map(committe => (
            <Route path={`committes/${committe.slug}`} element={<Committe committe={committe}/>} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
