import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About Us', description: 'Learn about Encino Electrician - 30+ years serving the Encino area.' };

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <Link href="/contact" className="inline-block border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900">Get in Touch</Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving the Encino Area since 1994</h2>
            <p className="text-gray-600 mb-4">Our team of experienced professionals provide quality service at affordable prices. With over 30 years of experience, we've built a reputation for reliability and excellence.</p>
            <p className="text-gray-600">We understand the importance of reliability and efficiency, and we are here to help you keep everything in optimal condition.</p>
          </div>
          <Image src="/images/electric-services-21.jpg" alt="Our team" width={500} height={400} className="rounded-lg" />
        </div>
      </section>
    </div>
  );
}
