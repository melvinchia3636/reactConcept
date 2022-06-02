import React from 'react';

import VariableComponent from './concepts/components/VariableComponent';
import FunctionalComponent from './concepts/components/FunctionalComponent';
import ArrowFunctionalComponent from './concepts/components/ArrowFunctionalComponent';
import ClassComponent from './concepts/components/ClassComponent';

import FlatArrayMapping from './concepts/mapping/FlatArrayMapping';
import NestedFlatArrayMapping from './concepts/mapping/NestedFlatArrayMapping';
import ObjectArrayMapping from './concepts/mapping/ObjectArrayMapping';
import ObjectMapping from './concepts/mapping/ObjectMapping';

import Top10HighestPopulation from './projects/mapping/Top10HighestPopulation';

import ConditionalRendering from './concepts/hooks/useState/ConditionalRendering';
import UseState from './concepts/hooks/useState/UseState';

function App() {
  const name = 'Class components';
  const name2 = 'Functional components';

  return (
    <div
      className="App"
      style={{
        padding: '3rem',
      }}
    >
      {VariableComponent}
      <ArrowFunctionalComponent />
      <FunctionalComponent name={name2} />
      <ClassComponent name={name} />

      <FlatArrayMapping />
      <NestedFlatArrayMapping />
      <ObjectArrayMapping />
      <ObjectMapping />

      <Top10HighestPopulation />

      <UseState />
      <ConditionalRendering />
    </div>
  );
}

export default App;
