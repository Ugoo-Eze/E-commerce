import { Button } from '@material-ui/core';
import '../styles/Account.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { auth } from '../firebase';
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../features/userSlice";
import { useHistory } from 'react-router-dom'

function Account({trigger}) {
    const dispatch = useDispatch();
    const history = useHistory()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogOutState())
            history.push('/')
        }).catch((err) => alert(err.message))
    }

    return (trigger) ? (
        <div className="account">
            <div className="account__button">
                <Button onClick={signOut}>
                    Sign Out
                </Button>
            </div>
            <div className='account__divs'>
                <AccountCircleOutlinedIcon/>
                <h5>My Account</h5>
            </div>
            <div className='account__divs'>
                <StarBorderOutlinedIcon/>
                <h5>Orders</h5>
            </div>
            <div className='account__divs'>
                <FavoriteBorderOutlinedIcon/>
                <h5>Saved Items</h5>
            </div>
        </div>
    ) : '';
}

export default Account
