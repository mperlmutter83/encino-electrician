import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Yellow CTA */}
      <section className="bg-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">Got an Electrical Project or Problem?</h3>
          <Link href="/contact" className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Image src="/images/divi-logo-mark-black.png" alt="Encino Electrician" width={60} height={60} className="bg-white rounded p-2" />
              <div>
                <h4 className="font-bold">Encino Electrician</h4>
                <a href="tel:+18186432345" className="block text-yellow-400 hover:text-yellow-300">(818) 643-2345</a>
                <a href="mailto:info@encinoelectrician.com" className="block text-gray-400 hover:text-white">info@encinoelectrician.com</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="text-gray-400 hover:text-white">About our team</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Get a Free Quote</Link>
              <Link href="/services" className="text-gray-400 hover:text-white">Electrical Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Send us a Message</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg></a>
            </div>
            <p className="text-sm text-gray-500">Designed by Elegant Themes | Powered by WordPress</p>
          </div>
        </div>
      </footer>
    </>
  );
}
