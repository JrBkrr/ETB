import {reactive, ref} from "vue";
import {defineStore} from "pinia";
import ApiService from "@/core/services/ApiService";
import router from "@/router";

interface Dashboard {
    fingerPrintSuccessRate: string | null;
    registeredDevicesCount: string | null;
    totalRoleVerificationCount: string | null;
    totalRoleVerificationCountToday: string | null;
    totalVerificationCount: string | null;
    totalVerificationCountToday: string | null;
    usedDevicesCountToday: string | null;
}

interface DeviceColor {
    name: string;
}

interface DeviceStatus {
    name: string;
    label: string;
}

interface DeviceVersion {
    id: string;
    versionNumber: number;
    versionNumberSemantic: string;
    name: string;
    buildNumber: number;
    forceUpdate: boolean;
    file: null | any;
    hardwareVersions: null | any;
    createdAt: number;
    deviceSerialNumber: string;
    deviceType: string;
    softwareHash: null | any;
    versionScheduleTime: null | any
}

interface HardwareVersion {
    id: string;
    name: string;
}

interface Device {
    id: string;
    ip: string;
    port: string;
    gemNumber: string;
    serialNumber: string;
    version?: DeviceVersion;
    operatingSystemVersion: string;
    hardwareVersion?: HardwareVersion;
    province: string;
    district: string;
    branch: string;
    createdAt: number;
    details: any[];
    terfiCert?: string;
    latestVersion: boolean;
    online: boolean;
    gmExpireDateTime?: number,
    rolExpireDateTime?: number,
    status?: DeviceStatus;
    color?: DeviceColor;
}

interface Version {
    id: string,
    versionNumber: number,
    versionNumberSemantic: string,
    name: string,
    buildNumber: number,
    forceUpdate: boolean,
    file: any,
    hardwareVersions: HardwareVersion[],
    createdAt: number,
    deviceSerialNumber: string,
    deviceType: string,
    softwareHash: any,
    versionScheduleTime: any
}

interface Log {
    "id": string,
    "device": {
        "id": string,
        "serialNumber": string,
        "latestVersion": false,
        "online": false
    },
    "name": string,
    "level": string,
    "verificationId": string | null,
    "errorMessage": string | null,
    "message": string | null,
    "transactionStartedAt": number,
    "transactionFinishedAt": number,
    "createdAt": number,
    "commandId": number,
    "exceptionMessage": number | null
}

interface Verification {
    "id": string,
    "device": {
        "id": string,
        "serialNumber": string,
        "latestVersion": false,
        "online": false
    },
    "appLabel": string | null,
    "cardSlot": string | null,
    "nonce": string | null,
    "message": string | null,
    "status": string | null,
    "createdAt": number,
    "updatedAt": number,
    "callGetDeviceInfoFirst": boolean
}

interface RoleVerification {
    "id": string | null,
    "device": {
        "id": string | null,
        "serialNumber": string | null,
        "latestVersion": false,
        "online": boolean
    },
    "requestedFields": [string],
    "cardSlot": string | null,
    "writeMode": boolean,
    "status": string | null,
    "createdAt": number,
    "updatedAt": number,
    "certType": number,
    "certWithPin": boolean
}

interface Users {
    "id": string | null,
    "username": string | null,
    "password": null,
    "passwordRepeat": null,
    "email": string | null,
    "phoneNumber": string | null,
    "name": string | null,
    "surname": string | null,
    "enabled": boolean,
    "createdAt": number,
    "authorities": null,
    "accountNonExpired": boolean,
    "credentialsNonExpired": boolean,
    "accountNonLocked": boolean
}

interface Profile {
    id: string;
    username: string;
    password: null;
    passwordRepeat: null;
    email: null;
    phoneNumber: null;
    name: null;
    surname: null;
    enabled: boolean;
    createdAt: string;
    authorities: Authority[];
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    _links: {
        self: {
            href: string;
        };
        users: {
            href: string;
        };
    };
}

interface Authority {
    id: string;
    name: string;
    authority: string;
}

interface HardwareVersion {
    "id": string;
    "name": string
}

interface Setting {
    "id": string;
    "name": string
}

export const GlobalStore = defineStore("main", () => {

    const State = reactive<any>({

        Dashboard: ref<Dashboard>({} as Dashboard),
        Devices: ref<Device[]>([]),
        Versions: ref<Version[]>([]),
        Logs: ref<Log[]>([]),
        Verifications: ref<Verification[]>([]),
        RoleVerifications: ref<RoleVerification[]>([]),
        Users: ref<Users[]>([]),
        Signatures: ref<Log[]>([]),
        Loading: ref<boolean>(false),
        Errors: ref<any>(null),
        RightWindow: ref({status: false}),
        Profile: ref<Profile>({} as Profile),
        Variables: ref(['primary', 'success', 'info', 'danger', 'warning', 'primary', 'success', 'info', 'danger', 'warning']),
        HardwareVersions: ref<HardwareVersion[]>([]),
        Settings: ref<Setting[]>([])
    })

    const Errors = ref(null);
    const variables = ['primary', 'success', 'info', 'danger', 'warning', 'primary', 'success', 'info', 'danger', 'warning'];

    async function Action_Start(method: string, url: string, target: string, payload?: any, params?: any) {

        if (method === 'get') State.Loading = true

        try {
            const {data} = await ApiService[method](url, method === 'query' ? {params} : payload)
            SetData(data, target);
            State.Errors = null
            setTimeout(() => {
                State.Loading = false
            }, 1200)
            return data
        } catch (error: any) {
            setError(error.response.data);
            setTimeout(() => {
                State.Loading = false
            }, 1200)
            if (error.message === 'Request failed with status code 401') await router.push('/sign-in')
        }

    }

    function SetData(data: any, target: string) {

        if (target === 'Devices') {
            Errors.value = null
            State.Devices = []
            data.forEach((item, index: number) => State.Devices.push(ReplayDevice(item, index)))
        } else if (target === 'Versions') {
            console.log(data)
            Errors.value = null
            State.Versions = []
            data.forEach((item, index: number) => State.Versions.push(ReplayVersions(item, index)))
        } else {
            State[target] = data;
        }

    }

    function setError(error: any) {

        State.Errors = {...error};

    }

    function ReplayDevice(item: any, index: number) {

        let Clone: Device;
        const name = variables[index % 10];
        const color = {name: name};
        const status = {label: name, name: name};
        Clone = {...item, status, color};
        return Clone;

    }

    function ReplayVersions(item: any, index: number) {

        let Clone: Version;
        const name = variables[index % 10];
        const color = {name: name};
        const status = {label: name, name: name};
        Clone = {...item, status, color};
        return Clone;

    }

    function setRightWindow(value) {
        State.RightWindow = {status: value};
        console.log(value)
    }

    return {

        setRightWindow,
        Action_Start,
        State,
        Errors,
        variables

    };

});
