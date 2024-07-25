import { useState } from "react";
// import componentsImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // console.log("Hello World! - Selected "+selectedButton);
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please Select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((compItems) => (<CoreConcept key={compItems.title} {...compItems}/>))}
            </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic==='components'} onSelect={() => handleSelect("components")}>
              Component
            </TabButton>
            <TabButton isSelected = {selectedTopic==='jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic==='props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected = {selectedTopic==='state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
