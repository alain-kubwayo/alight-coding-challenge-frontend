import type { LinkType } from "../types";

export const LEFT_LINKS_DETAILS: LinkType[] = [
    {
        id: 1,
        text: "About",
        url: "https://google.com/search/howsearchworks/?fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
    {
        id: 2,
        text: "Advertising",
        url: "https://www.google.com/intl/en_rw/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
    {
        id: 3,
        text: "Business",
        url: "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
    {
        id: 4,
        text: "How Search works",
        url: "https://google.com/search/howsearchworks/?fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
];

export const RIGHT_LINKS_DETAILS: LinkType[] = [
    {
        id: 1,
        text: "Privacy",
        url: "https://policies.google.com/privacy?hl=en-RW&fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
    {
        id: 2,
        text: "Terms",
        url: "https://policies.google.com/terms?hl=en-RW&fg=1",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
    {
        id: 3,
        text: "Settings",
        url: "#",
        classes: "cursor-pointer hover:underline p-[15px]"
    }, 
];

export const LINKS: LinkType[] = [
    {
        id: 1, 
        text: "Français",
        url: "https://www.google.com/setprefs?sig=0_xOjmWir258Hqr1qTFkTjaI8jSmA%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwi_oMKu5Z6HAxXWBfsDHdinAcQQ2ZgBCCA",
        classes: "px-2 text-blue-800 hover:underline"
    },
    {
        id: 2,
        text: "Kiswahili",
        url: "https://www.google.com/setprefs?sig=0_xOjmWir258Hqr1qTFkTjaI8jSmA%3D&hl=sw&source=homepage&sa=X&ved=0ahUKEwi_oMKu5Z6HAxXWBfsDHdinAcQQ2ZgBCCE",
        classes: "px-2 text-blue-800 hover:underline"
    },
    {
        id: 3,
        text: "Français",
        url: "https://www.google.com/setprefs?sig=0_xOjmWir258Hqr1qTFkTjaI8jSmA%3D&hl=rw&source=homepage&sa=X&ved=0ahUKEwi_oMKu5Z6HAxXWBfsDHdinAcQQ2ZgBCCI",
        classes: "px-2 text-blue-800 hover:underline"
    }
];
