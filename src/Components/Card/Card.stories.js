import React from 'react';
import Card from './Card';

import { ReactComponent as Icon } from '../../images/Location.svg';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => (
  <div style={{ maxWidth: 250 }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  Icon: Icon,
  title: 'Location',
  body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod',
};
