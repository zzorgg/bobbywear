import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="px-4 pt-4">
        <img src={product.image} alt={product.name} className="rounded-xl w-full h-40 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-bold">{product.name}</h2>
        <div className="flex gap-2 mb-2">
          {product.isNew && <span className="badge badge-success">New</span>}
          {product.isSale && <span className="badge badge-warning">Sale</span>}
          <span className="badge badge-outline capitalize">{product.category}</span>
        </div>
        <p className="text-base-content/70 mb-2 line-clamp-2">{product.description}</p>
        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  );
}
