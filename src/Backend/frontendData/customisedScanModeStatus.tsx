import { types, Instance } from "mobx-state-tree";

type profileModel = Instance<typeof profile>
type pingModel = Instance<typeof ping>
type nseModel = Instance<typeof nse>
type targetMode = Instance<typeof target>
type sourceModel = Instance<typeof source>
type timingModel = Instance<typeof timing>
type otherModel = Instance<typeof other>

const profile = types
    .model({
        modeID: types.string,
        name: types.string,
        des: types.string,
        freq: types.number,
        tcp: types.string,
        nonTcp: types.string,
    })
    
const ping = types
    .model({
        flags: types.string,
    })

const nse = types
    .model({
        flags: types.string,
    })

const target = types
    .model({
        flags: types.string,
    })

const source = types
    .model({
        flags: types.string,
    })

const timing = types
    .model({
        flags: types.string,
    })

const other = types
    .model({
        flags: types.string,
    })

const modelData = types
    .model({
        profile: types.array(profile),
        ping: types.array(ping),
        nse: types.array(nse),
        target: types.array(target),
        source: types.array(source),
        timing: types.array(timing),
        other: types.array(other),
    })
    .actions(self => ({
    
    }))

const modeArray = types
    .model({
        rows: types.array(modelData)
    })

const store = modeArray.create({
    rows: [
        {
            profile: [
                {
                    modeID: "",                
                    name: "",
                    des: "",
                    freq: 0,
                    tcp: "",
                    nonTcp: "",
                }
            ],
            ping: [
                {
                    flags: "",
                }
            ],
            nse: [
                {
                    flags: "",
                }
            ],
            target: [
                {
                    flags: "",
                }
            ],
            source: [
                {
                    flags: "",
                }
            ],
            timing: [
                {
                    flags: "",
                }
            ],
            other: [
                {
                    flags: "",
                }
            ]
        },


{
"profile": [
{
"modeID": "upxelVsKrmeCNVgXmdeSj",
"name": "123123",
"des": "123123123",
"freq": 4,
"tcp": "-sA",
"nonTcp": "-sL"
}
],
"ping": [
{
"flags": ""
}
],
"nse": [
{
"flags": ""
}
],
"target": [
{
"flags": ""
}
],
"source": [
{
"flags": ""
}
],
"timing": [
{
"flags": ""
}
],
"other": [
{
"flags": ""
}
]
},
]})
export default store;