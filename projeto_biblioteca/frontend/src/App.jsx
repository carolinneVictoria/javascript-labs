import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'

function App() {
  return (
    <div className='w-screen h-screen bg-[linear-gradient(90deg,#002F52_35%,#326589_165%)]'>
        <Header />
        <Pesquisa />
        <UltimosLancamentos />
    </div>
  );
}

export default App
