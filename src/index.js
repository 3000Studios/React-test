import React from 'react';
import ReactDOM from 'react-dom/client';
import Studios3000Nav from './studios3000_nav';

/**
 * Example usage of the Studios3000Nav component
 */
const App = () => {
  return (
    <div>
      <Studios3000Nav />
      <main>
        <h1>Welcome to 3000 Studios</h1>
        <p>This is a demo application showcasing the Studios3000Nav component.</p>
      </main>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
