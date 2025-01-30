import {Link} from "react-router";

function HomeScreen() {
        return (
            <div>
                <h1>Get to know all our champions</h1>
                <p>Click on your favorite champion and see what they have accomplished in their career</p>
                <Link to={'/champions'}>Go to list</Link>
            </div>

        )
    }

    export default HomeScreen