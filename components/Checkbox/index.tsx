interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <div
      onClick={() => {
        onChange(!checked)
      }}
    >
      <label className="flex items-center">
        <input type="checkbox" checked={checked} className="mr-2" />
        <span>Lembrar</span>
      </label>
    </div>
  )
}

export default Checkbox
