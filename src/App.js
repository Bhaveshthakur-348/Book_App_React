import React, { useRef, useState } from "react";
import "./index.css";
import Fuse from "fuse.js";
import books from "./books.json";
import Card from "./Card";
import Modal from "./Modal";
import SearchIcon from "@material-ui/icons/Search";
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Switch
} from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [data, setData] = useState(books);
  const [showModal, setShowModal] = useState(false);
  const currentBook = useRef("");
  const openModal = (book) => {
    setShowModal(true);
    currentBook.current = book;
  };
  const closeModal = (event) => {
    setShowModal(false);
  };
  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "author"]
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <div className="Nav">
            <div className="header">
              <Switch onChange={handleDarkMode} value={darkMode} />
            </div>
            <div className="header_input">
              <SearchIcon />
              <input
                onChange={(e) => searchData(e.target.value)}
                style={{ margin: "auto", display: "block" }}
              />
            </div>

            <div className="header_right">
              <img
                src="https://s3.amazonaws.com/ArchiveImages/LJ/2017/03/EBSCO_CollectionDevelopment_600px-300x300.png"
                alt="BOOK logo"
              />
            </div>
          </div>

          <div className="Container">
            {data.map((item) => (
              <Card
                {...item}
                key={item.title}
                onClick={() => openModal(item)}
              />
            ))}
          </div>
          {showModal && (
            <Modal {...currentBook.current} closeModal={closeModal} />
          )}
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
