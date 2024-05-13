function shoppingList(commands) {
    let stores = {};

    for (let command of commands) {
        if (command === "Go Shopping") {
            break;
        }

        if (command) {
            let parts = command.split("->");
            if (parts.length < 3) {
                console.log(`Invalid command: ${command}`);
                continue;
            }
            let action = parts[0];
            let store = parts[1];
            let items = parts.slice(2).join("->").split(",");

            if (action === "Add") {
                if (!(store in stores)) {
                    stores[store] = [];
                }
                for (let item of items) {
                    if (!stores[store].includes(item)) {
                        stores[store].push(item);
                    }
                }
            } else if (action === "Important") {
                if (!(store in stores)) {
                    stores[store] = [];
                }
                for (let item of items) {
                    if (!stores[store].includes(item)) {
                        stores[store].unshift(item);
                    }
                }
            }
        }
    }

    for (let store in stores) {
        console.log(`${store}:`);
        for (let item of stores[store]) {
            console.log(` - ${item}`);
        }
    }
}

shoppingList([
    "Add->Peak->Batteries,Umbrella",
    "Add->Groceries->Water,Juice,Food",
    "Add->Peak->Tent",
    "Important->Groceries->Batteries",
    "Go Shopping"
]);
