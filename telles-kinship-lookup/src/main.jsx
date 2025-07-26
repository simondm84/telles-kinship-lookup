
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import data from './kinshipData.json';

const names = Array.from(
  new Set(data.map(r => r.Person).concat(data.map(r => r.Relative)))
).sort();

function App() {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');

  const relation =
    data.find(r => r.Person === p1 && r.Relative === p2)?.Relationship ||
    data.find(r => r.Person === p2 && r.Relative === p1)?.Relationship ||
    '';

  return (
    <div style={{ maxWidth: 480, margin: 'auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Telles Kinship Lookup</h2>
      <label>
        Select Person 1:<br />
        <select value={p1} onChange={e => setP1(e.target.value)}>
          <option value="">-- Select --</option>
          {names.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </label>
      <br /><br />
      <label>
        Select Person 2:<br />
        <select value={p2} onChange={e => setP2(e.target.value)}>
          <option value="">-- Select --</option>
          {names.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </label>
      <br /><br />
      {p1 && p2 && (
        <div><strong>{p1}</strong> is <strong>{relation}</strong> of <strong>{p2}</strong></div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
