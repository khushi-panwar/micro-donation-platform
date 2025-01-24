import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Donation() {
  const [searchParams] = useSearchParams();
  const causeId = searchParams.get('cause');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission (to be implemented)
    console.log('Donation submitted:', { amount, frequency, causeId });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Make a Donation</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Select Amount (₹)</label>
            <div className="grid grid-cols-3 gap-2 mb-2">
              {[100, 500, 1000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`py-2 px-4 rounded ${
                    amount === preset.toString()
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setAmount(preset.toString())}
                >
                  ₹{preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter custom amount"
              className="w-full p-2 border rounded mt-2"
              min="1"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Donation Frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="one-time">One-time</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donation;