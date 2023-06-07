import { Meta, StoryObj } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';

const meta: Meta<DashboardComponent> = {
  title: 'Heroes/Dashboard',
  component: DashboardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DashboardComponent>;

export const Dashboard: Story = {};
