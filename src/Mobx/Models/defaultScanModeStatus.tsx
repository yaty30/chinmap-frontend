import { types } from "mobx-state-tree";

const defaultScanMode = types
    .model({
        name: types.string,
        value: types.string,
        des: types.string,
        command: types.string,
        freq: types.number,
        flags: types.string,
        flagsDes: types.string,
        stMust: types.boolean,
        secFlags: types.string,
        secFlagsDes: types.string,
        secMust: types.boolean,
    })

const data = types
    .model({
        data: types.array(defaultScanMode)
    })

const store = data.create({
    data: [
        {
            name: "Ping Scan Mode",
            value: "pingScanMode",
            des: "This mode will not do a port scan after host discovery, and only print out the available hosts that responded to the host discovery probes.",
            command: "nmap -v -sU -sT -p -U:161, T:80 -T0",
            freq: 0,
            flags: "-Pn",
            flagsDes: "Disable host discovery. Port scan only.",
            stMust: false,
            secFlags: "",
            secFlagsDes: "",
            secMust: false,
        },
        {
            name: "Lightning Scan Mode",
            value: "lightningScanMode",
            des: "Lightning scan mode able to check specific ports in a rapid way that user can see if the target is scannable or not.",
            command: "nmap -v -sU -sT -p -U:161, T:80 -T0 ",
            freq: 0,
            flags: "-sU",
            flagsDes: "UDP port scan. This must be chosen",
            stMust: true,
            secFlags: "-sT",
            secFlagsDes: "TCP connect port scan (Default without root privilege). This must be chosen.",
            secMust: true,
        },
        {
            name: "Intense Scan Mode",
            value: "intenseScanMode",
            des: "Intense scan mode is capable of getting the information of the target's OS, services version and tracing the target router in one command.",
            command: "nmap -v -sU -sT -p -U:161, T:80 -T0",
            freq: 0,
            flags: "-A",
            flagsDes: "Enable OS detection, version detection, script scanning, and traceroute. This must be chosen.",
            stMust: true,
            secFlags: "",
            secFlagsDes: "",
            secMust: false,
        },
        {
            name: "Non-Ping Scan Modes",
            value: "nonPingScanMode",
            des: "Non-Ping scan mode is specifically aim for checking the target is alive or down.",
            command: "nmap -v -sU -sT -p -U:161, T:80 -T0",
            freq: 4,
            flags: "-Pn",
            flagsDes: "Disable host discovery. Port scan only.",
            stMust: false,
            secFlags: "",
            secFlagsDes: "",
            secMust: false,
        },
        {
            name: "Top 100 Ports Scan Modes",
            value: "topOneHundredScanMode",
            des: "Top 100 Ports scan mode will show the top 100 poplar ports, such as DNS, SMTP or HTTP. This mode can dramatically speed up scanning while still representing the majority of commonly used ports.",
            command: "nmap -T4 -F",
            freq: 4,
            flags: "-F",
            flagsDes: "Fast port scan (100 ports). This must be chosen.",
            stMust: false,
            secFlags: "",
            secFlagsDes: "",
            secMust: false,
        },
        {
            name: "Full Ports Scan Modes",
            value: "fullPortsScanMode",
            des: "This mode is able to check every single port of a pc, however, it requires a while of time.",
            command: "nmap -T4 -p- -v -v ",
            freq: 4,
            flags: "-p-",
            flagsDes: "Scan all ports. This must be chosen.",
            stMust: true,
            secFlags: "",
            secFlagsDes: "",
            secMust: false,
        },
    ]
})

export default store;