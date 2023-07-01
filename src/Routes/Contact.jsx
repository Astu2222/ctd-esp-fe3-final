import React from 'react'
import Form from '../Components/Form'
import { useGlobalState } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme} = useGlobalState()
  return (
    <main className={theme}>
      <Form/>
    </main>
  )
}

export default Contact