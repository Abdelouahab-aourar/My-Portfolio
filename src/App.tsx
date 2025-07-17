import Header from "./Header"
import Card from "./Card"
function App() {
  return (
    <>
      <div className="flex items-center  mx-[0.5vw]">
        <Header title="AOURAR ABDELOUAHAB" subtitle="AI STUDENT" className="text-left pl-[1vw]" lengths="w-[40vw] mr-[0.5vw]" />
        <Header title="AVAILABLE COMMANDS" subtitle="help | about | projects | skills | education | contact" lengths="w-[60vw]" />
      </div>
      <Card/>
    </>
  )
}

export default App
