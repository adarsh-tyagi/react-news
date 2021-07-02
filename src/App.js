import "./styles.css";
import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

export default function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}
