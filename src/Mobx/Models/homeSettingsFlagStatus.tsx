import { types, Instance } from "mobx-state-tree";

type  flagDataModel = Instance<typeof flagData>

const flagData = types
    .model({
        flags: types.string,
    })

const data = types
    .model({
        data: types.array(flagData)
    })
    .actions(self => ({
        pushFlags(){
            self.data.push({
                flags: "",
            })
        }
    }))

const store = data.create({
    data: [
        {
            flags: "",
        },
    ]
})

export default store;