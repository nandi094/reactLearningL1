import { useState } from "react";
// import componentsImg from "./assets/components.png";
import Header from "./components/Header.jsx";
  import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
const [ selectedTopic, setSelectedTopic] = useState('Please select a Value');
  function handleSelect(selectedButton){
    // console.log("Hello World! - Selected "+selectedButton);
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept
          {...CORE_CONCEPTS[2]}
          />
          <CoreConcept
          {...CORE_CONCEPTS[3]}
          />
          </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => handleSelect('component')}>Component</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;