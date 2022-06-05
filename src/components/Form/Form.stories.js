import { Form } from './Form';

export default {
	component: Form,
	title: 'MyComponents/Form',
};

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
