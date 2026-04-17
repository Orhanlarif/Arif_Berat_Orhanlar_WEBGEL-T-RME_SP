// src/Components/UserItem.jsx
function UserItem({ user, deleteUser, toggleStatus }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start hover:shadow-md transition-shadow">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-indigo-600">{user.name}</h3>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>📧</span> {user.email}
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>📞</span> {user.phone}
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>🏢</span> {user.company}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => deleteUser(user.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-semibold"
        >
          🗑️ Sil
        </button>
        {/* Güncelleme işlemi için durum değiştirme butonu */}
        <button 
          onClick={() => toggleStatus(user.id)}
          className={`${user.active ? 'bg-green-500' : 'bg-gray-400'} text-white px-4 py-2 rounded-lg text-sm font-semibold`}
        >
          {user.active ? 'Aktif' : 'Pasif'}
        </button>
      </div>
    </div>
  );
}

export default UserItem;