import './App.css'

import BasicProps from './components/BasicProps'
import RefProps from './components/RefProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import ThemeToggler from './components/ThemeToggler'

function Navigation() {
  const isDark = true;
  const section = [
    {id: 'basic', label: 'Basic Props', icon: '📦'}
    {id: 'ref', label: 'Ref Props', icon: '🔗'}
    {id: 'children', label: 'Children Props', icon: '👶'}
    {id: 'complex', label: 'Complex Props', icon: '🧩'}
    {id: 'theme', label: 'Theme Props', icon: '🎨'}
  ]

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}></nav>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
