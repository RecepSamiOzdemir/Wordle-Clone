import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    document.title = 'Wordle Game Clone';
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  },[setSolution])

  return (
    <>    
    <div className="App">
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Wordle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Wordle Game</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    {solution && <Wordle solution={solution} />}
</div>
</>

  );
}

export default App;
