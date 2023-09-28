import Header from './components/Header'
import AddPost from './components/AddPost'
import Post from './components/Post'
import './App.css';


const App = () => {
  return (
    <div className='app' style={{ backgroundColor: 'white', height: '100vh' }}>
      <div className='container'>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <AddPost />
          <Post />
        </div>
      </div>
    </div>
  )

}

export default App
