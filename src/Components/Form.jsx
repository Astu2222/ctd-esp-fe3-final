import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length <= 5 || !email.includes('@')) {
      setError('Por favor verifique su información nuevamente');
    } else {
      console.log('Datos enviados:', name, email);
      setError('');
      setEnviado(true);
    }
  };

  return (
    <div className="form-container">
      
      <div className="logo-container">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
           
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo:</label>
          <input type="text"  name="name" placeholder="Ingresá tu nombre" required onBlur={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email"  name="emal" placeholder="Ingresá tu email" required onBlur={(e) => setEmail(e.target.value)}/>
        </div>

        <button className="form-submit-btn" type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {!error && enviado && <p>Gracias {name}, te contactaremos lo antes posible vía mail</p>}
    </div>
  );
};

export default Form;