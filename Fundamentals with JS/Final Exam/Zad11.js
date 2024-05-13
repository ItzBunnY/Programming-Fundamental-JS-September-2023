function shoppingList(commands) {
    let stores = {};

    for (let command of commands) {
        if (command === "Go Shopping") {
            break;
        }

        let [action, store, ...items] = command.split("->").slice(1);

        if (action === "Add") {
            if (!stores.hasOwnProperty(store)) {
                stores[store] = new Set();
            }
            items.forEach(item => stores[store].add(item));
        } else if (action === "Important") {
            if (!stores.hasOwnProperty(store)) {
                stores[store] = new Set();
            }
            items.forEach(item => {
                stores[store].add(item);
                let itemsArray = [...stores[store]];
                itemsArray.splice(itemsArray.indexOf(item), 1);
                itemsArray.unshift(item);
                stores[store] = new Set(itemsArray);
            });
        } else if (action === "Remove") {
            if (stores.hasOwnProperty(store)) {
                delete stores[store];
            }
        }
    }

    for (let store in stores) {
        console.log(`${store}:`);
        stores[store].forEach(item => console.log(` - ${item}`));
    }
}

shoppingList([
    "Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"
]);
