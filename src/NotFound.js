import { Link } from "react-router-dom"

const NotFound = () => {
   return (
      <div className="not-found">
         <h2 style={{
            color: "#f1356d",
            marginBottom: "20px"
         }}>Sorry</h2>
         <p>This page cannot be found, please <Link to="/" style={{
            color: "#f1356d"
         }}>go back to the Home Page</Link></p>
      </div>
   );
}
 
export default NotFound;