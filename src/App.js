import React, {useState} from 'react';

import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter } from "react-router-dom";

import theme from "./components/UI/Theme"
import Header from "./components/UI/Header";

import Routes from "./Routes/index"
import Footer from "./components/UI/Footer";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Routes />
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
