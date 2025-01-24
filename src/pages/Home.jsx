import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaChartLine, FaUsers } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Small Donations, Big Impact
          </h1>
          <p className="text-xl mb-8">
            Join our community of micro-donors making a difference every day
          </p>
          <Link
            to="/causes"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Start Donating
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaHandHoldingHeart className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Micro-Donations</h3>
              <p>Make small contributions that add up to create big change</p>
            </div>
            <div className="text-center p-6">
              <FaChartLine className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
              <p>See how your donations are making a difference</p>
            </div>
            <div className="text-center p-6">
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
              <p>Connect with other donors and share your giving journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Collective Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600">₹10M+</div>
              <div className="text-gray-600">Total Donations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Causes Supported</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;