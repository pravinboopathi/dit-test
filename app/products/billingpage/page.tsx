"use client";

import { useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function BillingPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    if (!name || !price || !quantity) return;
    setItems([...items, { id: Date.now(), name, price: parseFloat(price), quantity: parseInt(quantity) }]);
    setName("");
    setPrice("");
    setQuantity("");
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Billing Software</h2>
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="Item Name" className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Price" className="border p-2 w-1/4" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Qty" className="border p-2 w-1/4" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Item</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">${item.price.toFixed(2)}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="border p-2">
                <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4 text-xl font-bold">Total: ${totalAmount.toFixed(2)}</div>
    </div>
  );
}
