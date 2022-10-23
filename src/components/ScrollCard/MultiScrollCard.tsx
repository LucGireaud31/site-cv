import { ReactNode } from "react";
import { CanvasScrollCard } from "./CanvasScrollCard";

interface MultiScrollCardsProps {
  cards: {
    img1: string;
    img2?: string;
    zoom?: number;
    duration?: number;
    mesh?: {
      color?: string;
      w?: number;
      h?: number;
      d?: number;
      rounded?: number;
      lightening?: number;
    };
    children: ReactNode;
  }[];
  offset?: number;
}

export function MultiScrollCards(props: MultiScrollCardsProps) {
  const { cards, offset = 0 } = props;

  const cardRender = cards.map((card, i) => {
    const previousCard = i == 0 ? card : cards[i - 1];
    const beginTop =
      (previousCard.duration ?? 1200) + document.documentElement.clientHeight;

    return (
      <CanvasScrollCard
        key={i}
        beginTop={i == 0 ? 0 : beginTop}
        duration={card.duration ?? 1200}
        imgSrc1={card.img1}
        imgSrc2={card.img2}
        zoom={card.zoom}
        mesh={card.mesh}
        offset={offset}
        children={card.children}
      />
    );
  });

  return <>{cardRender}</>;
}
