import { types } from "mobx-state-tree";

const advancedMode = types
    .model({
        isClick: types.boolean,
        dialogStatus: types.boolean,
    })
    .actions(self => ({
        setIsClick(isClick: boolean){
            self.isClick = isClick
        },
        setOpen(dialogStatus: boolean){
            self.dialogStatus = dialogStatus
        }
    }))

const store = advancedMode.create({
    isClick: false,
    dialogStatus: false,
});

export default store;