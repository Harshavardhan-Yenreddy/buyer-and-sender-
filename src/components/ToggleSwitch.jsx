export default function ToggleSwitch({ tab, setTab }) {
  return (
    <div className="flex justify-end px-8 pt-6 pb-0">
      <div className="flex border border-gray-200 rounded-full p-1 bg-gray-50">
        <button
          type="button"
          onClick={() => setTab('buyer')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
            tab === 'buyer' ? 'text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
          style={tab === 'buyer' ? { background: 'linear-gradient(90deg,#4f46e5,#6366f1)' } : {}}
        >
          Buyer
        </button>
        <button
          type="button"
          onClick={() => setTab('franchisor')}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
            tab === 'franchisor' ? 'text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
          style={tab === 'franchisor' ? { background: 'linear-gradient(90deg,#4f46e5,#6366f1)' } : {}}
        >
          Franchisor
        </button>
      </div>
    </div>
  )
}
