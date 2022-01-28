import styled from 'styled-components'
import { Link } from 'react-router-dom'
import used_melody_main from '../assets/used_melody_main.svg'
import used_logo from '../assets/used_logo.svg'

export default function Home({}) {
  return (
    <Hello>
      <img src={used_logo} alt='used logo' className='used-logo' />
      <div className='svgrow'>
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
        <img
          src={used_melody_main}
          alt='used melody character'
          className='slide'
        />
      </div>
      <h1>A tribute to The Winstons and the lost music samples.</h1>

      <h2 className='mobileOnlyNotice'>
        Nice to see you! Please use a mobile device.
      </h2>
      <Btn>
        <Link to='/profile/Jane' className='discoverBtn'>
          <button>DISCOVER AS JANE</button>
        </Link>
        <Link to='/profile/John' className='discoverBtn'>
          <button>DISCOVER AS JOHN</button>
        </Link>
      </Btn>
    </Hello>
  )
}

const Hello = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondarycolor);
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
  h1 {
    color: var(--darkgrey);
    text-align: center;
    font-size: 1rem;
    width: 60vw;
  }
  .svgrow {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .slide {
    display: inline-block;
    animation: move 5s 1s infinite alternate ease-in-out;
  }

  @keyframes move {
    from {
      transform: translateX(-10rem);
    }
    to {
      transform: translateX(10rem);
    }
  }
  img {
    height: 30vh;
    margin: 0.4rem;
  }
  .used-logo {
    width: 33vw;
    height: auto;
    margin: 0;
  }
`

const Btn = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  button {
    color: var(--lightgrey);
    background-color: var(--darkgrey);
    border-radius: 50px;
    height: 2rem;
    font-size: 0.9rem;
    margin: 0.7rem;
    padding: 0.4rem 1rem;
    width: 12rem;
    border: 1px solid var(--darkgrey);
    cursor: pointer;
  }
`
