import styles from './App.module.css';
import { Navbar } from './componets/Navbar/Navbar.jsx'; // Ajuste a extensão conforme necessário

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
