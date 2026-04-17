// src/Pages/home.jsx
import { useState } from 'react';
import UserItem from '../Components/UserItem';

function Home() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  // CRUD İşlemleri 
  const addUser = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    const newUser = { ...formData, id: Date.now(), active: true };
    setUsers([newUser, ...users]);
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  const deleteUser = (id) => setUsers(users.filter(u => u.id !== id));

  const toggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, active: !u.active } : u));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mor Hero Bölümü */}
      <div className="bg-indigo-600 text-white py-12 px-6 shadow-lg mb-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-black flex justify-center items-center gap-3">
            🚀 Modern CRUD Uygulaması
          </h1>
          <p className="mt-2 opacity-80">React & Tailwind CSS ile Gelişmiş Arayüz</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* İstatistik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-indigo-500">
            <div className="text-3xl font-black text-indigo-600">{users.length}</div>
            <div className="text-gray-500 font-medium">Toplam Kullanıcı</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-green-500">
            <div className="text-3xl font-black text-green-600">{users.filter(u => u.active).length}</div>
            <div className="text-gray-500 font-medium">Aktif Kullanıcı</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-red-500">
            <div className="text-3xl font-black text-red-600">{users.filter(u => !u.active).length}</div>
            <div className="text-gray-500 font-medium">Pasif Kullanıcı</div>
          </div>
        </div>

        {/* Form Bölümü */}
        <div className="bg-white p-8 rounded-3xl shadow-sm mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
            ➕ Yeni Kullanıcı Ekle
          </h2>
          <form onSubmit={addUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              placeholder="Ad Soyad *" 
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              placeholder="Email *" 
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input 
              placeholder="Telefon" 
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <input 
              placeholder="Şirket" 
              className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
            <button className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95">
              Kullanıcıyı Kaydet
            </button>
          </form>
        </div>

        {/* Liste Bölümü */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          👥 Kullanıcı Listesi
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {users.map(user => (
            <UserItem 
              key={user.id} 
              user={user} 
              deleteUser={deleteUser} 
              toggleStatus={toggleStatus} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;