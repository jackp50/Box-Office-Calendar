import { Link } from "react-router-dom"

export default function Header() {
   
   return(
    <>
        <nav className = "header-container">
            <div>
            <h1>Box Office Calendar</h1>
            </div>

            <div className = "header-links">
                <Link to = "/">
                <button className = "header-button">Home</button>
                </Link>

                <Link to = "/about">
                <button className = "header-button">About</button>
                </Link>

                {/* <Link to = "/trending">
                <button className = "header-button">Trending</button>
                </Link> */}
            </div>
            
        </nav>


    </>

   )
    
}