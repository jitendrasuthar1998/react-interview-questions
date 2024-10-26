import React from "react";
import Greet from "./TsComponents/Greet";
import Person from "./TsComponents/Person";
import PersonList from "./TsComponents/PersonList";
import Status from "./TsComponents/Status";
import Heading from "./TsComponents/Heading";
import Oscar from "./TsComponents/Oscar";
import Button from "./TsComponents/Button";
import Input from "./TsComponents/Input";
import Container from "./TsComponents/Container";

const Demo = () => {
  const personName = {
    first: "John",
    last: "Doe",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princes", last: "Diana" },
  ];

  return (
    <div>
      {/* React component with props types */}
      <Greet name="Hello world from Demo" messageCount={10} isLoggedIn={true} />

      {/* React component with having object as prop */}
      <Person name={personName} />

      {/* React component with having array of objects as props */}
      <PersonList names={nameList} />

      {/* React component with union type in props */}
      <Status status="loading" />
      <Status status="success" />
      <Status status="error" />

      {/* below code will throw error  */}

      {/* <Status status="asdf"/> */}

      {/* React component having children as string */}
      <Heading>Placeholder text</Heading>

      {/* React component having Children as React component */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio.</Heading>
      </Oscar>

      {/* React component with optional prop type */}
      <Greet name="Jitendra" isLoggedIn={true} />

      {/* React component with onClick event prop */}
      <Button handleClick={() => console.log("Button clicked")} />

      {/* React component with onChange event prop */}
      <Input value="Hello" handleChange={(event) => console.log(event)} />

      <Input value="World" handleChange={(event) => console.log(event)} />

      {/* React component with CSS styles as props */}
      <Container
        styles={{
          border: "1px solid red",
          backgroundColor: "blue",
          margin: "10px 0",
          height: "20px",
        }}
      />

      <Container
        styles={{
          border: "1px solid red",
          backgroundColor: "green",
          height: 30,
        }}
      />
    </div>
  );
};

export default Demo;
