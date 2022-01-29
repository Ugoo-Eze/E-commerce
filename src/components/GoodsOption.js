import './../styles/GoodsOption.css';

function GoodsOption({ Icon, text }) {
    return (
        <div className="goodsOption">
            <Icon/>
            <h3>{text}</h3>
        </div>
    )
}

export default GoodsOption
