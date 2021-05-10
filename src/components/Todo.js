import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

    const { title, description } = todo;

    return (
        <div>
            <p>{title}</p>
            <p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })
                    }
                />
            </p>
            <p>
                <textarea
                    name="todo"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value,
                        })
                    }
                />
            </p>
        </div>
    );
}

export default Todo;
