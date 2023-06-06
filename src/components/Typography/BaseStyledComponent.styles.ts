import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.titleFontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.subtitleFontSize};
  color: ${(props) => props.theme.textColor};
`;

export const BodyText = styled.p`
  font-size: ${(props) => props.theme.bodyTextFontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Caption = styled.caption`
  font-size: ${(props) => props.theme.captionFontSize};
  color: ${(props) => props.theme.textColor};
`;

// Adding Heading styles
export const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.h1FontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Heading2 = styled.h2`
  font-size: ${(props) => props.theme.h2FontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Heading3 = styled.h3`
  font-size: ${(props) => props.theme.h3FontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Heading4 = styled.h4`
  font-size: ${(props) => props.theme.h4FontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Heading5 = styled.h5`
  font-size: ${(props) => props.theme.h5FontSize};
  color: ${(props) => props.theme.textColor};
`;

export const Heading6 = styled.h6`
  font-size: ${(props) => props.theme.h6FontSize};
  color: ${(props) => props.theme.textColor};
`;
