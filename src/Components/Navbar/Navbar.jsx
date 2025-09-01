import { useLocation, Link } from "react-router";
import resume_imge from "./Image.jpg";
import cubing_image from "./cubing.png";
import linkedin_image from "./linkedin.png";
import profile_image from "./profile.jpg";

const Navbar = (props)=>{

    const location1 = useLocation();

    console.log(location1.pathname);

    const selectedClass = "block my-1 py-2 mx-12 text-white border-double border-b-2 font-bold";
    const notSelectedClass =
      "block my-1 py-2 mx-12 text-gray-300 rounded hover:text-white";

    return (
        <div className="text-xl">
            <ul className="flex flex-col text-white justify-evenly content-center text-center">
                {/* <h1 className="text-3xl">
                    Tejas Ajay Parse
                </h1> */}
                <div className="border-2 border-white p-2 mb-6 m-12 rounded-full aspect-square bg-light-brown-bg">
                    { location1.pathname === "/SpeedCubing" && <img src={profile_image} alt="Profile" className="rounded-full aspect-square" /> }
                    { location1.pathname !== "/SpeedCubing" && <img src={profile_image} alt="Profile" className="rounded-full aspect-square" /> }
                    
                </div>

                <Link to={"/"} className={`${location1.pathname === "/" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    About Me
                </Link>
                <Link to={"/Education"} className={`${location1.pathname === "/Education" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Education
                </Link>
                <Link to={"/Experience"} className={`${location1.pathname === "/Experience" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Experience
                </Link>
                <Link to={"/Projects"} className={`${location1.pathname === "/Projects" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    My Projects
                </Link>
                <Link to={"/Skills"} className={`${location1.pathname === "/Skills" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Skills & Achievements
                </Link>
                <Link to={"/Leadership"} className={`${location1.pathname === "/Leadership" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Leadership Positions
                </Link>
                
                <Link to={"/Resume"} className={`${location1.pathname === "/Resume" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Resume
                </Link>
                <Link to={"/SpeedCubing"} className={`${location1.pathname === "/SpeedCubing" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
                    Speed Cubing
                </Link>

            </ul>
        </div>
        // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        // <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //     <a href="#" className="flex items-center">
        //         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tejas Parse</span>
        //     </a>
        //     <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        //     <span className="sr-only">Open main menu</span>
        //     <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        //     </button>
        //     <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            // <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            //     <Link to={"/"} className={`${location1.pathname == "/" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         About Me
            //     </Link>
            //     <Link to={"/Education"} className={`${location1.pathname == "/Education" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         Education
            //     </Link>
            //     <Link to={"/Skills"} className={`${location1.pathname == "/Skills" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         Skills
            //     </Link>
            //     <Link to={"/Experience"} className={`${location1.pathname == "/Experience" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         Experience
            //     </Link>
            //     <Link to={"/Achievements"} className={`${location1.pathname == "/Achievements" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         Achievements
            //     </Link>
            //     <Link to={"/Projects"} className={`${location1.pathname == "/Projects" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         My Projects
            //     </Link>
            //     <Link to={"/Resume"} className={`${location1.pathname == "/Resume" ? selectedClass : notSelectedClass}`} style={{textDecoration:"none"}}>
            //         Resume
            //     </Link>

            // </ul>
        //     </div>
        // </div>
        // </nav>


    )

};

export default Navbar;