import { types } from "mobx-state-tree";

const defaultScanMode = types
    .model({
        flag: types.string,
    })

const data = types
    .model({
        data: types.array(defaultScanMode)
    })

const store = data.create({
    data: [
        {
            flag: "",
        },
    ]
})

export default store;