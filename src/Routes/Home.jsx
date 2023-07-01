import React, { useEffect, useState }  from 'react'
import Card from '../Components/Card'
import {Link} from "react-router-dom"
import { useGlobalState } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState([]);
  const { theme } = useGlobalState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={theme}>
      <div className='card-grid'>
        {data.map((dentist) => (
          <Link key={dentist.id} to={`/dentist/${dentist.id}`} >
            <Card id={dentist.id} name={dentist.name} username={dentist.username} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home