import './App.css';
import styles from './App.module.scss';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

function App() {

  return (
    <main className={styles.main}>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
}

export default App
