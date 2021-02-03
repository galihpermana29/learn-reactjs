const Navbar = () => {
   return(
      <nav className="navbar">
         <h1>Galih Blog</h1>
         <div className="links">
            <a href="">Home</a>
            {/* inline css using dynamic values sign {} baru didalamnya kirim sebuah js object {{
               stylenya
            }} */}
            <a href="/create" style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               padding: '10px'
            }}>New Blog</a>
         </div>
      </nav>
   )
}


export default Navbar;