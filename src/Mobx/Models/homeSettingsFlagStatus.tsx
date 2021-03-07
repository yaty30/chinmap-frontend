import { types } from "mobx-state-tree";

const pingData = types
    .model({
        pingFlags: types.string,
    })
    .actions(self => ({
        setPingFlags(pingFlags: string){
            self.pingFlags = pingFlags
            console.log(pingFlags)
        }
    }))

const store = pingData.create({
    pingFlags: '',
});

export default store;