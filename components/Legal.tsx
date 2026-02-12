
import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <section>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Legal Information</h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            At O3D Creative Services, we value your trust and your imagination. Here is the important stuff about how we work and how we protect you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">1. Terms of Service</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              By requesting a quote, you are initiating a creative consultation. All 3D models created by us remain the intellectual property of O3D Creative Services unless a transfer of rights is explicitly agreed upon in writing.
            </p>
            <p>
              We ship worldwide from our London studio via tracked postal services. Risk of loss passes to the customer once the item is handed to the courier.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">2. Privacy Policy</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              We collect your name, email, and project details only to provide you with a quote and fulfill your order. Your data is stored securely and never sold to third parties.
            </p>
            <p>
              The project descriptions you enter are processed by a secure AI model (Google Gemini) for the sole purpose of technical analysis. No personal identifiers are sent to the AI unless you include them in the project description.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">3. Safety & Materials</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              3D printed objects are generally intended for decorative or prototyping use. Unless explicitly stated, materials used are not food-safe and should not be used as toys for children under 3 years old.
            </p>
          </div>
        </section>
        
        <div className="pt-8 text-slate-400 text-sm font-medium">
          Last updated: October 2024 • O3D Creative Services, London.
        </div>
      </div>
    </div>
  );
};

export default Legal;
