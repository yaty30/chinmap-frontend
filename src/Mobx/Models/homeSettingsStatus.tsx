import { types } from "mobx-state-tree";

const homeSettings = types
    .model({
        automation: types.boolean
    })
    .actions(self => ({
        setAuto(automation: any) {
            self.automation = automation
            console.log(automation)
        },
    }))

const store = homeSettings.create({
    automation: false,
});

export default store;