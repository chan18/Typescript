



type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;


// partial


interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}


const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

// partial props, like optional fields.
const todo2 = {
    description: "throw out trash",
};




// required

interface Props {
    a?: number;
    b?: string; // i made this optional, so it will throw error in Required.
}

const obj: Props = { a: 5 };

const obj2:  Required<Props> = { a: 5 }; // error


// readonly

interface Todo1 {
    title: string
}

const todo: Readonly<Todo1> = {
    title: "Delete inactive users",
};

todo.title = "Hello"; // can't update since it is readonly.



// record

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

// key value pair,
// map props of a type to another type.
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Marine Coon" },
    mordred: { age: 15, breed: "British Shorthair" },
};

cats.boris;


// pick 

interface TodoPick {
    title: string,
    description: string,
    completed: boolean,
}


// pick set of props from a type
type TodoPreview = Pick<TodoPick, "title" | "completed">;


const todoPick: TodoPreview = {
    title: "Clean room",
    completed: false,
};

todoPick;



// omit

interface TodoOmit {
    title: string,
    description: string,
    completed: boolean,
    createdAt: number,
}

type TodoPreviewOmit = Omit<TodoOmit, "description">;

const todoOmit: TodoPreviewOmit = {
    title: "Clean room",
    completed: false,
    createdAt: 123123123,
};

todoOmit;

type TodoInfo = Omit<Todo, "completed" | "createdAT">;

const todoinfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
};

todoinfo;


// exclude

type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), Function>;

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>




// extract

// non nullable

// parameters

// constructor parameters

// return type

// instance type

// no infer

// this paramter type

// omit this paramter

// this type



// interinsic string manipulation types

Uppsercase<stringtype>

Lowercase<stringtype>

Capitalize<stringtype>

Uncapitalze<stringtype>


