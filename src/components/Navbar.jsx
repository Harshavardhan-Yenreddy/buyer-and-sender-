export default function Navbar() {
  return (
    <div className="w-full bg-gray-100 px-4 py-4 sticky top-0 z-50">
      
      {/* CENTERED CONTAINER */}
      <div className="max-w-5xl mx-auto">
        
        <nav className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 h-12 flex items-center justify-between">

          {/* LEFT LOGO */}
          <img
            src="/logo.png"
            alt="lemici"
            className="h-7 w-auto object-contain"
          />

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {['Offering', 'Pricing', 'What we do ?', 'Connect', 'Resources'].map((n) => (
              <a
                key={n}
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-sm"
              >
                {n}
              </a>
            ))}
          </div>

          {/* RIGHT AVATAR */}
          <img
            src="/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />

        </nav>
      </div>
    </div>
  );
}