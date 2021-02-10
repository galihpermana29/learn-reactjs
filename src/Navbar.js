import { Link } from "react-router-dom";

// sebagai pengganti anchor tag, kita gunakan tag Link yang mana mengintercept request agar tidak request lagi ke server. Jadi di handle oleh react nya, dan keyword href ganti sama to=""

const Navbar = () => {
   return(
      <nav className="navbar">
         <h1>Galih Blog</h1>
         <div className="links">
            <Link to="/">Home</Link>
            {/* inline css using dynamic values sign {} baru didalamnya kirim sebuah js object {{
               stylenya
            }} */}
            <Link to="/create" style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               padding: '10px'
            }}>New Blog</Link>
         </div>
      </nav>
   )
}


export default Navbar;