import React from "react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {},
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
