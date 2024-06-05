import Body from './Body.js';
import fimg from './themes/gt-footer.png';

export default function NewBody() {
    return (
        <div>
            <div style={{ minHeight:"100vh", marginTop: "10px"}}>
                <Body></Body>
            </div>
            <footer>
                <img src={fimg} alt="Georgia Institute of Technology" className='gt-footer'/>
            </footer>
        </div>
    );
}