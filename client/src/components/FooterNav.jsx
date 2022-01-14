import styled from 'styled-components'
import { Link, Route, Routes, NavLink } from 'react-router-dom'

export default function FooterNavigation() {
  return (
    <footer>
      <Nav>
        <li>
          <NavLink to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enableBackground='new 0 0 24 24'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#C49BA8'
            >
              <rect fill='none' height='24' width='24' />
              <path d='M12,3L1,11.4l1.21,1.59L4,11.62V21h16v-9.38l1.79,1.36L23,11.4L12,3z M18,19H6v-8.9l6-4.58l6,4.58V19z M9,14 c0,0.55-0.45,1-1,1s-1-0.45-1-1c0-0.55,0.45-1,1-1S9,13.45,9,14z M12,13c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1s-1-0.45-1-1 C11,13.45,11.45,13,12,13z M15,14c0-0.55,0.45-1,1-1s1,0.45,1,1c0,0.55-0.45,1-1,1S15,14.55,15,14z' />
            </svg>
          </NavLink>
        </li>

        <li>
          <NavLink to='/search'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#C49BA8'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
          </NavLink>
        </li>

        <li>
          <NavLink to='/profile'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#C49BA8'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <circle cx='15.5' cy='9.5' r='1.5' />
              <circle cx='8.5' cy='9.5' r='1.5' />
              <path d='M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to='/favourites'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#C49BA8'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
            </svg>
          </NavLink>
        </li>

        <li className='addbtn'>
          <NavLink to='/trackform'>
            <svg
              width='66'
              height='66'
              viewBox='0 0 66 66'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_37_294)'>
                <path
                  d='M5 29C5 13.536 17.536 1 33 1C48.464 1 61 13.536 61 29C61 44.464 48.464 57 33 57C17.536 57 5 44.464 5 29Z'
                  fill='#FFD637'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M40 30H34V36H32V30H26V28H32V22H34V28H40V30Z'
                  fill='#F8F8F8'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_37_294'
                  x='0'
                  y='0'
                  width='66'
                  height='66'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2.5' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_37_294'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_37_294'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </NavLink>
        </li>
      </Nav>
    </footer>
  )
}

const Nav = styled.ul`
  padding: 1rem;
  background: var(--secondarycolor);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 4.4rem;
  right: 0;
  left: 0;

  .addbtn {
    margin-bottom: 3rem;
  }

  li a.active {
    display: inline-block;
    svg {
      fill: var(--lightgrey);
      transform: scale(1.2);
    }
  }
`
