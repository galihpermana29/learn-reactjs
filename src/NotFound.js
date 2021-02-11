import { Link } from "react-router-dom"

const NotFound = () => {
   return (
      <div className="not-found">
         <h2>Sorry</h2>
         <p>This page cannot be found, please <Link to="/">go back to the Home Page</Link></p>
      </div>
   );
}
 
export default NotFound;