import { useState } from 'react';
import styles from './InputPesquisar.module.css'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import data from '../../Json/PerfilProfissional.json'
import { Empresa } from '../../Interfaces/ITypesProfissional';
import { useNavigate } from 'react-router-dom';

export function InputPesquisar() {
  const [termoDePesquisa, setTermoDePesquisa] = useState("");
  const [resultados, setResultados] = useState<Empresa[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const termo = e.target.value;
    setTermoDePesquisa(termo);
    if (termo) {
      const resultadosFiltrados = data.filter((item) =>
        item.NomeDaEmpresa.toLowerCase().includes(termo.toLowerCase())
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados([]);
    }
  };

  const handleResultadoClick = (id: number) => {
    navigate(`/PerfilProfissional/${id}`);
  };

  return (
    <div className={styles.Search}>
      <label htmlFor='searchInput'>
        <span className={styles.MaterialSymbolsOutlined}> <MagnifyingGlass /> </span>
      </label>
      <input
        type="text"
        className={styles.searchInput}
        placeholder='Pesquisar'
        value={termoDePesquisa}
        onChange={handleInputChange}
      />
      {resultados.length > 0 && (
        <ul className={styles.resultadosLista}>
          {resultados.map((item) => (
            <li
              key={item.id}
              onClick={() => handleResultadoClick(item.id)}
              className={styles.resultadoItem}
            >
              {item.NomeDaEmpresa}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

