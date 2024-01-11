const ButtonConatainer = ({onButtonClick}) => {
    const ButtonNames = ["C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    "."];
    

    return (
        <div className="buttons-container">
            {ButtonNames.map((buttonName, index) => (
                <button key={index} className="text-button" onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
            ))}
        </div>
    )

}
export default ButtonConatainer;