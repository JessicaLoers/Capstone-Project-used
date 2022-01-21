import styled from 'styled-components'

export default function Home() {
  return (
    <Hello>
      <h1>Hello, this is a mobile device exprierience 🙂</h1>
    </Hello>
  )
}

const Hello = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 5rem;
    margin-left: 1rem;
  }
`
