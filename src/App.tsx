// src/App.tsx

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button/Button.styles";

const App: React.FC = () => {
  return (
    <>
      <PrimaryButton disabled>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton disabled>Tertiary</TertiaryButton>
    </>
  );
};

export default App;
