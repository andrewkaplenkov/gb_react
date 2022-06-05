import { Input } from './Input';

export default {
	component: Input,
	title: 'MyComponents/Input',
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Write message',
};