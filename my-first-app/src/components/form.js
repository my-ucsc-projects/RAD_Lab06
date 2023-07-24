import React from "react";

function Form() {
    const [name, setStr] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The string you entered was: ${str}`);
    }

    return (
        <form >
            <label>Enter string:
                <input
                    type="text"
                    value={str}
                    onChange={(e) => setStr(e.target.value)}
                />
            </label>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default Form;
