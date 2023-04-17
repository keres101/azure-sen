import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';
import hero from './assets/penati.png';
import TextBg from './components/TextBg';
import Presentation from './components/Presentation';
import { ApiResult } from './components/types';

function App() {
  const [dni, setDni] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const [data, setData] = useState<{
    success: boolean;
    data: ApiResult;
  } | null>(null);
  const consultApiDni = async () => {
    const url = `https://app-dni.azurewebsites.net/api/HttpTrigger1?code=KrXk7retkfpEo7rf_LPr7NHp-9IvPEjEFToj7FbTs-etAzFuoiQjRA==&dni=${dni}`;
    const result = await fetch(url);
    const data = await result.json();
    if (data.success === false) return alert('No se encontro el dni');
    setData(data);
  };
  const onChange = (e: any) => {
    // validate if is a number
    if (e.target.value.match(/^[0-9]+$/) || e.target.value === '') {
      setDni(e.target.value);
    }
  };
  const searchDni = () => {
    if (dni.length != 8) return alert('Ingrese un dni valido');
    setData(null);
    console.log('searching');
    setIsShowing(true);
    consultApiDni();
  };

  return (
    <div className="main">
      {/* <img className="hero" src={hero} alt="imagen buscando" />
      <TextBg /> */}
      <div className="header el">
        <span>VALIDACION DE REGISTRO DE IDENTIDAD</span>
        <div className="bar"></div>
      </div>
      <div className={`space ${isShowing ? 'showing' : ''}`}>
        <div className={`body ${isShowing ? 'showing' : ''}`}>
          <div className="form">
            <div className="input-container" placeholder="dni">
              <input
                type="text"
                placeholder="dni"
                className="input"
                value={dni}
                onChange={onChange}
              />
              <p className="shadow-of-input">{dni}</p>
            </div>
            <Button text="BUSCAR" onClick={searchDni} />
          </div>
        </div>
        {isShowing && data === null && (
          <div className="waiting">Cargando...</div>
        )}
        {isShowing && data !== null && <Presentation user={data.data} />}
      </div>
    </div>
  );
}

export default App;
