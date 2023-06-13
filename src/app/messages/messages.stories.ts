import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MessagesComponent } from './messages.component';

const meta: Meta<MessagesComponent> = {
  title: 'Heroes/Messages',
  component: MessagesComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
};

export default meta;

type Story = StoryObj<MessagesComponent>;

export const Messages: Story = {};
