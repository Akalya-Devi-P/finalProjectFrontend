import { Link } from "react-router-dom";

function App()
{
  return <>
    <h1>Home</h1>
    <Link to= '/display'>Display</Link> | {"  "}
    <Link to= '/register'>Register</Link>
  </>
}
export default App