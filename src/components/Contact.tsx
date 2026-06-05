import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { validateEmail } from '../utils/validation';
import { sendEmail } from '../services/email';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { FormData } from '../types';

const RATE_LIMIT_MS = 30000;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_MS) {
      toast.error('Please wait a moment before submitting again');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setLastSubmissionTime(now);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <Toaster position="top-center" />
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">Get in touch</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Open to research conversations, computational biology collaborations, and technical discussions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm
            formData={formData}
            isSubmitting={isSubmitting}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
