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
      className="w-1/3"
    >
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>lembrar</span>
      </label>
    </div>
  )
}

export default Checkbox
