import { types } from "mobx-state-tree";

const addNewMode = types
    .model({
        type: types.string,
    })

const store = addNewMode.create({
    type: "",
});

export default store;