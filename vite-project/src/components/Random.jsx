function Random() {
    let number = Math.random() * 1000;
    return <h3>Random Number Generator : {Math.round(number)}</h3>;
}
export default Random;