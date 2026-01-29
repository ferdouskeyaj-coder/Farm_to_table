import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-forest/95 text-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sage rounded-3xl sm:rounded-4xl flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold">খামার থেকে টেবিল</span>
            </div>
            <p className="text-sage text-sm sm:text-base">
              তাজা জৈব পণ্য সরাসরি আপনার দোরগোড়ায়
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 sm:space-y-3 text-sage text-sm sm:text-base">
              <li><Link href="/" className="hover:text-cream transition-colors">হোম</Link></li>
              <li><Link href="/menu" className="hover:text-cream transition-colors">কেনাকাটা</Link></li>
              <li><Link href="/dashboard" className="hover:text-cream transition-colors">ড্যাশবোর্ড</Link></li>
              <li><Link href="/user" className="hover:text-cream transition-colors">আমার অ্যাকাউন্ট</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">তথ্য</h4>
            <ul className="space-y-2 sm:space-y-3 text-sage text-sm sm:text-base">
              <li><Link href="/nutrition" className="hover:text-cream transition-colors">পুষ্টি তথ্য</Link></li>
              <li><Link href="/about" className="hover:text-cream transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><a href="#" className="hover:text-cream transition-colors">সাহায্য কেন্দ্র</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">যোগাযোগ</h4>
            <ul className="space-y-2 sm:space-y-3 text-sage text-sm sm:text-base">
              <li>📞 +৮৮০ ১৭১২-৩৪৫৬৭৮</li>
              <li>📧 info@farmtable.com</li>
              <li>📍 ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage/30 pt-6 sm:pt-8 text-center text-sage text-sm sm:text-base">
          <p>&copy; ২০২৬ খামার থেকে টেবিল। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
