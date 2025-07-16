interface HeaderProps{
    title: string;
    subtitle: string;
    className?: string;
}
function Header(HeaderProps: HeaderProps){
    return (
        <div className="box">
            <h1 className={`${HeaderProps.className}`}>{HeaderProps.title}</h1>
            <h1 className={`text-[#00FE00] ${HeaderProps.className}`}>{HeaderProps.subtitle}</h1>
        </div>
    )
}
export default Header;