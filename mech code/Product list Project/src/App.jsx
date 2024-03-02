import './App.css'
import Header from './components/Header'
import Products from './components/Products'
function App() {

  
  return (
    <>
      <div className="header">
      <Header/>
      </div>
      <main>
         <Products/>
      </main>
      
    </>
  )
}
export default App
