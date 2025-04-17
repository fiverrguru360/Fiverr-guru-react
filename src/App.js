import React, { useState } from 'react';

export default function FiverrGuru360() {
  const [category, setCategory] = useState('');
  const [gigsCount, setGigsCount] = useState('');
  const [ctr, setCtr] = useState('');
  const [cancellations, setCancellations] = useState('');
  const [level, setLevel] = useState('');
  const [result, setResult] = useState('');

  const handleGeneratePlan = () => {
    let result = '';
    if (category === '' || gigsCount === '' || ctr === '' || cancellations === '' || level === '') {
      result = 'Please fill all inputs to generate your plan.';
    } else {
      result = 'FiverrGuru360 Diagnosis:\n\n';
      if (parseFloat(ctr) < 2) result += '- Your CTR is low. Apply Hack4 (Click Magnet Strategy).\n';
      if (parseInt(cancellations) > 0) result += '- Order cancellations detected. Focus on Hack5 (Perfect Delivery Plan).\n';
      if (parseInt(gigsCount) <= 2) result += '- Very few gigs. Use Hack2 to explore 3 new services.\n';
      if (level.toLowerCase() === 'new') result += '- As a New Seller, follow Hack1 to rank fast.\n';
      result += '\nStay consistent. FiverrGuru360 is with you.';
    }
    setResult(result);
  };

  return (
    <div>
      <h1>FiverrGuru360 Tool</h1>
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} /><br />
      <input placeholder="Gigs Count" value={gigsCount} onChange={e => setGigsCount(e.target.value)} /><br />
      <input placeholder="CTR (%)" value={ctr} onChange={e => setCtr(e.target.value)} /><br />
      <input placeholder="Order Cancellations" value={cancellations} onChange={e => setCancellations(e.target.value)} /><br />
      <input placeholder="Seller Level (New/1/2/Top)" value={level} onChange={e => setLevel(e.target.value)} /><br />
      <button onClick={handleGeneratePlan}>Generate Plan</button>
      <pre>{result}</pre>
    </div>
  );
}
