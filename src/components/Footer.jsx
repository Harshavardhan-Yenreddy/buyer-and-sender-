const socialIcons = [
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 4a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    )
  },
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13 3h4v4h-3c-1 0-1 1-1 1v2h4l-1 4h-3v7h-4v-7H7v-4h2V7c0-3 2-4 4-4z"/>
      </svg>
    )
  },
  {
    label: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.6.7-2.4.9A3.6 3.6 0 0016 4c-2 0-3.6 1.6-3.6 3.6 0 .3 0 .6.1.8-3-.2-5.6-1.6-7.4-3.8-.3.5-.5 1.1-.5 1.7 0 1.2.6 2.3 1.6 2.9-.6 0-1.2-.2-1.7-.5 0 1.7 1.2 3.2 2.8 3.5-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.4 1.9 2.5 3.6 2.5A7.2 7.2 0 012 19.5 10.1 10.1 0 007.5 21c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.2 1.8-2z"/>
      </svg>
    )
  },
  {
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23 7s-.2-1.7-.8-2.5c-.7-.9-1.5-.9-1.9-1C17.8 3 12 3 12 3s-5.8 0-8.3.5c-.4 0-1.2.1-1.9 1C1.2 5.3 1 7 1 7S1 8.7 1 10.3v1.4C1 13.3 1 15 1 15s.2 1.7.8 2.5c.7.9 1.6.9 2 .9 1.5.1 6.2.5 8.2.5s5.8 0 8.3-.5c.4 0 1.2-.1 1.9-1 .6-.8.8-2.5.8-2.5s.1-1.7.1-3.3v-1.4C23.1 8.7 23 7 23 7zM10 14V8l5 3-5 3z"/>
      </svg>
    )
  },
  {
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4 3a2 2 0 110 4 2 2 0 010-4zM2 9h4v12H2zM9 9h4v2h.1c.6-1 2-2.1 4-2.1 4.3 0 5 2.8 5 6.4V21h-4v-5.4c0-1.3 0-3-1.9-3-2 0-2.3 1.5-2.3 2.9V21H9z"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 px-8 md:px-16">

      <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">

        {/* LEFT */}
        <div className="max-w-xs">
          <img src="/logo.png" alt="lemici" className="h-10 mb-2" />

          <p className="text-teal-500 text-xs mb-4">
            Bengaluru | Mumbai | Hyderabad | Gurgaon
          </p>

          <h3 className="text-xl font-semibold text-teal-600 mb-4">
            Don’t be a Stranger
          </h3>

          <p className="text-yellow-500 text-xs font-semibold">Newsletter</p>
          <p className="text-teal-500 text-sm font-semibold">Stay in the loop</p>
          <p className="text-gray-800 text-xs mb-2">Subscribe</p>

          <p className="text-gray-400 text-xs mb-3">
            Select topics and stay current with our latest insights
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-3 py-2 text-xs w-full"
            />
            <button className="bg-purple-700 hover:bg-purple-800 text-white text-xs px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">

          {/* ICONS */}
          <div className="flex justify-end gap-3 mb-6">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                className="w-9 h-9 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center"
              >
                <div className="text-purple-600">{s.svg}</div>
              </a>
            ))}
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-500">

            <div>
              <p className="font-semibold text-sm text-gray-800 mb-3">Offerings</p>
              <ul className="space-y-2">
                <li>Startup Zone</li>
                <li>Franchise Zone</li>
                <li>Software Hunt</li>
                <li>Business Directory</li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <ul className="space-y-2">
                <li>Government Navigator</li>
                <li>Market & Industry Research</li>
                <li>eB2B Marketplace</li>
                <li>Industry Solution</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm text-gray-800 mb-3">Connect</p>
              <ul className="space-y-2">
                <li>Contact</li>
                <li>Careers</li>
                <li>About Us</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-sm text-gray-800 mb-3">Discover</p>
              <ul className="space-y-2">
                <li>Experts</li>
                <li>Associations</li>
                <li>Events</li>
                <li>Professionals</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
        <p>Copyright © 2025 LeMiCi. All rights reserved.</p>

        <div className="flex flex-wrap gap-4">
          <span>FAQ</span>
          <span>Privacy Policy</span>
          <span>Cookie preferences</span>
          <span>Local Language information</span>
          <span>Term of Use</span>
          <span>Accessibility Statement</span>
        </div>
      </div>

    </footer>
  );
}