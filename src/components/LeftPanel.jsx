const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" />
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const features = [
  { title: 'Quick & Easy', sub: 'Simple registration process' },
  { title: 'Verified Opportunities', sub: 'All franchises are verified' },
  { title: 'Expert Support', sub: 'Guidance throughout your journey' },
]

export default function LeftPanel({ tab }) {
  const isBuyer = tab === 'buyer'

  return (
    <div
      className="w-64 flex-shrink-0 flex flex-col justify-between p-8"
      style={{
        background: 'linear-gradient(160deg, #0f0c29 0%, #1a1040 40%, #2d1b69 70%, #3d1a6e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div>
        <h1 className="text-white font-bold text-2xl leading-tight mb-3">
          {isBuyer ? 'Join Our Network' : 'List Your Franchise'}
        </h1>
        <p className="text-purple-200 text-xs leading-relaxed mb-8">
          {isBuyer
            ? 'Find the perfect franchise opportunity that matches your goals and budget.'
            : 'Connect with motivated franchise buyers across India.'}
        </p>
        <div className="space-y-5">
          {features.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">
                <CheckIcon />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-purple-300 text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-purple-400 text-xs relative z-10">Need help? Contact us at lemici.com</p>
    </div>
  )
}
