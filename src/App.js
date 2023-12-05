import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Main";
import Landing from "./Pages/Landing";
import Game from "./Pages/Blockbraker";

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="game" element={<Game />} />
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}
export default App;
