import './App.css';
//import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
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
        
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
      <div className='board-box'>
        <h2 className='title'>Olá</h2>
        <div className='text'>
          Para acessar os manuais dos maquinários, clique no botão abaixo. 
          Os manuais não são oficiais e podem conter erros. Em caso de dúvidas, contate um responsável.</div>
      </div>
      </main>
      <nav className='box'>
        <Link className="App-link" to="/indice">Clique Aqui!</Link>
      </nav>
    </>
  );
}

function Indice() {
  return (
    <>
      <nav className='box'>
        <Link className="App-link" to="/agitador">Agitador Mecânico</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/argamassadeira">Argamassadeira</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/balanca">Balança</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/banho">Banho Maria</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/moinho">Moinho Oscilatório</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/">Voltar</Link>
      </nav>
    </>
  );
}

function AgitadorMec() {
  return (
    <>
      <h2 className="Header">Agitador Mecânico</h2>
      <p className='text'>
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
    </>
  );
}

function Argamassadeira() {
  return (
    <>
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
    </>
  );
}

function Balança() {
  return (
    <>
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
    </>
  );
}

function BanhoMaria() {
  return (
    <>
      <h2 className="Header">Banho Maria</h2>
      <p className="Header">
        ⚠️ Atenção, antes de usar verifique: ⚠️ <br></br><br></br>
            - A voltagem do equipamento; <br></br>
            - Se o equipamento possui o fluido interno. <br></br><br></br>

            Após isso, siga as instruções de operação:<br></br>


              - Conecte o cabo de alimentação na rede elétrica; <br></br>
              - Insira o fluido de trabalho na cuba sem encher demais. Mantenha no mínimo <br></br>
                1 cm de distância entre o fluido e a borda da cuba; <br></br>
              - Ligue a chave geral na posição "ligado"; <br></br>
              - Acione a chave de agitação. Lembre-se de inserir a pastilha de teflon no interior da cuba;<br></br>
              - Configure o controlador de temperatura usandoas teclas de incremento e decremento; <br></br>
              - Note que ao teclar o visor de temperatura ofertada irá oscilar, configure na temperatura
              de trabalho. Em seguida, o visor de temperatura interna irá começar a variar de acordo com a configuração.
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
    </>
  );
}

function MoinhoOsc() {
  return (
    <>
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
    </>
  );
}
   
export default App;

