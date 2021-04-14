import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ContactList} />
        <Route path='/form' component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
