import { types } from "mobx-state-tree";

const homeSettings = types
    .model({
        target: types.string,
        range: types.string,
        automation: types.boolean,
        cve: types.boolean,
        pn: types.boolean,
        whoIs: types.boolean,
        flag: types.string,
        rangeTarget: types.string,
    })
    .actions(self => ({
        setTarget(target: string) {
            self.target = target
        },
        setRange(range: string) {
            self.range = range
        },
        setAuto(automation: any) {
            self.automation = automation
        },
        setCve(cve: any) {
            self.cve = cve
        },
        setPn(pn: any) {
            self.pn = pn
        },
        setWhoIs(whoIs: any) {
            self.whoIs = whoIs
        },
        setFlag(flag: any) {
            self.flag = flag
        },
        setRangeTarget(rangeTarget: any) {
            self.rangeTarget = rangeTarget
        },
    }))
    
const store = homeSettings.create({
    target: "",
    range: "",
    automation: false,
    cve: false,
    pn: false,
    whoIs: false,
    flag: "0",
    rangeTarget: "",
});

export default store;