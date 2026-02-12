import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 16V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V16M2 20H22M12 17H12.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-white leading-none">Roofers Scaling</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
              We help roofing contractors grow their business with high-converting websites and dominant local SEO.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="hover:text-accent transition-colors">Website Design</li>
              <li className="hover:text-accent transition-colors">Local SEO</li>
              <li className="hover:text-accent transition-colors">Lead Generation</li>
              <li className="hover:text-accent transition-colors">Google Ads Management</li>
              <li className="hover:text-accent transition-colors">Reputation Management</li>
            </ul>
          </div>

          {/* Excellence */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="hover:text-accent transition-colors">Roofing Marketing Guide</li>
              <li className="hover:text-accent transition-colors">SEO Checklist</li>
              <li className="hover:text-accent transition-colors">Case Studies</li>
              <li className="hover:text-accent transition-colors">Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-6 text-sm text-zinc-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Austin, TX <br />Serving Clients Nationwide</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+15125550199" className="text-white hover:text-accent transition-colors font-bold text-lg leading-none">(512) 555-0199</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">hello@roofersscaling.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-zinc-500 font-medium">
            © {new Date().getFullYear()} Roofers Scaling. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};