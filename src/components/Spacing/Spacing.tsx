import styled from "styled-components";

// Define the type of your spacing scale
type SpacingScale = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  // ...add as many as you need
};

type SpacingProps = {
  top?: keyof SpacingScale;
  right?: keyof SpacingScale;
  bottom?: keyof SpacingScale;
  left?: keyof SpacingScale;
};

const Spacing = styled.div<SpacingProps>`
  padding-top: ${(props) => props.top && props.theme.spacing[props.top]};
  padding-right: ${(props) => props.right && props.theme.spacing[props.right]};
  padding-bottom: ${(props) =>
    props.bottom && props.theme.spacing[props.bottom]};
  padding-left: ${(props) => props.left && props.theme.spacing[props.left]};
`;

export default Spacing;
