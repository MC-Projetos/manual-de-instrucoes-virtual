// Importações
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import banho from './img/banho-maria.png';
import logo from './img/logo.png';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="indice" element={<Indice />} />
          <Route path="agitador" element={<AgitadorMec />} />
          <Route path="argamassadeira" element={<Argamassadeira />} />
          <Route path="balanca" element={<Balança />} />
          <Route path="banho" element={<BanhoMaria />} />
          <Route path="moinho" element={<MoinhoOsc />} />
          <Route path="teste" element={<teste />} />
        </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
    <header className="App-header">
      <div className='board-box'>
        <h2 className='title'>Olá</h2>
        <div className='text'>
          Para acessar os manuais dos maquinários, clique no botão abaixo. 
          Os manuais não são oficiais e podem conter erros. Em caso de dúvidas, contate um responsável.</div>
      </div>
      <nav className='box'>
        <Link className="App-link" to="/indice">Clique aqui!</Link>
      </nav>
      <img className="logo" src={logo}></img>
    </header>
    </>
  );
}
function Indice() {
  return (
    <>
    <header className="App-header">
      <h2 className="Header-Title">Índice</h2>
        <nav className='box1'>
          <Link className="App-link" to="/agitador"> • Agitador Mecânico</Link>
        </nav>
        <nav className='box2'>
          <Link className="App-link" to="/argamassadeira"> • Argamassadeira</Link>
        </nav>
        <nav className='box3'>
          <Link className="App-link" to="/balanca"> • Balança</Link>
        </nav>
        <nav className='box4'>
          <Link className="App-link" to="/banho"> • Banho Maria</Link>
        </nav>
        <nav className='box5'>
          <Link className="App-link" to="/moinho"> • Moinho Oscilatório</Link>
        </nav>
        <nav className='box'>
          <Link className="App-link" to="/">Voltar</Link>
      </nav>
      </header>
    </>
  );
}
function AgitadorMec() {
  return (
    <>
      <header className="App-header">
        <h2 className="Header">Agitador Mecânico</h2>
        <p className='text1'>
          Utilizado para misturar, dissolver ou homogeneizar soluções e suspensões de maneira eficiente e controlada<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
          Insira sua mensagem aqui... <br /> Insira sua mensagem aqui... <br />Insira sua mensagem aqui...
        </p>
        <nav className='box'>
          <Link className="App-link" to="/argamassadeira">Avançar</Link>
        </nav>
        <nav className='box'>
          <Link className="App-link" to="/indice">Voltar</Link>
        </nav>
        <nav className='box'>
          <Link className="App-link" to="/indice">Índice</Link>
        </nav>
      </header>
    </>
  );
}
function Argamassadeira() {
  return (
    <>
    <header className="App-header">
      <h2 className="Header">Argamassadeira</h2>
      <p className="Header">Insira sua mensagem aqui...</p>
      <nav className='box'>
        <Link className="App-link" to="/balanca">Avançar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/agitador">Voltar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/indice">Índice</Link>
      </nav>
    </header>
    </>
  );
}
function Balança() {
  return (
    <>
    <header className="App-header">
        <h2 className="Header">Balança</h2>
        <p className='text1'>  Insira sua mensagem aqui...<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
          Insira sua mensagem aqui...  <br /> Insira sua mensagem aqui...
          Insira sua mensagem aqui...<br />  Insira sua mensagem aqui...
          Insira sua mensagem aqui... <br /> Insira sua mensagem aqui... <br />Insira sua mensagem aqui...
          <br /><br />
        </p>
      <nav className='box'>
        <Link className="App-link" to="/banho">Avançar</Link>
      </nav>
      <nav className='box' >
        <Link className="App-link" to="/argamassadeira">Voltar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/indice">Índice</Link>
      </nav>
    </header>
    </>
  );
}
function BanhoMaria() {
  return (
    <>
    <header className='App-header4'>
      <h2 className="Header-Title">Banho Maria</h2>

      {/*<img className='banho-maria'src={banho}></img>*/}
      <p className="Header">
        ⚠️ Atenção, antes de usar verifique: ⚠️ <br></br><br></br>
            - A voltagem do equipamento; <br></br>
            - Se o equipamento possui o fluido interno. <br></br><br></br>

            Após isso, siga as instruções de operação:<br></br>

              - Conecte o cabo de alimentação na rede elétrica; <br></br>
              - Insira o fluido de trabalho na cuba sem encher demais. Mantenha no mínimo <br></br>
              1 cm de distância entre o fluido e a borda da cuba; <br></br>
              - Ligue a chave geral na posição "ligado"; <br></br>
              - Acione a chave de agitação. Lembre-se de inserir a <br></br> 
              pastilha de teflon no interior da cuba;<br></br>
              - Configure o controlador de temperatura usandoas <br></br>
              teclas de incremento e decremento; <br></br>
              - Note que ao teclar o visor de temperatura ofertada <br></br> 
              irá oscilar, configure na temperatura de trabalho. <br></br>
              Em seguida, o visor de temperatura interna irá começar <br></br>
              a variar de acordo com a configuração.
      </p>
      <nav className='box'>
        <Link className="App-link" to="/moinho">Avançar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/balanca">Voltar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/indice">Índice</Link>
      </nav>
    </header>
    </>
    
  );
}
function MoinhoOsc() {
  return (
    <>
    <header className="App-header">
      <h2 className="Header">Moinho Oscilatório</h2>
      <p className="Header">Insira sua mensagem aqui...</p>
      <nav className='box'>
        <Link className="App-link" to="/teste">Avançar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/balanca">Voltar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/indice">Índice</Link>
      </nav>
    </header>
    </>
  );
}
   
export default App;