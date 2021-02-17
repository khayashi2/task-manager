import "../styles/task.scss";
import {useState} from "react";

export default function Task(props) {
    const {addTask, deleteTask, moveTask, task} = props;

    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency)
    const [collapsed, setCollapsed] = useState(task.isCollapsed)
    const [formAction, setFormAction] = useState("");
}