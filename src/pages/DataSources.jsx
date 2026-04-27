import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const partners = [
  { abbr: 'ACS', label: 'American\nCommunity\nSurvey', color: '#c41230', border: '#c41230' },
  { abbr: 'data axle', label: 'data axle', color: '#222', border: '#222' },
  { abbr: 'BVR', label: 'BVR', color: '#003087', border: '#003087' },
  { abbr: 'IRS', label: 'IRS', color: '#2d5016', border: '#2d5016' },
  { abbr: 'Census', label: 'United States\nCensus Bureau', color: '#003087', border: '#003087' },
  { abbr: 'DOL', label: 'Dept of\nLabor', color: '#c41230', border: '#c41230' },
  { abbr: 'USDA', label: 'USDA', color: '#2d5016', border: '#2d5016' },
]

const circleCards = [
  { label: 'Web and\nMeta data', bg: '#c4b5e8', color: '#5b21b6' },
  { label: 'Public\nSources',   bg: '#99d6d0', color: '#0d7e76' },
  { label: 'Private Data\n& Provider', bg: '#f5d5b8', color: '#c2662d' },
]

const socialIcons = [
  { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Twitter', d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { label: 'YouTube', d: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
  { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]


export default function DataSources() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="text-center pt-20 pb-16 px-4">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#6d28d9' }}>
          Data &amp; Sources
        </h1>
        <p className="text-gray-500 text-base mb-5">
          LeMiCi data is sourced from the top reliable public, private, and web statistics data sets
        </p>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View Sample Data →
        </a>
      </section>

     {/* ── TRUSTED PARTNERS ── */}
<section className="py-12 px-8 bg-white">
  
  <p className="text-center  text-gray-1200 text-sm mb-10 tracking-wide">
  Our Trusted Data Sources & Partners
</p>

  <div className="flex flex-wrap items-center justify-center gap-10 max-w-5xl mx-auto">
    
    <img src="/images/acs.png" alt="American Community Survey" className="h-10 object-contain" />
    
    <img src="/images/data-axle.png" alt="data axle" className="h-10 object-contain" />
    
    <img src="/images/bvr.png" alt="BVR" className="h-10 object-contain" />
    
    <img src="/images/irs.png" alt="IRS" className="h-10 object-contain" />
    
    <img src="/images/census.png" alt="US Census" className="h-10 object-contain" />
    
    <img src="/images/dol.png" alt="Dept of Labor" className="h-10 object-contain" />
    
    <img src="/images/usda.png" alt="USDA" className="h-10 object-contain" />

  </div>
</section>
      {/* ── DATA POINTS ── */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          LeMiCi sources over 1 billion data points from 18+ buisiness operations.
        </h2>
        <p className="text-gray-500 text-sm mb-16 max-w-lg mx-auto leading-relaxed">
          We synthesize raw data points from reliable, diverse sources to generate final
          measurements for our profiles and reports.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {circleCards.map((c) => (
            <div key={c.label}
              className="w-52 h-52 md:w-60 md:h-60 rounded-full flex items-center justify-center text-center font-semibold text-lg leading-snug flex-shrink-0"
              style={{ backgroundColor: c.bg, color: c.color }}>
              <span className="whitespace-pre-line px-4">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── USE OUR DATA ── */}
      <section className="py-16 px-8 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 max-w-xs">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Use Our Data at<br />your Organization
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              Schedule a 1:1 conversation today to learn how to organizations like yours have used
              an API integration to incoporate our data into essential applications, reports, and workflows.
            </p>
            <button className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-5 py-2.5 rounded-md transition-colors font-medium">
              Schedule a Demo
            </button>
          </div>
          <div className="flex-1">
            
              <img src="/images/use-our-data.jpg" alt="Use Our Data"
                   className="w-full rounded-2xl object-cover" style={{maxHeight:'300px'}} />
            
              
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-16 px-8 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1 max-w-sm">
            <p className="text-3xl font-bold text-gray-900 leading-tight mb-5">Our Methodology:</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              More Data, More Reliable Insights
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Build profiles and Reports and Leverage our customers API for infinite data combinations
              gaining un parallel insights that enable confident decisions. Our platform gives you access
              to the most frequently updates granular data so you can research, analyse, and{' '}
              <a href="#" className="text-blue-500 hover:underline">more...</a>
            </p>
          </div>
          <div className="flex-1">
            
              <img src="/images/methodology.jpg" alt="Methodology"
                   className="w-full rounded-2xl object-cover" style={{maxHeight:'300px'}} />
            
            
          </div>
        </div>
      </section>

      {/* ── TAXONOMY ── */}
      <section className="py-16 px-8 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1 max-w-sm">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              Our Taxonomy
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Build profiles and Reports and Leverage our customers API for infinite data combinations
              gaining unparallel insights that enable confident decisions. Our platform gives you access
              to the most frequently updates granular data so you can research, analyse, and{' '}
              <a href="#" className="text-blue-500 hover:underline">more...</a>
            </p>
          </div>
          <div className="flex-1">
            
              <img src="/images/taxonomy.jpg" alt="Taxonomy"
                   className="w-full rounded-2xl object-cover" style={{maxHeight:'300px'}} />
            
            
          </div>
        </div>
      </section>

      {/* ── MOST UP TO DATE ── */}
      <section className="py-16 px-8 md:px-24 bg-white">
        <div className=" flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 max-w-sm">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              The Most Up-to-Date
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Build profiles and Reports and Leverage our customers API for infinite data combinations
              gaining unparallel insights that enable confident decisions. Our platform gives you access
              to the most frequently updates granular data so you can research, analyse, and{' '}
              <a href="#" className="text-blue-500 hover:underline">more...</a>
            </p>
          </div>
          <div className="flex-1">
            
              <img src="/images/uptodate.jpg" alt="Up to Date"
                   className="w-full rounded-2xl object-cover" style={{maxHeight:'300px'}} />
            
            
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="my-16 mx-8 md:mx-24 rounded-2xl overflow-hidden relative">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/cta-bg.jpg')" }} // 👉 PLACEHOLDER IMAGE
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
    
    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
      See how LeMiCi's superior data sources{" "}
      
      , methodology, and taxonomy help you make better business decision.
    </h2>

    <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
      Get Started
    </button>

  </div>
</section>

      <Footer />
    </div>
  )
}