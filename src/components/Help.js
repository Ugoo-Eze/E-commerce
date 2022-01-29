import { Button } from '@material-ui/core';
import '../styles/Help.css';

function Help({ trigger }) {
    return (trigger) ? (
        <div className="help">
            <div className='help__divs'>
                <h5>Help Center</h5>
            </div>
            <div className='help__divs'>
                <h5>Place & track oders</h5>
            </div>
            <div className='help__divs'>
                <h5>Order cancellation</h5>
            </div>
            <div className='help__divs'>
                <h5>Return & Refunds</h5>
            </div>
            <div className='help__divs'>
                <h5>Payment & Jumia account</h5>
            </div>
            <div className="help__button">
                <Button>
                    Live Center
                </Button>
            </div>
        </div>
    ) : '';
}

export default Help
