import React, { useState } from 'react';
import { MaterialType, ProjectQuote, AIResponse } from '../types';
import { analyzeProject } from '../services/geminiService';

const QuoteForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<AIResponse | null>(null);
  const [formData, setFormData] = useState<ProjectQuote>({
    name: '',
    email: '',
    projectName: '',
    description: '',
    material: MaterialType.PLA,
    finish: 'Natural',
    quantity: 1,
    deliveryType: 'Standard',
    shippingAddress: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAIHelp = async () => {
    if (!formData.description) {
      alert("Please tell us about your idea so our AI can give you advice!");
      return;
    }
    setLoading(true);
    try {
      const result = await analyzeProject(formData.description);
      setAiAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("AI Lab is a bit busy. Please try again in a few moments!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request received! Our London team will review your project and email you back shortly.");
  };

  return (
    <section id="quote" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Your Project, Started.</h2>
          <p className="text-xl text-slate-500 font-medium">From custom toys to industrial prototypes, it all starts with a chat.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 bg-white p-10 md:p-16 rounded-[4rem] border border-slate-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)]">
          
          <div className="col-span-full relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl">
              <div className="flex-1 space-y-2">
                <h3 className="font-black text-2xl flex items-center gap-3">
                  <span className="text-3xl">✨</span> AI Design Consultant
                </h3>
                <p className="text-slate-400 text-sm font-medium">Describe your idea below, then click here to get material and complexity advice before submitting.</p>
              </div>
              <button 
                type="button" 
                onClick={handleAIHelp}
                disabled={loading}
                className="whitespace-nowrap px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-rose-50 transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : "Get Expert Advice"}
              </button>
            </div>
          </div>

          {aiAnalysis && (
            <div className="col-span-full bg-indigo-50/50 border-2 border-indigo-100 p-8 rounded-[2.5rem] animate-fade-in relative">
              <div className="absolute top-4 right-6 text-2xl opacity-20">📐</div>
              <h4 className="font-black text-indigo-900 mb-3 flex items-center gap-2 text-lg">
                Studio Insight
              </h4>
              <p className="text-slate-700 mb-6 leading-relaxed font-semibold italic text-lg">"{aiAnalysis.analysis}"</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 text-xs font-black rounded-xl uppercase tracking-widest shadow-sm">
                  Complexity: {aiAnalysis.complexity}
                </span>
                {aiAnalysis.suggestedMaterials.map(m => (
                  <span key={m} className="px-4 py-2 bg-rose-500 text-white text-xs font-black rounded-xl uppercase tracking-widest shadow-md">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Your Full Name</label>
            <input 
              required
              name="name"
              autoComplete="name"
              onChange={handleInputChange}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
            <input 
              required
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold"
              placeholder="hello@studio.com"
            />
          </div>

          <div className="col-span-full space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Project Name</label>
            <input 
              required
              name="projectName"
              onChange={handleInputChange}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold"
              placeholder="e.g., Mechanical Prototype V2"
            />
          </div>

          <div className="col-span-full space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">The Idea / Description</label>
            <textarea 
              required
              name="description"
              onChange={handleInputChange}
              rows={5}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold resize-none"
              placeholder="Tell us about the size, usage, and if you need modeling services. Be as descriptive as you like!"
            ></textarea>
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Material Preference</label>
            <div className="relative">
              <select 
                name="material"
                onChange={handleInputChange}
                className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold cursor-pointer appearance-none"
              >
                {Object.values(MaterialType).map(m => <option key={m} value={m}>{m}</option>)}
                <option value="Unsure">Help me choose!</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Quantity</label>
            <input 
              type="number"
              name="quantity"
              min="1"
              defaultValue="1"
              onChange={handleInputChange}
              className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold"
            />
          </div>

          <div className="col-span-full space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Delivery Destination (City, Country)</label>
            <div className="relative">
              <input 
                required
                name="shippingAddress"
                onChange={handleInputChange}
                className="w-full px-14 py-5 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-rose-400 focus:bg-white outline-none transition-all font-semibold"
                placeholder="Where should we ship it?"
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">📍</span>
            </div>
          </div>

          <div className="col-span-full flex justify-center pt-8">
            <button 
              type="submit"
              className="px-16 py-7 bg-rose-600 text-white font-black text-xl rounded-[2.5rem] hover:bg-slate-900 transition-all shadow-[0_20px_40px_-10px_rgba(225,29,72,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] flex items-center gap-4 group active:scale-95"
            >
              Submit Project Request
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
