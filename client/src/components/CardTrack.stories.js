import CardTrack from './CardTrack';
import { MemoryRouter } from 'react-router-dom';

export const Template = (args) => (
  <MemoryRouter>
    <CardTrack {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  accountName: 'Amen, Brother',
  bankName: 'Volksbank',
  cover_image:
    'https://img.discogs.com/6xeyQsegITUuHges30TI9Gk1WoQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-18515662-1627643475-9598.jpeg.jpg',
  year: 1969,
  artist: 'The Winstons',
};

const story = {
  title: 'Card',
  component: CardTrack,
};
export default story;
