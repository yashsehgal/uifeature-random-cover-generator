import React from "react";

export default function FileCard({ title, styles }) {
    return (
        <React.Fragment>
            <div className={`${styles?.color} w-36 h-24 rounded-md shadow-md hover:shadow-2xl cursor-default select-none flex flex-col gap-3 items-center justify-end overflow-hidden`}>
                <span className="emoji-wrapper text-3xl">{styles?.emoji}</span>
                <div className="text-white truncate font-semibold text-sm invoice-title-wrapper w-full h-fit flex flex-row items-center justify-start px-3 py-1.5 bg-zinc-800">
                    {title}
                </div>
            </div>
        </React.Fragment>
    )
}