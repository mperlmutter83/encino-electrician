import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Electrical Installations & Repairs</h1>
          <Link href="/contact" className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 font-medium hover:bg-yellow-500">
            Get a free quote
          </Link>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <Image src="/images/electric-services-21.jpg" alt="Repairs" width={800} height={550} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Repairs & Maintainance</h3>
            <p className="text-gray-600">Our expert team is dedicated to providing top-notch repairs and maintenance services that ensure your equipment and systems run smoothly. We understand the importance of reliability and efficiency, and we are here to help you keep everything in optimal condition.</p>
          </div>
          <div>
            <Image src="/images/electric-services-22.jpg" alt="Installations" width={800} height={550} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Any Size Installations</h3>
            <p className="text-gray-600">No matter the scale of your project, we specialize in installations of any size, ensuring that every detail is meticulously handled. From small residential setups to expansive commercial projects, our team is equipped to deliver exceptional results.</p>
          </div>
        </div>
      </section>

      {/* We Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">We service residential & business locations</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold">✓</span> Large scale projects</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold">✓</span> Small quick fixes & installations</li>
              <li className="flex items-center gap-3"><span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold">✓</span> Full service infrastructure</li>
            </ul>
            <Link href="/services" className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800">Our Services</Link>
          </div>
          <div>
            <Image src="/images/electric-services-22.jpg" alt="Services" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* 30+ Years */}
      <section className="py-8 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-blue-600 font-bold">30+ Years of experience</p>
            <h3 className="text-2xl font-bold text-gray-900">Licensed & Trusted by thousands</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
