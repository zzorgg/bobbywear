import React, { useRef } from "react";

export default function QuoteModal() {
  const dialogRef = useRef(null);
  const open = () => dialogRef.current?.showModal();

  const onSubmit = (e) => {
    e.preventDefault();
    // In real app: send form data
    dialogRef.current?.close();
  };

  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={open}>Request quote</button>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-2">Request a quote</h3>
          <p className="text-base-content/70 mb-4">Share your styles, quantities, and timeline. We'll reply within one business day.</p>
          <form onSubmit={onSubmit} className="grid gap-3">
            <input type="email" required placeholder="Work email" className="input input-bordered" />
            <input type="text" required placeholder="Brand / Company" className="input input-bordered" />
            <textarea required placeholder="Message (styles, qty, timeline)" className="textarea textarea-bordered"></textarea>
            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={() => dialogRef.current?.close()}>Cancel</button>
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

