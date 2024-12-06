import './App.css'

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, value, onChange }) => (
  <div className='app-main-form-container'>
    <form className='app-main-form' onSubmit={() => console.log("submit")}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="submit">
        Send
      </button>
    </form>
  </div>
);

function App() {

  return (
    <main>
      <TextInput
        placeholder="Type something..."
        value="Hello, World!"
        onChange={(e) => console.log(e.target.value)} />
    </main>
  )
}

export default App
