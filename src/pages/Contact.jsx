import React from "react";

const ADDRESS = "102 by 3, Near Masjid Salar Bakhsh, Colonel Ganj, Uttar Pradesh, Kanpur, India, 208001";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend/email service
    alert("Thanks! We'll get back to you within 1 business day.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Contact BobbyWear</h1>
        <p className="text-base-content/70">We'd love to hear about your styles and timelines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact form */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Send us a message</h2>
            <form className="grid gap-4" onSubmit={onSubmit}>
              <input type="text" className="input input-bordered" placeholder="Full name" required />
              <input type="email" className="input input-bordered" placeholder="Work email" required />
              <input type="text" className="input input-bordered" placeholder="Brand / Company" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" className="input input-bordered" placeholder="Phone (optional)" />
                <input type="text" className="input input-bordered" placeholder="Quantity / Size run (optional)" />
              </div>
              <textarea className="textarea textarea-bordered min-h-32" placeholder="Message (styles, quantities, timeline)"></textarea>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">Send message</button>
              </div>
            </form>
          </div>
        </div>

        {/* Address + Map */}
        <div className="grid gap-4">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Our address</h2>
              <p className="text-base-content/80">{ADDRESS}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-base-content/70">
                <div>
                  <div className="font-semibold">Hours</div>
                  <div>Mon–Sat: 9:00 – 18:00</div>
                  <div>Sun: Closed</div>
                </div>
                <div>
                  <div className="font-semibold">Contact</div>
                  <div>Phone: +91 00000 00000</div>
                  <div>Email: hello@bobbywear.example</div>
                </div>
              </div>
              <div className="card-actions">
                <a
                  className="btn btn-outline btn-sm"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-box overflow-hidden shadow">
            <iframe
              title="BobbyWear map"
              src={MAP_SRC}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-72 md:h-96"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

