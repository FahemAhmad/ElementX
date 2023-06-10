// src/App.tsx

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button/Button.styles";
import { GlobalStyle } from "./utils";

const App: React.FC = () => {
  return (
    <>
      <PrimaryButton disabled>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton disabled>Tertiary</TertiaryButton>
      <GlobalStyle />
    </>
  );
};

export default App;
