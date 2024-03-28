import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Task({id, text, status, deleteTask, updateTask, modifyTask}) {

    const [idTask, setIdTask] = useState(id);
    const [state, setState] = useState(status);
    const [content, setContent] = useState(text);
    const [mod, setMod] = useState(false);
    const [dateVisibility, setDateVisibility] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [datePickerClass, setDatePickerClass] = useState("calendar hidden");

    const handleCheck = () => {
        setState(!state);
        updateTask(idTask, state, endDate);
    }

    const handleChange = (event) => {
        setContent(event.target.value);
    }

    const handleMofidy = () => {
        setMod(!mod);
        if (!mod){
            modifyTask(idTask, content);
        }
    }

    const handleDelete = () => {
        deleteTask(idTask);
    }

    const handleDatePick = (date) => {
        setEndDate(date);
        modifyTask(idTask, content, endDate);
    }

    const handleDatePickerVisibility = () => {
        setDateVisibility(!dateVisibility);
        if (!dateVisibility){
            setDatePickerClass(datePickerClass + "hidden");
        }
        else {
            setDatePickerClass(datePickerClass.replace("hidden", ""));
        }
    }

    const MainTaskElement = () => {
        let name = "task-content";
        if (state){
            name = name + " complete";
        }
        
        if (mod){
            return (<input className={name} type="text" value={content} onChange={handleChange}></input>);
        }
        else {
            return (<p className={name}>{content}</p>);
        }
    }

    // Problème avec input -> Seulement un caratère peut etre ajouté à la fois. Dès que 
    // qu'il est ajouté l'input n'est plus sélectionné
    return ( 
        <div className="task">
            <div className="task-item">
                <div className="infos">
                    <input className="task-check" type="checkbox" checked={state} onChange={handleCheck}></input>
                    <MainTaskElement/>
                </div>
                <div className="task-operators">
                    <button className="calendar-shower" onClick={handleDatePickerVisibility}><img src="./src/assets/calendar-icon-white.png" alt="Date"></img></button>
                    <button className="task-modifier" onClick={handleMofidy}><img src="./src/assets/modify-icon-white.png" alt="Modifier"></img></button>
                    <button className="task-deleter" onClick={handleDelete}><img src="./src/assets/delete-icon-white.png" alt="Supprimer"></img></button>
                </div>
            </div>
            <div  className={datePickerClass}>
                <DatePicker selected={endDate} onChange={handleDatePick} />
            </div>
        </div>
     );

}

export default Task;