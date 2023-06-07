import { Meta, StoryObj } from '@storybook/angular';
import { HeroDetailComponent } from './hero-detail.component';

const meta: Meta<HeroDetailComponent> = {
  title: 'Heroes/Hero Detail',
  component: HeroDetailComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeroDetailComponent>;

export const HeroDetails: Story = {};
