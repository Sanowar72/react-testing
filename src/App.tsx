import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import { useFlowManager } from "./utils";

const App = () => {
  const { items, handleAddItem, handleDeleteItem } = useFlowManager();
  return (
    <>
      <h1>Focus flow</h1>
      <Form onSubmit={handleAddItem} />
      <List items={items} onDelete={handleDeleteItem} />
    </>
  );
};

export default App;
