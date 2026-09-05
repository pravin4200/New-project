// App.js
import React from "react";
import StudentCard from "./StudentCard";
import TextAnalyzer from "./TextAnalyzer";


function App() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>Student Profile</h1>
      <StudentCard
        name="Pravin Prajapati"
        course="full stack developnment"
        semester="5th"
        email="pravin@example.com"
        phone="9876543210"
        city="Navsari"
      />
       <StudentCard
        name="spider man"
        course="React Development"
        semester="4th"
        email="spidy@example.com"
        phone="127621232"
        city="new yourk"
      />
       <StudentCard
        name="thanosh"
        course="html .css Development"
        semester="3th"
        email="thanosh@example.com"
        phone="9876579876"
        city="spaceship"
      />
       <StudentCard
        name="iron man"
        course="Ethical haking"
        semester="1th"
        email="iron@example.com"
        phone="1234567890"
        city="Navsari"
      />
       <StudentCard
        name="hulk"
        course="applicatin  Development"
        semester="2th"
        email="hulk@example.com"
        phone="9876543210"
        city="new yourk"
      />
      <div style={{ padding: "20px", backgroundColor: "#111", minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>Text Analyzer</h1>
      <TextAnalyzer />
    </div>
    </div>
  );
}

export default App;
