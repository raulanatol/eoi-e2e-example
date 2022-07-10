import React, { Suspense } from 'react';
import './App.css';
import { useRouter } from './hooks/useRouter';

function App() {
  const { Page } = useRouter();

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <Page/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
