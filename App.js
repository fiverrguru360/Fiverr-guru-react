import React, { useState } from 'react';

function App() {
  const [level, setLevel] = useState('');
  const [gigs, setGigs] = useState('');
  const [ctr, setCtr] = useState('');
  const [cancellations, setCancellations] = useState('');
  const [revenue, setRevenue] = useState('');
  const [result, setResult] = useState('');

  const diagnose = () => {
    let msg = "FiverrGuru360 Diagnosis:\n";

    if (!level || !gigs || !ctr || !cancellations || !revenue) {
      setResult("Please fill all fields to generate report.");
      return;
    }

    if (parseFloat(ctr) < 2) msg += "- CTR is low. Apply Hack4 (Clicks Boost).\n";
    if (parseInt(cancellations) > 0) msg += "- High cancellation rate. Apply Hack5.\n";
    if (parseInt(gigs) <= 2) msg += "- Very few gigs. Expand using Hack2.\n";
    if (level.toLowerCase() === 'new') msg += "- As a new seller, follow Hack1 first.\n";
    if (parseInt(revenue) < 2000) msg += "- Revenue low. Use Hack6 Scaling.\n";

    setResult(msg);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>FiverrGuru360 – Smart Diagnosis Tool</h2>
      <input placeholder="Seller Level" value={level} onChange={e => setLevel(e.target.value)} /><br />
      <input placeholder="Number of Gigs" value={gigs} onChange={e => setGigs(e.target.value)} /><br />
      <input placeholder="CTR %" value={ctr} onChange={e => setCtr(e.target.value)} /><br />
      <input placeholder="Cancellation Count" value={cancellations} onChange={e => setCancellations(e.target.value)} /><br />
      <input placeholder="Revenue $" value={revenue} onChange={e => setRevenue(e.target.value)} /><br />
      <button onClick={diagnose}>Generate Fiverr Diagnosis</button>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
