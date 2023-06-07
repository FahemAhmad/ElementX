// src/App.tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Select from "./components/Select/Select";
import Checkbox from "./components/Checkbox/Checkbox";
import Radio from "./components/Radio/Radio";
import Alert from "./components/Alert/Alert";
import Modal from "./components/Modal/Modal";
import Tabs from "./components/Tabs/Tabs";
import Dropdown from "./components/Dropdown/Dropdown";
import Tooltip from "./components/Tooltip/Tooltip";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import themeFile from "./themes/index";
import Avatar from "./components/Avatar/Avatar";
import Image from "./assets/react.svg";
import Badge from "./components/Badge/Badge";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Accordion from "./components/Accordion/Accordion";
import { Column, Container, Row } from "./components/Grid/Grid.styles";
import Typography from "./components/Typography/Typography";
import Spacing from "./components/Spacing/Spacing";

const App: React.FC = () => {
  const [theme] = useState(themeFile.professional);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState("");
  const [toggleChecked, setToggleChecked] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here.
    setShowAlert(true);
  };

  const handleSelectChange = () => {
    // Handle select change here.
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDropdownSelect = (option: string) => {
    setSelectedDropdownOption(option);
  };

  const handleToggleChange = (checked: boolean) => {
    setToggleChecked(checked);
  };

  const selectOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <ThemeProvider theme={theme}>
      <Header>Element X</Header>
      {/* <Sidebar>
        <h3>Sidebar</h3>
        <p>Some content here...</p>
      </Sidebar> */}
      <Form onSubmit={handleFormSubmit}>
        <Input aria-label="input" placeholder="Type here..." />
        <Select options={selectOptions} onChange={handleSelectChange} />
        <Checkbox
          label="Checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Radio
          label="Option 1"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleRadioChange}
        />
        <Radio
          label="Option 2"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleRadioChange}
        />
        <Radio
          label="Option 3"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleRadioChange}
        />
        <Button onClick={handleModalOpen}>Open Modal</Button>
        <Button>Submit</Button>
      </Form>
      <Card>
        <h1>Hello, world!</h1>
        <p>Welcome to my professional theme!</p>
      </Card>
      {showAlert && (
        <Alert
          type="success"
          message="Form submitted successfully!"
          onClose={handleAlertClose}
        />
      )}
      <Modal isOpen={showModal} onClose={handleModalClose}>
        <h2>Modal Content</h2>
        <p>This is a modal dialog.</p>
      </Modal>
      <Tabs>
        <Tabs.Tab label="Tab 1">
          <p>Content for Tab 1</p>
        </Tabs.Tab>
        <Tabs.Tab label="Tab 2">
          <p>Content for Tab 2</p>
        </Tabs.Tab>
        <Tabs.Tab label="Tab 3">
          <p>Content for Tab 3</p>
        </Tabs.Tab>
      </Tabs>
      <Accordion title="Section 1" initialOpen={true}>
        <p>Content for Section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for Section 2</p>
      </Accordion>
      <Breadcrumbs items={["Home", "Products", "Category"]} />
      <Avatar src={Image} alt="Avatar" size={60} />
      <ProgressBar value={75} />
      <Dropdown options={selectOptions} onSelect={handleDropdownSelect} />
      <p>Selected dropdown option: {selectedDropdownOption}</p>
      <ToggleSwitch checked={toggleChecked} onChange={handleToggleChange} />
      <Tooltip text="This is a tooltip" position="top">
        <Button>Hover me</Button>
      </Tooltip>
      <Badge text="2" color="#FF0000" />
      <Footer>© 2023 My Company</Footer>

      <Container>
        <Row>
          <Column size={5}>
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Spacing top={2} right={4}>
              <Typography variant="h3">H3 Heading</Typography>
            </Spacing>
            <Typography variant="h4">H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>
          </Column>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default App;
