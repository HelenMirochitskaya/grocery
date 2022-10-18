function Button() {
    const buttonOne = () => {
        console.log ('Hello');
    }
    const buttonTwo = () => {
        console.log ('Bye');
    }
    return (
        <div>
            <button onClick = {buttonOne}> Hello</button>
            <button onClick = {buttonTwo}> Bye</button>
        </div>
    )

}
export default Button;