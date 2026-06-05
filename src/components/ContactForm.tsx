import React from 'react';
import { FormData } from '../types';

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <div>
      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
        Name *
      </label>
      <input
        type="text"
        id="name"
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
        value={formData.name}
        onChange={(e) => onChange('name', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
        Email *
      </label>
      <input
        type="email"
        id="email"
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <div>
      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
        Message *
      </label>
      <textarea
        id="message"
        rows={10}
        className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
        value={formData.message}
        onChange={(e) => onChange('message', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  </form>
);

export default ContactForm;
