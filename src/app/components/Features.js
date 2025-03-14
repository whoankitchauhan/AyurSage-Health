export default function Features() {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Why Choose AyurSage? 🌿
      </h2>
      <p className="text-gray-600 mt-2 mb-8">
        Our AI-powered platform combines Ayurveda & modern science for
        personalized wellness.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            AI-Powered Health Analysis
          </h3>
          <p className="text-gray-600 mt-2">
            Get accurate Ayurvedic health insights using AI-based diagnostics.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-700">
            Live Doctor Consultation
          </h3>
          <p className="text-gray-600 mt-2">
            Book consultations with Ayurveda experts for personalized health
            advice.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-red-700">
            Personalized Herbal Recommendations
          </h3>
          <p className="text-gray-600 mt-2">
            AI suggests Ayurvedic herbs and products based on your health
            profile.
          </p>
        </div>
      </div>
    </section>
  );
}
