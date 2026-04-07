import { useState } from 'react'
import FormInput from '../components/FormInput'
import CheckboxGroup from '../components/CheckboxGroup'

const inputClass =
  'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 shadow-sm bg-white'

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const industries = [
  'Food & Beverage',
  'Health, Beauty & Wellness',
  'Education & Training',
  'Retail',
  'Automobile',
  'Business Services',
  'Hotel, Travel & Tourism',
  'Sports, Fitness & Entertainment',
  'Fashion',
  'Home Based Business',
]

const experienceOptions = [
  'No Experience',
  'Less than 1 year',
  '1-3 years',
  '3-5 years',
  '5+ years',
]

export default function BuyerForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    preferredLocations: '', industries: [],
    minBudget: '', maxBudget: '',
    businessExp: '', franchiseExp: '', comments: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim()) e.phone = 'Required'
    else if (!/^\d{7,15}$/.test(form.phone.replace(/[\s\-+()]/g, ''))) e.phone = 'Invalid phone'
    if (!form.preferredLocations.trim()) e.preferredLocations = 'Required'
    if (!form.minBudget) e.minBudget = 'Required'
    if (!form.maxBudget) e.maxBudget = 'Required'
    if (!form.businessExp) e.businessExp = 'Required'
    if (!form.franchiseExp) e.franchiseExp = 'Required'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length === 0) {
      console.log('Buyer Form Data:', form)
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
        <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
        <p className="text-gray-500 text-sm mb-6">We'll reach out to you soon.</p>
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
    <form onSubmit={submit} className="space-y-5 px-8 py-6">

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="First Name" required error={errors.firstName}>
          <input className={inputClass} placeholder="Enter name" value={form.firstName} onChange={set('firstName')} />
        </FormInput>
        <FormInput label="Last Name" required error={errors.lastName}>
          <input className={inputClass} placeholder="Enter name" value={form.lastName} onChange={set('lastName')} />
        </FormInput>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="Email Address" required error={errors.email}>
          <input className={inputClass} placeholder="Enter email address" value={form.email} onChange={set('email')} />
        </FormInput>
        <FormInput label="Phone Number" required error={errors.phone}>
          <input className={inputClass} placeholder="Enter phone number" value={form.phone} onChange={set('phone')} />
        </FormInput>
      </div>

      {/* Location */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Location &amp; Interests</p>
        <FormInput label="Preferred Location(s)" required error={errors.preferredLocations}>
          <div className="relative">
            <input
              className={inputClass + ' pr-8'}
              placeholder="Type City names"
              value={form.preferredLocations}
              onChange={set('preferredLocations')}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown />
            </span>
          </div>
        </FormInput>
      </div>

      {/* Industry Interests */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry Interests <span className="text-red-500">*</span>
        </label>
        <CheckboxGroup
          options={industries}
          selected={form.industries}
          onChange={(val) => setForm((f) => ({ ...f, industries: val }))}
        />
      </div>

      {/* Budget */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Budget &amp; Experience</p>
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="Minimum Budget (₹)" required error={errors.minBudget}>
            <input type="number" className={inputClass} value={form.minBudget} onChange={set('minBudget')} />
          </FormInput>
          <FormInput label="Maximum Budget (₹)" required error={errors.maxBudget}>
            <input type="number" className={inputClass} value={form.maxBudget} onChange={set('maxBudget')} />
          </FormInput>
        </div>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="Business Experience" required error={errors.businessExp}>
          <div className="relative">
            <select className={inputClass + ' appearance-none pr-8'} value={form.businessExp} onChange={set('businessExp')}>
              <option value="">Select Experience</option>
              {experienceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown /></span>
          </div>
        </FormInput>
        <FormInput label="Franchise Experience" required error={errors.franchiseExp}>
          <div className="relative">
            <select className={inputClass + ' appearance-none pr-8'} value={form.franchiseExp} onChange={set('franchiseExp')}>
              <option value="">Select Experience</option>
              {experienceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown /></span>
          </div>
        </FormInput>
      </div>

      {/* Comments */}
      <FormInput label="Additional Comments">
        <textarea
          className={inputClass + ' resize-none h-28'}
          maxLength={500}
          value={form.comments}
          onChange={set('comments')}
        />
        <p className="text-xs text-gray-400 mt-1">Max 500 characters</p>
      </FormInput>

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
