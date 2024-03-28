import { useState } from "react";

function NewTaskInput({handler}) {
    
    const [content, setContent] = useState("");

    const handleClick = () => {
        handler(content);
    };

    const handleChange = (event) => {
        setContent(event.target.value);
        //alert(content);
    };

    return ( 
        <div className="task-input">
            <button onClick={handleClick}>+</button>
            <input type="text" placeholder="Entrer l'intitulé de la tache" value={content} onChange={handleChange}></input>
        </div>
     );
};

export default NewTaskInput;