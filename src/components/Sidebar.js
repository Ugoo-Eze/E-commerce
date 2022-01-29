import '../styles/Sidebar.css';
import SidebarOption from './../components/SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption Icon={HomeOutlinedIcon} text='Home Page'/>
            <SidebarOption Icon={HomeWorkOutlinedIcon} text='Office'/>
            <SidebarOption Icon={FitnessCenterOutlinedIcon} text='Health & Fitness'/>
            <SidebarOption Icon={PhoneAndroidOutlinedIcon} text='Phones & Tablets'/>
            <SidebarOption Icon={ComputerOutlinedIcon} text='Computers'/>
            <SidebarOption Icon={LiveTvOutlinedIcon} text='Electronics'/>
            <SidebarOption Icon={FavoriteBorderOutlinedIcon} text='Favourites'/>
            <SidebarOption Icon={DriveEtaOutlinedIcon} text='Auto mobile'/>
            <SidebarOption Icon={SportsEsportsOutlinedIcon} text='Gaming'/>
            <SidebarOption Icon={ChildCareOutlinedIcon} text='Baby Products'/>
            <SidebarOption Icon={DeveloperModeOutlinedIcon} text='DeveloperMood'/>
            <SidebarOption Icon={MoreHorizOutlinedIcon} text='Other Categories...'/>
        </div>
    )
}

export default Sidebar
