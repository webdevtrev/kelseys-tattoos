import React from 'react';
import LinkButton from './LinkButton';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {},
};

const Template = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Book Now',
};
