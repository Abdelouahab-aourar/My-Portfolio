import Header from "./Header"
import Card from "./Card"
function App() {
  return (
    <>
      <div className="flex items-center  mx-[0.5vw]">
        <Header title="AOURAR ABDELOUAHAB" subtitle="AI STUDENT" className="text-left pl-[1vw]" lengths="w-[40vw] mr-[0.5vw]" />
        <Header title="AVAILABLE COMMANDS" subtitle="help | about | projects | skills | education | contact" lengths="w-[60vw]" />
      </div>
      <div className="flex items-center  mx-[0.5vw]">
        <Card/>
        <div className="box h-[81vh] w-[60vw]"></div>
      </div>
    </>
  )
}

export default App
