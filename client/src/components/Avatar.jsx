import styled from 'styled-components'
import userImageOverlay from '../assets/icons/userImageOverlay.svg'
import PropTypes from 'prop-types'
export default function Avatar({ image }) {
  return (
    <UserImageContainer>
      <img
        className='user-image--overlay'
        src={userImageOverlay}
        alt='used bunny'
      />
      <img className='user-image' src={image} alt='user image' />
    </UserImageContainer>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
}

const UserImageContainer = styled.div`
  align-items: flex-end;
  color: var(--drakgrey);
  display: grid;
  justify-items: center;
  position: relative;
  z-index: 120;

  .user-image--overlay {
    height: 22vh;
    position: absolute;
    z-index: 90;
  }
  .user-image {
    filter: grayscale(var(--value, 100%));
    --value: 100%;
    width: auto;
    height: 22vw;
    border-radius: 100%;
    margin-bottom: 3px;
  }
`
