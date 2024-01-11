const ButtonConatainer = () => {
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
        <div className="buttonsContainer">
            {ButtonNames.map((buttonName, index) => (
                <button key={index} className="text-button">{buttonName}</button>
            ))}
        </div>
    )

}
export default ButtonConatainer;