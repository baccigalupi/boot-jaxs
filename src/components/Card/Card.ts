export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const createCard = ({
  title,
  description,
  imageUrl,
}: CardProps): HTMLDivElement => {
  const card = document.createElement('div');
  card.className = 'card';

  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.className = 'card__image';
    card.appendChild(img);
  }

  const content = document.createElement('div');
  content.className = 'card__content';

  const titleElement = document.createElement('h3');
  titleElement.className = 'card__title';
  titleElement.innerText = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'card__description';
  descriptionElement.innerText = description;

  content.appendChild(titleElement);
  content.appendChild(descriptionElement);
  card.appendChild(content);

  return card;
};
