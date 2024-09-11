
import logo from "../assets/logo.png"

function HeaderContacto() {

    return (
        <nav className="bg-blue-400 fixed w-full z-20 top-0 start-0 border-blue-900 font-aeonik">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src={logo}
                        className="h-8"
                        alt="Bankok logo"
                    />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/login">
                        <button
                            type="button"
                            className="text-header text-white bg-blue-900 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-12 py-2"
                        >
                            Ingresar
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default HeaderContacto;
