import React from 'react';
import Banner from './Banner';

import image from '../../images/Placeholder.png';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {},
};

const Template = (args) => <Banner {...args} image={image} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  subheading: 'Subheading',
};
