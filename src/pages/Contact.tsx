import { FormEvent } from 'react';
import { MapPin, Clock, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const ADDRESS = '102 by 3, Near Masjid Salar Bakhsh, Colonel Ganj, Uttar Pradesh, Kanpur, India, 208001';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to backend/email service
    alert("Thanks! We'll get back to you within 1 business day.");
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-base-200 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-base-content">
            Contact BobbyWear
          </h1>
          <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto">
            We'd love to hear about your styles and timelines. Let's create something amazing together.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl border-2 border-base-300">
              <div className="card-body p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-base-content/60 mb-8">
                  Fill out the form below and we'll get back to you within one business day.
                </p>
                
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-base">Full Name *</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered input-lg focus:input-primary"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-base">Work Email *</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="input input-bordered input-lg focus:input-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-base">Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="input input-bordered input-lg focus:input-primary"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-base">Brand / Company</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Brand Name"
                        className="input input-bordered input-lg focus:input-primary"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base">Quantity Needed</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 500 units"
                      className="input input-bordered input-lg focus:input-primary"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base">Your Message *</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered textarea-lg focus:textarea-primary min-h-40"
                      placeholder="Tell us about your styles, quantities, timeline, and any specific requirements..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full gap-2 shadow-lg">
                    <Send className="w-5 h-5" />
                    <span className="font-semibold">Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar - Takes 1 column */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="card bg-base-100 shadow-xl border-2 border-base-300">
              <div className="card-body p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm">Address</h4>
                      <p className="text-base-content/70 text-sm leading-relaxed">
                        {ADDRESS}
                      </p>
                    </div>
                  </div>

                  <div className="divider my-4" />

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm">Business Hours</h4>
                      <p className="text-base-content/70 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                      <p className="text-base-content/70 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="divider my-4" />

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm">Phone</h4>
                      <p className="text-base-content/70 text-sm">+91 00000 00000</p>
                    </div>
                  </div>

                  <div className="divider my-4" />

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-info" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-sm">Email</h4>
                      <p className="text-base-content/70 text-sm">hello@bobbywear.example</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              className="btn btn-outline btn-lg w-full gap-2 border-2"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Get Directions</span>
            </a>
          </div>
        </div>

        {/* Map Section - Full Width Below */}
        <div className="mt-12 max-w-7xl mx-auto">
          <div className="card bg-base-100 shadow-xl border-2 border-base-300 overflow-hidden">
            <iframe
              title="BobbyWear location map"
              src={MAP_SRC}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[500px]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}