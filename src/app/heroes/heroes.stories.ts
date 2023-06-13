import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { HeroesComponent } from './heroes.component';

const meta: Meta<HeroesComponent> = {
  title: 'Heroes/Heroes',
  component: HeroesComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
};

export default meta;

type Story = StoryObj<HeroesComponent>;

export const Heroes: Story = {};
