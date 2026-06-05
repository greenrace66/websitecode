import { Mail, MapPin } from 'lucide-react';
import { profile } from '../constants/portfolio';
import CalendlyWidget from './CalendlyWidget';

const ContactInfo = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-2xl font-semibold text-slate-950">Contact information</h3>
    <div className="mt-6 space-y-4">
      <a href={`mailto:${profile.email}`} className="flex items-center rounded-lg border border-slate-200 p-4 text-slate-700 transition hover:border-slate-950 hover:text-slate-950">
        <Mail className="mr-3 h-5 w-5 text-slate-950" />
        <span>{profile.email}</span>
      </a>
      <div className="flex items-center rounded-lg border border-slate-200 p-4 text-slate-700">
        <MapPin className="mr-3 h-5 w-5 text-slate-950" />
        <span>{profile.location}</span>
      </div>
    </div>
    <div className="mt-8">
      <h4 className="font-semibold text-slate-950">Connect</h4>
      <p className="mt-2 leading-7 text-slate-600">
        Lets talk
      </p>
    </div>
    <CalendlyWidget />
  </div>
);

export default ContactInfo;
