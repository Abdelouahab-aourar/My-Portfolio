import github from "./assets/github.svg"
import instagram from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"
import logo from "./assets/logo.png"
function Card(){
    return(
    <>
        <div className="box w-80 items-center">
            <div className="box rounded-full"><img src={logo} alt="My Logo" className="w-40"/></div>
            <h1 className="text-[#00FE00]">CONTACT ME</h1>
            <div className="flex items-center justify-center gap-x-6">
                <a href="https://github.com/Abdelouahab-aourar" target="_blank"><img src={github} className="w-12"/></a>
                <a href="https://www.instagram.com/abdelouahab_aourar/profilecard/?igsh=NnpmNGJ5b3M0YXhi" target="_blank"><img src={instagram} className="w-12"/></a>
                <a href="https://www.linkedin.com/in/aourar-abdelouahab" target="_blank"><img src={linkedin} className="w-12"/></a>
            </div>
        </div>
        
    </>
    );
}
export default Card;