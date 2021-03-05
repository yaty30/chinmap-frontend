import { types } from "mobx-state-tree";

const advancedMode = types
    .model({
        isClick: types.boolean,
    })
    .actions(self => ({
        setIsClick(isClick: boolean){
            self.isClick = isClick
        }
    }))

const store = advancedMode.create({
    isClick: false,
});

export default store;