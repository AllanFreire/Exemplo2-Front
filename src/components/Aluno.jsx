const Aluno = (props) => {
  return (
    <>
    <h2>PROPS-PROPRIEDADES</h2>
        <p>O nome do Aluno é: {props.nome} </p >
        <p>A idade do Aluno é: {props.idade} </p>
    </>
  )
}

export default Aluno
