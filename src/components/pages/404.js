import {Link} from 'react-router-dom';
import img from '../pages/404.gif';

const Page404 = () => {
    return (
        <div>
            {/* <ErrorMessage/> */}
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <img src={img} alt="404" style={{'display': 'block', 'width': '450px', 'height': '450px', 'objectFit': 'contain', 'margin': '0px auto'}}/>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;