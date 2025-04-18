export default function MyButton(){
    function handleClick(){
        alert('You Clicked me!');
    }

    return(
        <button onClick={handleClick}>
            I'm a button
        </button>
    )
}