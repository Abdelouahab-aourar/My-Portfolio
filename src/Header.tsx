interface HeaderProps{
    title: string;
    subtitle: string;
    className?: string;
    lengths?: string;
}
function Header({title, subtitle, className, lengths}: HeaderProps){
    return (
        <div className={`box ${lengths}  h-[15vh] justify-center my-[1vh]`}>
            <h1 className={`${className}`}>{title}</h1>
            <h1 className={`text-[#00FE00] ${className}`}>{subtitle}</h1>
        </div>
    )
}
export default Header;