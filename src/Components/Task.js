import "../Style/task.scss";
import {useState} from "react";

export default function Task(props) {
    const {addTask, deleteTask, moveTask, task} = props;

    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency)
    const [collapsed, setCollapsed] = useState(task.isCollapsed)
    const [formAction, setFormAction] = useState("");

    function setUrgency(event) {
        setUrgencyLevel(event.target.attributes.urgency.value);
    }

    function handleSubmit(event) {
        //TODO
    }

    function handleMoveLeft() {
        //TODO
    }

    function handleMoveRight() {
        //TODO
    }

    return (
        <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
            <button onClick={handleMoveLeft} className="button moveTask">
                &#171;
            </button>
            <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
                <input
                    type="text"
                    className="title input"
                    name="title"
                    placeholder="Enter Title"
                    disabled={collapsed}
                    defaultValue={task.title}
                />
                <textarea
                    rows="2"
                    className="description input"
                    name="description"
                    placeholder="Enter Description"
                    defaultValue={task.description}
                />
                <div className="urgencyLabels">
                    <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
                        <input
                            urgency="low"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                        low
                    </label>
                    <label
                        className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
                    >
                        <input
                            urgency="medium"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                        medium
                    </label>
                    <label
                        className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
                    >
                        <input
                            urgency="high"
                            onChange={setUrgency}
                            type="radio"
                            name="urgency"
                        />
                        high
                    </label>
                </div>
                <button
                    onClick={() => {
                        setFormAction("save");
                    }}
                    className="button"
                >
                    {collapsed ? "Edit" : "Save"}
                </button>
                {collapsed && (
                    <button
                        onClick={() => {
                            setFormAction("delete");
                        }}
                        className="button delete"
                    >
                        X
                    </button>
                )}
            </form>
            <button onClick={handleMoveRight} className="button moveTask">
                &#187;
            </button>
        </div>
    );
}