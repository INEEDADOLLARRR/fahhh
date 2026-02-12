import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import {
  ArrowRight, CheckCircle2,
  MapPin, ShieldAlert, Check, Loader2, PhoneCall, Globe, Building2
} from 'lucide-react';
import { cn } from '../utils';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  website: string;
  phone: string;
  email: string;
}

const INITIAL_DATA: FormData = {
  firstName: '', lastName: '',
  companyName: '', website: '',
  phone: '', email: ''
};

export const Contact = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Copy & Trust */}
          <div className="flex-1 lg:max-w-xl pt-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6">
              Ready to Get More <br />
              <span className="text-accent">Roofing Leads?</span>
            </h2>
            <p className="text-xl text-secondary mb-12 leading-relaxed">
              Schedule your free strategy call. We'll analyze your current online presence and show you exactly how to dominate your local market.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Free Market Analysis</h4>
                  <p className="text-secondary">We'll show you how many homeowners are searching for roofers in your city right now.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Website Audit</h4>
                  <p className="text-secondary">Find out exactly why your current site isn't converting visitors into callers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-accent">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Lead Prediction</h4>
                  <p className="text-secondary">We'll estimate how many exclusive leads you could be getting with a Roofers Scaling site.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[500px]">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-zinc-100">

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                  <p className="text-secondary mb-8">
                    Thanks {data.firstName}. One of our strategists will be in touch shortly to schedule your call.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="secondary">Book Another Call</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-secondary">First Name</label>
                      <input
                        required
                        type="text"
                        value={data.firstName}
                        onChange={e => updateData({ firstName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-secondary">Last Name</label>
                      <input
                        required
                        type="text"
                        value={data.lastName}
                        onChange={e => updateData({ lastName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                      <input
                        required
                        type="text"
                        value={data.companyName}
                        onChange={e => updateData({ companyName: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="Apex Roofing"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary">Website URL (Optional)</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                      <input
                        type="url"
                        value={data.website}
                        onChange={e => updateData({ website: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="https://apexroofing.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary">Phone Number</label>
                    <div className="relative">
                      <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                      <input
                        required
                        type="tel"
                        value={data.phone}
                        onChange={e => updateData({ phone: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary">Email Address</label>
                    <input
                      required
                      type="email"
                      value={data.email}
                      onChange={e => updateData({ email: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="john@apexroofing.com"
                    />
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    className="py-4 text-lg mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Book My Free Strategy Call <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-zinc-400 text-center mt-4">
                    No credit card required. No obligation.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};