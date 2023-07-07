// Importações
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import banho from './img/banho-maria.png';
import logo from './img/logo.png';
import logoeel from './img/logoeel.png';
import agitador from './img/agitador.png';
import argamassadeira from './img/argamassadeira.png';

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
    <h3 className='Header-Title1'>MC PROJETOS</h3>
    <div className='board-box'>
      <h2 className='title'>Olá</h2>
      <div className='text'>
        Para acessar os manuais dos maquinários, clique no botão abaixo. 
        Os manuais não são oficiais e podem conter erros. Em caso de dúvidas, contate um responsável.
      </div>
    </div>
      <nav className='box'>
        <Link className="App-link" to="/indice">Clique aqui!</Link>
      </nav>
      <img className="logo" src={logo} alt="logo da mc projetos"></img>
      <img className="logoeel" src={logoeel} alt="logo da escola de engenharia de lorena"></img>
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
      <header className="App-header1">
        <h2 className="Header-Title">Agitador Mecânico</h2>
  
          <li className="Header">
            ⚠️ Atenção, antes de usar verifique: ⚠️ <br></br>
              ● A voltagem do equipamento; <br></br>
              ● Se a tomada está devidamente ligada e aterrada. <br></br><br></br>

              ● Para ligar o equipamento, pressione a tecla de on/off por 3 segundos; <br></br>
              ● Assim, será apresentado no display simultaneamente as seguintes informações: <br></br>
                  Rotação (RPM), Tempo (Min) e Modo. <br></br> 
              ● A tecla Set (4), navega-se entre os parâmetros de programação; <br></br>
              ● Primeiramente seleciona-se o modo, ficará piscando no display MODE 1, <br></br> 
                com as setas selecione o modo desejado (de 1 a 3); <br></br>
              ● Pressione mais uma vez a tecla Set e ficará piscando <br></br> 
                a rotação (RPM) e com as setas selPressione Set mais <br></br> 
                uma vez e ficará piscando o tempo (Min), com as setas <br></br> 
                programe o tempo desejado. Se deixar o tempo zerado, <br></br> 
                o equipamento agitará continuamente, sem contagem de <br></br> 
                tempo para desligar automaticamente.Para modificar a <br></br> 
                velocidade de subida (RPM / min) gire o controlador de velocidade (3); <br></br>
              ● As programações ficarão salvas para cada <br></br> 
                modo: MODE 1, MODE 2 e MODE 3. <br></br>
                Para iniciar a agitação e/ou contagem de <br></br> 
                tempo, pressione a tecla onf/off . Caso queira pausar <br></br>
                a rotação, basta pressionar a tecla on/off em qualquer momento. <br></br>
                Para desligar, pressione on/off por 3 segundos a tecla . <br></br>
              
          </li>
        <img className='agitador'src={agitador}></img>

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
    <header className="App-header2">
      <h2 className="Header-Title">Argamassadeira</h2>
      <p className="Header">⚠️ Atenção, antes de usar verifique: ⚠️ <br></br><br></br>
        ● Posicionar o equipamento em bancada firme e nivelada; <br></br>
        ●  Certificar-se de que a pá está bem fixada ao eixo; <br></br>
        Certificar-se da tensão de alimentação elétrica e de <br></br>
        que a chave elétrica localizada no lado esquerdo da <br></br> 
        coluna está desligada (pos. 0 ) e conectar o equipamento à rede. <br></br><br></br>

        ● Posicionar o localizador da cuba no encaixe da base móvel; <br></br> 
        Travar a cuba na base móvel girando para a direita a alavanca plástica, <br></br>
        sem esforço excessivo;<br></br>
        ● Trazer a alavanca de elevação para a frente até a sua posição máxima; <br></br>
        ● Acionar o equipamento por meio da chave elétrica de 3 posições, <br></br> 
        girando o botão para a posição1 (baixa rotação) <br></br> 
        ou 2 (alta rotação), conforme especificação a ser seguida; <br></br>
        ● Retornar o botão da chave elétrica para a posição zero para finalizar a operação.
      </p>
      <img className='argamassadeira'src={argamassadeira}></img>
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
    <header className="App-header3">
        <h2 className="Header-Title">Balança</h2>
        <p className='text1'>  Insira sua mensagem aqui...<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
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
      <p className="Header">
        ⚠️ Atenção, antes de usar verifique: ⚠️ <br></br><br></br>
            ● A voltagem do equipamento; <br></br>
            ● Se o equipamento possui o fluido interno. <br></br><br></br>

            Após isso, siga as instruções de operação:<br></br>

              ● Conecte o cabo de alimentação na rede elétrica; <br></br>
              ● Insira o fluido de trabalho na cuba sem encher demais. Mantenha no mínimo <br></br>
              1 cm de distância entre o fluido e a borda da cuba; <br></br>
              ● Ligue a chave geral na posição "ligado"; <br></br>
              ● Acione a chave de agitação. Lembre-se de inserir a <br></br> 
              pastilha de teflon no interior da cuba;<br></br>
              ● Configure o controlador de temperatura usandoas <br></br>
              teclas de incremento e decremento; <br></br>
              ● Note que ao teclar o visor de temperatura ofertada <br></br> 
              irá oscilar, configure na temperatura de trabalho. <br></br>
              Em seguida, o visor de temperatura interna irá começar <br></br>
              a variar de acordo com a configuração.
      </p>
      <img className='banho-maria'src={banho}></img>
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
    <header className="App-header5">
      <h2 className="Header-Title">Moinho Oscilatório</h2>
      <p className="Header">Insira sua mensagem aqui...</p>
      {/*<nav className='box'>
        <Link className="App-link" to="/teste">Avançar</Link>
      </nav>*/}
      <nav className='box'>
        <Link className="App-link" to="/banho">Voltar</Link>
      </nav>
      <nav className='box'>
        <Link className="App-link" to="/indice">Índice</Link>
      </nav>
    </header>
    </>
  );
}
   
export default App;