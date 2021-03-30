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
        cleverTrickery: types.boolean,
        flag: types.string,
        rangeTarget: types.string,
    })
    .actions(self => ({
        setTarget(target: string) {
            var nTarget: string = ''
            var subnet:string = String(target.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.0\/\d+$/));
            var subnetReplaced: string = String(subnet.replace('/', 'sn\='))

            if(subnetReplaced != 'null'){
                nTarget = subnetReplaced
            } else {
                nTarget = target
            }
            self.target = nTarget
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
        setCleverTrickery(cleverTrickery: any) {
            self.cleverTrickery = cleverTrickery
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
    cleverTrickery: false,
    flag: "",
    rangeTarget: "",
});

export default store;