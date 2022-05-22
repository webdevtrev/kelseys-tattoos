import React from "react";
import Pricing from "./Pricing";

export default {
  title: "Components/Pricing",
  component: Pricing,
  argTypes: {},
};

const Template = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = {};
