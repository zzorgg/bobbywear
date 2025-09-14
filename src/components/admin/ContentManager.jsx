import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Upload, Save, X, Image as ImageIcon } from 'lucide-react';

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Summer Dress',
      price: 89.99,
      category: 'Dresses',
      stock: 15,
      image: '/public/asset/03f4c187-4a6e-4e70-9f5f-d19715c86a70.jpg',
      description: 'Beautiful summer dress perfect for any occasion.',
      available: true
    },
    {
      id: 2,
      name: 'Casual Shirt',
      price: 45.50,
      category: 'Shirts',
      stock: 8,
      image: '/public/asset/04c5d728-f04a-4277-91ea-0419c50bc97d.jpg',
      description: 'Comfortable casual shirt for everyday wear.',
      available: true
    },
    {
      id: 3,
      name: 'Evening Gown',
      price: 199.99,
      category: 'Dresses',
      stock: 0,
      image: '/public/asset/09422c10-4172-4a18-9c52-d91de4941baa.jpg',
      description: 'Elegant evening gown for special occasions.',
      available: false
    }
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    description: '',
    available: true
  });

  const [homePageContent, setHomePageContent] = useState({
    heroTitle: 'Welcome to BobbyWear',
    heroSubtitle: 'Discover the latest fashion trends',
    featuredProducts: [1, 2],
    announcement: 'Free shipping on orders over $100!'
  });

  const handleProductSave = (product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      setEditingProduct(null);
    } else {
      const newId = Math.max(...products.map(p => p.id)) + 1;
      setProducts([...products, { ...product, id: newId }]);
      setNewProduct({
        name: '',
        price: '',
        category: '',
        stock: '',
        image: '',
        description: '',
        available: true
      });
      setShowAddForm(false);
    }
  };

  const handleProductDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleToggleAvailability = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, available: !p.available } : p
    ));
  };

  const ProductForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState(product || newProduct);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock)
      });
    };

    return (
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">
            {product ? 'Edit Product' : 'Add New Product'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price ($)</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="input input-bordered"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select select-bordered"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Pants">Pants</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Quantity</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                placeholder="/public/asset/image-name.jpg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Available for Sale</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={formData.available}
                  onChange={(e) => setFormData({...formData, available: e.target.checked})}
                />
              </label>
            </div>
            <div className="card-actions justify-end">
              <button type="button" className="btn btn-ghost" onClick={onCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="tabs tabs-boxed">
        <button
          className={`tab ${activeTab === 'products' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products Management
        </button>
        <button
          className={`tab ${activeTab === 'homepage' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('homepage')}
        >
          Homepage Content
        </button>
        <button
          className={`tab ${activeTab === 'images' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('images')}
        >
          Image Gallery
        </button>
      </div>

      {/* Products Management Tab */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Products Management</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </button>
          </div>

          {/* Add/Edit Product Form */}
          {(showAddForm || editingProduct) && (
            <ProductForm
              product={editingProduct}
              onSave={handleProductSave}
              onCancel={() => {
                setShowAddForm(false);
                setEditingProduct(null);
              }}
            />
          )}

          {/* Products Table */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={product.image}
                                alt={product.name}
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/150';
                                }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="font-bold">{product.name}</div>
                          <div className="text-sm opacity-50 truncate max-w-xs">
                            {product.description}
                          </div>
                        </td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <td>
                          <span className={`badge ${product.stock === 0 ? 'badge-error' : product.stock < 5 ? 'badge-warning' : 'badge-success'}`}>
                            {product.stock}
                          </span>
                        </td>
                        <td>
                          <button
                            className={`btn btn-xs ${product.available ? 'btn-success' : 'btn-error'}`}
                            onClick={() => handleToggleAvailability(product.id)}
                          >
                            {product.available ? 'Available' : 'Unavailable'}
                          </button>
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <button
                              className="btn btn-xs btn-primary"
                              onClick={() => setEditingProduct(product)}
                            >
                              <Edit className="w-3 h-3" />
                            </button>
                            <button
                              className="btn btn-xs btn-error"
                              onClick={() => handleProductDelete(product.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Homepage Content Tab */}
      {activeTab === 'homepage' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Homepage Content</h2>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Hero Section</h3>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Hero Title</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={homePageContent.heroTitle}
                    onChange={(e) => setHomePageContent({
                      ...homePageContent,
                      heroTitle: e.target.value
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Hero Subtitle</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={homePageContent.heroSubtitle}
                    onChange={(e) => setHomePageContent({
                      ...homePageContent,
                      heroSubtitle: e.target.value
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Announcement Banner</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={homePageContent.announcement}
                    onChange={(e) => setHomePageContent({
                      ...homePageContent,
                      announcement: e.target.value
                    })}
                  />
                </div>
                <button className="btn btn-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Tab */}
      {activeTab === 'images' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Image Gallery</h2>
            <button className="btn btn-primary">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </button>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* This would be populated with your actual images */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="relative group">
                    <div className="aspect-square bg-base-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-base-content/50" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <button className="btn btn-xs btn-error">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
