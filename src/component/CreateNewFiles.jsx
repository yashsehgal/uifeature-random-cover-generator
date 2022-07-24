import React, { useState } from "react";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function CreateNewFiles() {
    const [createNewPopup, setCreateNewPopup] = useState(false);
    return (
        <React.Fragment>
            <div className="create-new-files-section-wrapper m-16">
                <h1 className="leading-snug text-white font-semibold text-lg">Create New Invoices</h1>
                <div className="mt-4 flex flex-row items-center justify-start gap-6">
                    <input type="text" 
                        className="w-[460px] h-fit px-4 py-2 rounded-md border border-transparent bg-zinc-800 placeholder:text-zinc-600 text-white font-semibold text-sm" 
                        placeholder="Search for invoices" />
                    <span className="buttons-wrapper flex flex-row items-center justify-end gap-2">
                        <button className="px-4 py-2 rounded-md border border-transparent bg-zinc-700 hover:brightness-125 text-zinc-400 font-semibold text-sm">
                            Edit invoices 
                        </button>
                        <button className="px-4 py-2 rounded-md border border-transparent bg-purple-700 hover:brightness-125 text-white font-semibold text-sm"
                            onClick={() => setCreateNewPopup(true)}
                        >
                            {"+"} Create
                        </button>
                    </span>
                </div>
            </div>
            <ReactModal
                isOpen={createNewPopup}
                onRequestClose={() => setCreateNewPopup(false)}
            >

            </ReactModal>
        </React.Fragment>
    )
}