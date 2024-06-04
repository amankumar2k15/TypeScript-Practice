import MyButton from './components/MyButton'
import MyButton1 from './components/MyButton1'
import Counter from './components/Counter'
import FormEvent from './components/FormEvent'
import CounterContextValue from './components/CounterContextValue'

function App() {

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column", width: "200px" }}>
      {/* <MyButton onClickk={() => alert("Hey i am click me")} text="Click me" />
      <MyButton text="Click me" />
      <MyButton text={1} />
      <MyButton text={false} />
      <MyButton1 text="Click me again">
        <span>Aman it is nested in props</span>
      </MyButton1> */}

      {/* <Counter /> */}

      {/* <FormEvent /> */}

      <CounterContextValue />
    </div>
  )
}

export default App
