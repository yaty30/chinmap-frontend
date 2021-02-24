import { types } from "mobx-state-tree";

const homeSettings = types
    .model({
        range: types.string,
        automation: types.boolean,
        cve: types.boolean,
        pn: types.boolean,
        whoIs: types.boolean,
    })
    .actions(self => ({
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
        }
    }))

const store = homeSettings.create({
    range: "",
    automation: false,
    cve: false,
    pn: false,
    whoIs: false,
});

export default store;