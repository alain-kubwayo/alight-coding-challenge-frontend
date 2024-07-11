export type LinkType = {
    id?: number,
    text: string
    url: string,
    classes: string
}

export type CameraType = {
    classes: string
}

export type ButtonType = {
    text: string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type MicrophoneType = {
    classes: string
}
