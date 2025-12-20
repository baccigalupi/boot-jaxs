export interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const createButton = ({
  label,
  primary = false,
  size = 'medium',
  onClick,
}: ButtonProps): HTMLButtonElement => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = label;
  button.addEventListener('click', onClick || (() => {}));

  const mode = primary ? 'button--primary' : 'button--secondary';
  button.className = ['button', `button--${size}`, mode].join(' ');

  return button;
};
