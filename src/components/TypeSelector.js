
const TypeSelector = ({ qType,setQtype }) => {

    const changeQuesType = (event) =>{
        let type=parseInt(event.target.value);
        setQtype(type);
    }

    return (
        <div className="col-md-6 offset-md-3 col-12" value={qType} onChange={changeQuesType}>
            <select className="custom-select" value={qType}>
                <option value="0">Select Question Type</option>
                <option value="1">Multi-Select</option>
                <option value="2">Single-Select</option>
            </select>
        </div>
    );
}

export default TypeSelector;