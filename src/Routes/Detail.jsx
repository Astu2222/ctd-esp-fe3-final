import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const [userData, setUserData] = useState([]);
  const {theme} = useGlobalState()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await response.json();
        console.log(data)
        setUserData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={theme}>
      <div className="form-container detail">
        <h1>Detail Dentist</h1>
        <p>{params.id}</p>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
        <p>{userData.website}</p>
      </div>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </main>
  )
}

export default Detail