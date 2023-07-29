import { ILink } from "./type";

export const homeUrl: string = '/'
export const pcBuildUrl: string = '/pc-build'

export const bdtSymbol: string = '৳';


export const footerLinks: ILink[] = [
    {
        _id: "foot_1",
        title: "Home",
        url: homeUrl,
    },
    {
        _id: "foot_2",
        title: "All Books",
        url: homeUrl,
    },
    {
        _id: "foot_3",
        title: "Add Book",
        url: homeUrl,
    },
    {
        _id: "foot_4",
        title: "Sign In",
        url: homeUrl,
    },
    {
        _id: "foot_5",
        title: "Sign Up",
        url: homeUrl,
    },
    {
        _id: "foot_6",
        title: "Books",
        url: homeUrl,
    },
]

export const catDropdownItems = [
    {
        "_id": "cpu_1",
        "name": "CPU / Processor",
        "slug": "processor",
        "isFeatured": true
    },
    {
        "_id": "motherboard_1",
        "name": "Motherboard",
        "slug": "motherboard",
        "isFeatured": true
    },
    {
        "_id": "ram_1",
        "name": "RAM",
        "slug": "ram",
        "isFeatured": true
    },
    {
        "_id": "psu_1",
        "name": "Power Supply Unit",
        "slug": "power-supply",
        "isFeatured": true
    },
    {
        "_id": "storage_1",
        "name": "Storage Device",
        "slug": "storage-device",
        "isFeatured": false
    },
    {
        "_id": "monitor_1",
        "name": "Monitor",
        "slug": "monitor",
        "isFeatured": false
    },
    {
        "_id": "gpu_1",
        "name": "GPU",
        "slug": "gpu",
        "isFeatured": true
    },
    {
        "_id": "mouse_1",
        "name": "Mouse",
        "slug": "mouse",
        "isFeatured": false
    },
    {
        "_id": "keyboard_1",
        "name": "Keyboard",
        "slug": "keyboard",
        "isFeatured": true
    }
]