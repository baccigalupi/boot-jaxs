import type { Meta, StoryObj } from '@storybook/html';
import type { CardProps } from '../components/Card/Card';
import { createCard } from '../components/Card/Card';
import '../components/Card/Card.css';

const meta = {
  title: 'Example/Card',
  tags: ['autodocs'],
  render: (args) => createCard(args),
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content.',
  },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Beautiful Card',
    description: 'This is a card component with some interesting content to display.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    imageUrl: 'https://via.placeholder.com/350x200',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Longer Content',
    description:
      'This card demonstrates how the component handles longer text content. The description can span multiple lines and will wrap accordingly within the card boundaries.',
  },
};
