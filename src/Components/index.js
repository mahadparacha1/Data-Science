import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Form from "./form1";
import SecondForm from "./form2";

const Main = () => {
  // State to manage the active form
  const [activeForm, setActiveForm] = useState("form1");

  // Function to switch forms
  const handleFormSwitch = (formType) => {
    setActiveForm(formType);
  };

  return (
    <>
      {/* Pass the form switch handler to the Header */}
      <Header onFormSwitch={handleFormSwitch} />
      <main>
        {/* Conditional rendering of forms based on the activeForm state */}
        {activeForm === "form1" ? <Form /> : <SecondForm />}
      </main>
      <Footer />
    </>
  );
};

export default Main;
