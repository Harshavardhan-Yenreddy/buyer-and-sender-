import { useState, useRef } from 'react'
import FormInput from '../components/FormInput'
import CheckboxGroup from '../components/CheckboxGroup'

const inputClass =
  'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-sm bg-white'

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const UploadIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 4v16M8 12l8-8 8 8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 24v2a2 2 0 002 2h20a2 2 0 002-2v-2" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const industryCategories = [
  'Food & Beverage', 'Health & Wellness', 'Education', 'Retail',
  'Automobile', 'Business Services', 'Travel & Tourism', 'Sports & Fitness',
  'Fashion', 'Technology',
]

const supportOptions = ['Initial Training', 'Ongoing Support', 'Marketing', 'Operations Manual']

export default function FranchisorForm() {
  const [form, setForm] = useState({
    brandName: '', companyLegal: '', industryCategory: '', website: '',
    initialInvestment: '', franchiseFee: '', expectedROI: '',
    unitsOp: '', citiesOp: '', usp: '',
    support: [],
    contactName: '', contactEmail: '', contactPhone: '',
    logo: null, visuals: [],
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const logoRef = useRef()
  const visualRef = useRef()

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.brandName.trim()) e.brandName = 'Required'
    if (!form.companyLegal.trim()) e.companyLegal = 'Required'
    if (!form.industryCategory) e.industryCategory = 'Required'
    if (!form.initialInvestment) e.initialInvestment = 'Required'
    if (!form.franchiseFee) e.franchiseFee = 'Required'
    if (!form.expectedROI) e.expectedROI = 'Required'
    if (!form.citiesOp.trim()) e.citiesOp = 'Required'
    if (form.support.length === 0) e.support = 'Select at least one'
    if (!form.contactName.trim()) e.contactName = 'Required'
    if (!form.contactEmail.trim()) e.contactEmail = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) e.contactEmail = 'Invalid email'
    if (!form.contactPhone.trim()) e.contactPhone = 'Required'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length === 0) {
      console.log('Franchisor Form Data:', form)
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-24">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16l5 5 11-11" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Franchise Listed Successfully!</h3>
        <p className="text-gray-500 text-sm mb-6">Our team will review and get back to you.</p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
        >
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-6 px-8 py-6">

      {/* Company Info */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Company Information</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <FormInput label="Brand Name" required error={errors.brandName}>
            <input className={inputClass} placeholder="Enter name" value={form.brandName} onChange={set('brandName')} />
          </FormInput>
          <FormInput label="Company Legal Name" required error={errors.companyLegal}>
            <input className={inputClass} placeholder="Enter name" value={form.companyLegal} onChange={set('companyLegal')} />
          </FormInput>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="Industry Category" required error={errors.industryCategory}>
            <div className="relative">
              <select className={inputClass + ' appearance-none pr-8'} value={form.industryCategory} onChange={set('industryCategory')}>
                <option value="">Select Industry</option>
                {industryCategories.map((o) => <option key={o}>{o}</option>)}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown /></span>
            </div>
          </FormInput>
          <FormInput label="Company Website">
            <input className={inputClass} placeholder="Website url" value={form.website} onChange={set('website')} />
          </FormInput>
        </div>
      </div>

      {/* Financial */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Financial Details</p>
        <div className="grid grid-cols-3 gap-4">
          <FormInput label="Initial Investment (₹)" required error={errors.initialInvestment}>
            <input type="number" className={inputClass} value={form.initialInvestment} onChange={set('initialInvestment')} />
          </FormInput>
          <FormInput label="Franchise Fee (₹)" required error={errors.franchiseFee}>
            <input type="number" className={inputClass} value={form.franchiseFee} onChange={set('franchiseFee')} />
          </FormInput>
          <FormInput label="Expected ROI (%)" required error={errors.expectedROI}>
            <input type="number" className={inputClass} value={form.expectedROI} onChange={set('expectedROI')} />
          </FormInput>
        </div>
      </div>

      {/* Operations */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Operations</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <FormInput label="Units in Operation">
            <input type="number" className={inputClass} value={form.unitsOp} onChange={set('unitsOp')} />
          </FormInput>
          <FormInput label="Cities of Operation" required error={errors.citiesOp}>
            <input className={inputClass} placeholder="Type City names" value={form.citiesOp} onChange={set('citiesOp')} />
          </FormInput>
        </div>
        <FormInput label="Unique Selling Proposition (USP)">
          <textarea className={inputClass + ' resize-none h-24'} value={form.usp} onChange={set('usp')} />
        </FormInput>
      </div>

      {/* Support & Training */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Support &amp; Training Provided <span className="text-red-500">*</span>
        </label>
        {errors.support && <p className="text-red-500 text-xs mb-2">{errors.support}</p>}
        <CheckboxGroup
          options={supportOptions}
          selected={form.support}
          onChange={(val) => setForm((f) => ({ ...f, support: val }))}
        />
      </div>

      {/* Contact */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Contact Information</p>
        <div className="grid grid-cols-3 gap-4">
          <FormInput label="Contact Person Name" required error={errors.contactName}>
            <input className={inputClass} value={form.contactName} onChange={set('contactName')} />
          </FormInput>
          <FormInput label="Contact Email" required error={errors.contactEmail}>
            <input className={inputClass} value={form.contactEmail} onChange={set('contactEmail')} />
          </FormInput>
          <FormInput label="Contact Phone" required error={errors.contactPhone}>
            <input className={inputClass} value={form.contactPhone} onChange={set('contactPhone')} />
          </FormInput>
        </div>
      </div>

      {/* Logo Upload */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Logo</p>
        <div
          className="border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center cursor-pointer hover:border-indigo-400 transition-colors"
          onClick={() => logoRef.current.click()}
        >
          <UploadIcon />
          <p className="text-sm font-semibold text-gray-700 mt-3 mb-1">Upload Image</p>
          <p className="text-xs text-gray-400 mb-3">Total size: 5-10 MB</p>
          {form.logo && <p className="text-xs text-indigo-600 mb-2">{form.logo.name}</p>}
          <button
            type="button"
            className="px-4 py-1.5 border border-indigo-400 text-indigo-600 rounded-lg text-xs font-medium hover:bg-indigo-50"
            onClick={(e) => { e.stopPropagation(); logoRef.current.click() }}
          >
            Choose Files
          </button>
          <input
            ref={logoRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setForm((f) => ({ ...f, logo: e.target.files[0] }))}
          />
        </div>
      </div>

      {/* Visual Reference */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Visual Reference</p>
        <div
          className="border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center cursor-pointer hover:border-indigo-400 transition-colors"
          onClick={() => visualRef.current.click()}
        >
          <UploadIcon />
          <p className="text-sm font-semibold text-gray-700 mt-3 mb-1">Upload 5-10 Images</p>
          <p className="text-xs text-gray-400 mb-3">Total size: 5-10 MB</p>
          {form.visuals.length > 0 && (
            <p className="text-xs text-indigo-600 mb-2">{form.visuals.length} file(s) selected</p>
          )}
          <button
            type="button"
            className="px-4 py-1.5 border border-indigo-400 text-indigo-600 rounded-lg text-xs font-medium hover:bg-indigo-50"
            onClick={(e) => { e.stopPropagation(); visualRef.current.click() }}
          >
            Choose Files
          </button>
          <input
            ref={visualRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setForm((f) => ({ ...f, visuals: Array.from(e.target.files) }))}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl font-semibold text-white text-sm shadow-md transition-all hover:opacity-90"
        style={{ background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)' }}
      >
        Submit Registartion
      </button>
    </form>
  )
}
