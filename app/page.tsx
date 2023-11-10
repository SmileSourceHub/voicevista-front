import { Footer } from '@/organisms/Footer/Footer'
import { Header } from '@/organisms/Header/Header'
import { Nav } from '@/organisms/Nav/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav/>
      <Header/>
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Crystal Clear Voice</h3>
              <p className="text-gray-700">Enjoy high-quality, crystal clear voice communication with VoiceVista.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Secure Conversations</h3>
              <p className="text-gray-700">Your conversations are secure and private, ensuring confidentiality.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
              <p className="text-gray-700">Intuitive and user-friendly interface for a seamless communication experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8">Join VoiceVista today and revolutionize your voice communication.</p>
          <a href="/register" className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white py-3 px-8 rounded-full text-lg md:text-xl transition duration-300">Sign Up Now</a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}