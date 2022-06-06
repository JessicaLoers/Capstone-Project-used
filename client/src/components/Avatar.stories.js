import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

const avatarProps = {
  name: 'Jane',
  image:
    'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
};

export function Default() {
  return <Avatar {...avatarProps} />;
}
