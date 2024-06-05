const Navbar = () =>{
    return(
        <nav className="p-4 fixed w-full">
            <ul className="flex justify-center gap-10 text-lg">
                <li>
                    <a href="#home" className="hover:text-white">Inicio</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-white">Sobre mí</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-white">Proyectos</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-white">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;