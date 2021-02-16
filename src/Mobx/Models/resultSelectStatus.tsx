import { types } from "mobx-state-tree";

const selectResult = types
    .model({
        target: types.string
    })
    .actions(self => ({
        setTarget(target: any) {
            self.target = target
        },
    }))

const store = selectResult.create({
    target: "123"
});

export default store;



