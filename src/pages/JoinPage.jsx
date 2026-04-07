import { useState } from 'react'
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'
import ToggleSwitch from '../components/ToggleSwitch'
import BuyerForm from './BuyerForm'
import FranchisorForm from './FranchisorForm'

export default function JoinPage() {
  const [tab, setTab] = useState('buyer')

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex min-h-[700px]">

          {/* Left dark panel */}
          <LeftPanel tab={tab} />

          {/* Right form panel */}
          <div className="flex-1 overflow-y-auto">
            <ToggleSwitch tab={tab} setTab={setTab} />
            {tab === 'buyer' ? <BuyerForm /> : <FranchisorForm />}
          </div>

        </div>
      </div>
    </div>
  )
}
