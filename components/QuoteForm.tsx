
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
      alert("Please tell us a little bit about your idea first!");
      return;
    }
    setLoading(true);
    try {
      const result = await analyzeProject(formData.description);
      setAiAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Our AI consultant is busy drawing. Try again in a second!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Wonderful! We've received your request. One of our creative humans will look at it and email you back soon!");
  };

  return (
    <section id="quote" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Tell us your story</h2>
          <p className="text-slate-600 font-medium">Don't worry about technical terms. Just tell us what you're thinking of!</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-rose-100/20">
          <div className="col-span-full bg-gradient-to-r from-rose-500 to-indigo-600 text-white p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 mb-4 shadow-lg shadow-rose-200">
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-2">
                🎨 Creative Assistant
              </h3>
              <p className="text-rose-50 text-sm opacity-90">Type your idea and click to see how we can model and print it for you.</p>
            </div>
            <button 
              type="button" 
              onClick={handleAIHelp}
              disabled={loading}
              className="whitespace-nowrap px-8 py-3.5 bg-white text-rose-600 font-bold rounded-2xl hover:bg-rose-50 transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Give me advice"}
            </button>
          </div>

          {aiAnalysis && (
            <div className="col-span-full bg-white border-2 border-rose-500/10 p-6 rounded-2xl animate-fade-in">
              <h4 className="font-extrabold text-rose-600 mb-2 flex items-center gap-2">
                O3D Insights
              </h4>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed font-medium italic">"{aiAnalysis.analysis}"</p>
              <div className="flex flex-wrap gap-2">
                {aiAnalysis.suggestedMaterials.map(m => (
                  <span key={m} className="px-3 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded-full border border-rose-100 uppercase tracking-tighter">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">How should we call you?</label>
            <input 
              required
              name="name"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">Email address</label>
            <input 
              required
              type="email"
              name="email"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all"
              placeholder="hello@you.com"
            />
          </div>

          <div className="col-span-full space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">What's the project name?</label>
            <input 
              required
              name="projectName"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all"
              placeholder="A cute gift, a part for my bike..."
            />
          </div>

          <div className="col-span-full space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">Describe your dream object</label>
            <textarea 
              required
              name="description"
              onChange={handleInputChange}
              rows={4}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all resize-none"
              placeholder="Tell us everything! Sizes, colors, or if you need us to do the 3D modeling for you..."
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">Preferred Style/Material</label>
            <select 
              name="material"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all cursor-pointer"
            >
              {Object.values(MaterialType).map(m => <option key={m} value={m}>{m}</option>)}
              <option value="Unsure">I'm not sure, help me choose!</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">How many do you need?</label>
            <input 
              type="number"
              name="quantity"
              min="1"
              defaultValue="1"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all"
            />
          </div>

          <div className="col-span-full space-y-2">
            <label className="block text-sm font-bold text-slate-700 px-1">Delivery Info (Where in the world are you?)</label>
            <input 
              required
              name="shippingAddress"
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-rose-400 outline-none transition-all"
              placeholder="Country and City is enough for now!"
            />
          </div>

          <div className="col-span-full flex justify-center pt-4">
            <button 
              type="submit"
              className="px-12 py-5 bg-rose-500 text-white font-black text-lg rounded-[2rem] hover:bg-rose-600 transition-all shadow-xl shadow-rose-200 flex items-center gap-3 group active:scale-95"
            >
              Send Quote Request
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
