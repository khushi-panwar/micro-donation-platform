import { useState } from 'react';
import { FaMedal, FaCalendarCheck } from 'react-icons/fa';

function Profile() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinedDate: "January 2024",
    totalDonated: 25000,
    donationStreak: 15,
    causes: ["Education", "Healthcare", "Environment"]
  });

  const [donations] = useState([
    {
      id: 1,
      cause: "Education for All",
      amount: 500,
      date: "2024-03-15"
    },
    {
      id: 2,
      cause: "Clean Water Initiative",
      amount: 1000,
      date: "2024-03-10"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {user.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Total Donated</span>
                <span className="font-bold">₹{user.totalDonated}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Current Streak</span>
                <div className="flex items-center">
                  <FaCalendarCheck className="text-blue-600 mr-1" />
                  <span className="font-bold">{user.donationStreak} days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaMedal className="text-blue-600 text-2xl mx-auto mb-2" />
                <p className="font-semibold">First Donation</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaMedal className="text-blue-600 text-2xl mx-auto mb-2" />
                <p className="font-semibold">7 Day Streak</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <FaMedal className="text-blue-600 text-2xl mx-auto mb-2" />
                <p className="font-semibold">₹10k Donated</p>
              </div>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Recent Donations</h3>
            <div className="space-y-4">
              {donations.map(donation => (
                <div key={donation.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-semibold">{donation.cause}</p>
                    <p className="text-sm text-gray-600">{donation.date}</p>
                  </div>
                  <span className="font-bold">₹{donation.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;