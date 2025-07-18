import Header from "./Header"
import Card from "./Card"
import TerminalComponent from "./Terminal"
function App() {
  return (
    <>
      <div className="flex items-center  mx-[0.5vw] max-md:flex-col">
        <Header title="AOURAR ABDELOUAHAB" subtitle="AI STUDENT (ENSIA)" className="text-center" lengths="w-[40vw] mr-[0.5vw] max-md:w-[92vw]" />
        <Header title="AVAILABLE COMMANDS" subtitle="help | about | projects | skills | contact | clear" lengths="w-[60vw] max-md:w-[92vw]" />
      </div>
      <div className="flex items-center  mx-[0.5vw] max-md:flex-col">
        <Card/>
        <div className="box h-[81vh] w-[60vw] p-[10px] pr-[0px] max-md:w-[92vw]">
          <TerminalComponent/>
        </div>
      </div>
    </>
  )
}

export default App
