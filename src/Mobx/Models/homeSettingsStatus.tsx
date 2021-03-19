import { types } from "mobx-state-tree";
import { boolean } from "mobx-state-tree/dist/internal";

const homeSettings = types
    .model({
        target: types.string,
        range: types.string,
        automation: types.boolean,
        cve: types.boolean,
        pn: types.boolean,
        whoIs: types.boolean,
        firewalk: types.boolean,
        hostmap: types.boolean,
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
        setFirewalk(firewalk: any) {
            self.firewalk = firewalk
        },
        setHostmap(hostmap: any) {
            self.hostmap = hostmap
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
    firewalk: false,
    hostmap: false,
    flag: "",
    rangeTarget: "",
});

export default store;