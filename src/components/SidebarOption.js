import '../styles/SidebarOption.css';

function SidebarOption({ Icon, text }) {
    return (
        <div className="sidebarOption">
            <Icon/>
            <p>{text}</p>
        </div>
    )
}

export default SidebarOption
