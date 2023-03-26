
// the data will be inside parameter-name.attribute-name

function Message(parameter) {
  return <h1>This is {parameter.data}</h1>
}



// also can destructer the arguments

function User({name, age}) {
  return (
    <div>
      <h3>User Data</h3>
      <ul>
        <li>Name : {name}</li>
        <li>Age : {age}</li>
      </ul>
    </div>
  )
}



// Argument is Attribute

function App() {
  return (
    <div>
      <Message data="PROPS" />
      <hr />
      <User name="Bob" age={23} />
      <hr />
    </div>
  )
}

export default App
