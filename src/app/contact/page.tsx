import { Metadata } from 'next';
import HoursLines from '@/components/HoursLines';

export const metadata: Metadata = { title: 'Contact Us', description: 'Contact Encino Electrician. Call (818) 643-2345.' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded" />
            <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 border rounded" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="bg-yellow-400 text-gray-900 px-6 py-3 font-bold hover:bg-yellow-500">Send Message</button>
          </form>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote in less than 24hrs</h2>
            <div className="mb-4"><h3 className="font-bold">Call</h3><a href="tel:+18186432345" className="text-2xl font-bold text-blue-600">(818) 643-2345</a></div>
            <div className="mb-4"><h3 className="font-bold">Email</h3><a href="mailto:info@encinoelectrician.com" className="text-blue-600">info@encinoelectrician.com</a></div>
            <div><h3 className="font-bold">Hours</h3><HoursLines className="text-gray-600" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
