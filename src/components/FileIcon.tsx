import React from 'react'
import {
    TbFileText,
    TbFileUnknown,
    TbMusic,
    TbPdf,
    TbVideo,
} from 'react-icons/tb'

type IconType = (props: React.SVGProps<SVGSVGElement>) => JSX.Element

const fileTypes: { [key: string]: IconType } = {
    mp4: TbVideo,
    avi: TbVideo,
    webm: TbVideo,
    mov: TbVideo,
    mkv: TbVideo,
    mp3: TbMusic,
    wav: TbMusic,
    ogg: TbMusic,
    flac: TbMusic,
    pdf: TbPdf,
    txt: TbFileText,
    docx: TbFileText,
    doc: TbFileText,
    odt: TbFileText,
    rtf: TbFileText,
}

const checkFileType = (name: string) => {
    // Get file extension
    const extension = name.split('.').pop()!.toLowerCase()

    const Component = fileTypes[extension] || TbFileUnknown
    return <Component className="h-full w-full" />
}

export default function FileIcon({ name }: { name: string }) {
    return checkFileType(name)
}