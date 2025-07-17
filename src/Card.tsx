import github from "./assets/github.svg"
import instagram from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"
import logo from "./assets/logo.png"
function Card(){
    return(
    <>
        <div className="box w-[40vw] h-[81vh] items-center mr-[0.5vw] my-[1vh] justify-center max-md:w-[92vw]">
            <div className="box rounded-full mb-[5vh]"><img src={logo} alt="My Logo" className="w-[20vw] max-md:w-[40vw]"/></div>
            <h1 className="text-[#00FE00] mb-[5vh] text-4xl">CONTACT ME</h1>
            <div className="flex items-center justify-center gap-x-6">
                <a href="https://github.com/Abdelouahab-aourar" target="_blank"><img src={github} className="w-[4vw] transition-transform duration-1000 ease-linear hover:scale-130 max-md:w-[10vw]"/></a>
                <a href="https://www.instagram.com/abdelouahab_aourar/profilecard/?igsh=NnpmNGJ5b3M0YXhi" target="_blank"><img src={instagram} className="w-[4vw] transition-transform duration-1000 ease-linear hover:scale-130 max-md:w-[10vw]"/></a>
                <a href="https://www.linkedin.com/in/aourar-abdelouahab" target="_blank"><img src={linkedin} className="w-[4vw] transition-transform duration-1000 ease-linear hover:scale-130 max-md:w-[10vw]"/></a>
            </div>
        </div>
        
    </>
    );
}
export default Card;