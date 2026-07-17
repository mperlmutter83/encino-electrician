import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Services', description: 'Electrical services in Encino - repairs, maintenance, installations.' };

export default function ServicesPage() {
  const services = [
    { title: 'Electrical Repairs', desc: 'Swift repairs to restore your electrical systems.' },
    { title: 'Electrical Installations', desc: 'Any size installations for residential and commercial.' },
    { title: 'Maintenance', desc: 'Proactive maintenance to prevent issues.' },
    { title: 'Panel Upgrades', desc: 'Upgrade your electrical panel for safety.' },
    { title: 'Lighting', desc: 'Indoor and outdoor lighting solutions.' },
    { title: 'Safety Inspections', desc: 'Comprehensive electrical safety checks.' },
  ];
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <Link href="/contact" className="inline-block border-2 border-white px-6 py-3 font-medium hover:bg-white hover:text-gray-900">Get a Free Quote</Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
