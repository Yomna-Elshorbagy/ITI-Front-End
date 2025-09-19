const { addTodo, listTodos, updateTodo, deleteTodo } = require("./js/controllers");

const [, , command, ...args] = process.argv;

if (command) {
    switch (command.toLowerCase()) {

        case 'add':
            addTodo(args);
            break;

        case 'list':
            listTodos(args);
            break;

        case 'update':
            updateTodo(args)
            break;

        case 'delete':
            deleteTodo(args)
            break;

        default:
            console.log('⚠️ Unkown Command !!!!!');

            break;
    }

} else {
    console.log("please use a valid format `node index [command] [...arguments]`")
}



