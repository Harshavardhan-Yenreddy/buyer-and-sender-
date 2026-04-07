export default function CheckboxGroup({ options, selected, onChange }) {
  const toggle = (opt) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt))
    } else {
      onChange([...selected, opt])
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3 py-2.5 cursor-pointer hover:border-indigo-300 transition-colors"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
            className="w-4 h-4 rounded border-gray-300 accent-indigo-600"
          />
          <span className="text-sm text-gray-600">{opt}</span>
        </label>
      ))}
    </div>
  )
}
