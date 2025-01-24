import { useState } from 'react';
import { Link } from 'react-router-dom';

function Causes() {
  const [causes] = useState([
    {
      id: 1,
      title: "Education for All",
      description: "Help provide education to underprivileged children",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
      goal: 500000,
      raised: 350000,
      category: "Education"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      description: "Support clean water projects in rural areas",
      image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285",
      goal: 300000,
      raised: 150000,
      category: "Environment"
    },
    {
      id: 3,
      title: "Healthcare Access",
      description: "Provide medical care to those in need",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
      goal: 800000,
      raised: 600000,
      category: "Healthcare"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Current Causes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {causes.map(cause => (
          <div key={cause.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={cause.image} 
              alt={cause.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">
                {cause.category}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2">{cause.title}</h2>
              <p className="text-gray-600 mb-4">{cause.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Raised: ₹{cause.raised.toLocaleString()}</span>
                  <span>Goal: ₹{cause.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <Link
                to={`/donate?cause=${cause.id}`}
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Causes;