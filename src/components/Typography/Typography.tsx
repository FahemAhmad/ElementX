import React from "react";
import {
  Title,
  Subtitle,
  BodyText,
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./BaseStyledComponent.styles";

type TypographyProps = {
  variant:
    | "title"
    | "subtitle"
    | "body"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  children: React.ReactNode;
};

const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    case "title":
      return <Title>{children}</Title>;
    case "subtitle":
      return <Subtitle>{children}</Subtitle>;
    case "body":
      return <BodyText>{children}</BodyText>;
    case "caption":
      return <Caption>{children}</Caption>;
    case "h1":
      return <Heading1>{children}</Heading1>;
    case "h2":
      return <Heading2>{children}</Heading2>;
    case "h3":
      return <Heading3>{children}</Heading3>;
    case "h4":
      return <Heading4>{children}</Heading4>;
    case "h5":
      return <Heading5>{children}</Heading5>;
    case "h6":
      return <Heading6>{children}</Heading6>;
    default:
      return <BodyText>{children}</BodyText>;
  }
};

export default Typography;
