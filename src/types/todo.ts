import { ReactNode } from "react";

export type Todo = {
    children: ReactNode;
    todoText: string;
    incompletedTodo: string[];
    setTodoText: React.Dispatch<React.SetStateAction<string>>;
    setIncompetedTodo: React.Dispatch<React.SetStateAction<string[]>>;
}