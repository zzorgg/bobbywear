import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <span className="badge badge-error badge-lg mb-4">Product not found</span>
        <div className="divider" />
        <Link to="/catalog" className="btn btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="max-w-full">
            <div className="grid grid-cols-1 gap-3">
              {(product.images?.length ? product.images : [product.image]).filter(Boolean).map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-auto object-contain block max-h-[80vh]" />
                </div>
              ))}
            </div>
          </div>
          <div className="card-body p-0 md:p-2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isNew && <span className="badge badge-success">New</span>}
              {product.isSale && <span className="badge badge-warning">Sale</span>}
              <span className="badge badge-outline capitalize">{product.category}</span>
              <span className="badge badge-outline">Size: {product.size}</span>
              <span className="badge badge-outline">Color: {product.color}</span>
            </div>
            <p className="text-base-content/70 mb-4">{product.description}</p>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Details</div>
              <div className="collapse-content">
                <p>{product.details}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Reviews</div>
              <div className="collapse-content">
                {product.reviews?.length ? (
                  product.reviews.map((r, i) => (
                    <div key={i} className="mb-2">
                      <span className="badge badge-info mr-2">{r.user}</span>
                      <span>{r.text}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-base-content/60">No reviews yet.</p>
                )}
              </div>
            </div>
            <div className="card-actions mt-4">
              <Link to="/catalog" className="btn btn-outline">Back to Catalog</Link>
              <button className="btn btn-primary">Request Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
