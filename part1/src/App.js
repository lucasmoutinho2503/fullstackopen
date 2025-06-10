const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.content}  {props.exercises}
    </p>
  )
}


const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part content={props.content[0]} exercises={props.exercises[0]} />
      <Part content={props.content[1]} exercises={props.exercises[1]}/>
      <Part content={props.content[2]} exercises={props.exercises[2]} />
    </div>
    
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = ['Fundamentos da biblioteca React', 'Usando props para passar dados', 'Estado de um componente']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course}  />
      <Content content={parts} exercises={exercises}/>
      <Total total={exercises[0] + exercises[1] + exercises[2]}/>
    </div>
  )
}

export default App