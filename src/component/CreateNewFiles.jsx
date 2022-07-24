import React, { useState } from "react";

import ReactModal from "react-modal";
import FileCard from "./FileCard";
import { generateCoverStyle } from "./helpers";

ReactModal.setAppElement("#root");

export default function CreateNewFiles() {
    const [createNewPopup, setCreateNewPopup] = useState(false);
    const [editInvoiceRef, setEditInvoice] = useState(false);
    const [invoiceList, setInvoiceList] = useState([]);
    return (
        <React.Fragment>
            <div className="create-new-files-section-wrapper m-16">
                <h1 className="leading-snug text-white font-semibold text-lg">Create New Invoices</h1>
                <div className="mt-4 flex flex-row items-center justify-start gap-6">
                    <input type="text" 
                        className="w-[460px] h-fit px-4 py-2 rounded-md border border-transparent bg-zinc-800 placeholder:text-zinc-600 text-white font-semibold text-sm" 
                        placeholder="Search for invoices" />
                    <span className="buttons-wrapper flex flex-row items-center justify-end gap-2">
                        <button className="px-4 py-2 rounded-md border border-transparent bg-zinc-700 hover:brightness-125 text-zinc-400 font-semibold text-sm"
                            onClick={() => setEditInvoice(!editInvoiceRef)}
                        >
                            {editInvoiceRef ? "Save Changes" : "Edit invoices"} 
                        </button>
                        <button className="px-4 py-2 rounded-md border border-transparent bg-purple-700 hover:brightness-125 text-white font-semibold text-sm"
                            onClick={() => setCreateNewPopup(true)}
                        >
                            {"+"} Create
                        </button>
                    </span>
                </div>
                <div className="invoices-list-wrapper mt-6">
                    <h1 className="leading-snug text-zinc-500 font-semibold text-sm">Invoices</h1>
                    <div className="invoices-cards-list-wrapper mt-4 grid grid-cols-5 items-center justify-start gap-4">
                        {invoiceList?.map((invoice, invoiceIndex) => {
                            return (
                                <FileCard 
                                    key={invoiceIndex}
                                    title={invoice?.title}
                                    styles={invoice?.styles}
                                    isEditable={editInvoiceRef}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={createNewPopup}
                onRequestClose={() => setCreateNewPopup(false)}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.600)'
                    },
                    content: {
                        background: 'rgb(126 34 206 / var(--tw-bg-opacity))',
                        borderColor: 'transparent',
                        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.360)',
                        width: 'fit-content',
                        height: 'fit-content',
                        borderRadius: '12px',
                        // centering content
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginBottom: 'auto',
                        marginTop: 'auto',
                        // removing default padding from modal
                        padding: '0px'
                    }
                }}
            >
                <div className="create-new-invoice-popup-wrapper h-fit w-[420px] px-4 py-4">
                    <div className="invoice-name-input-wrapper flex flex-col items-start justify-start gap-1.5">
                        <span className="invoice-name-input-label leading-snug text-sm font-semibold text-white">New Invoice Title</span>
                        <input type="text" 
                            className="w-full h-fit px-4 py-2 rounded-md border border-transparent bg-white bg-opacity-30 placeholder:text-white placeholder:text-opacity-60 text-white font-semibold text-sm" 
                            placeholder="Eg. Monthly Purchases" 
                            id="new-invoice-input" 
                            defaultValue={`${generateCoverStyle()?.prefix}-${generateCoverStyle()?.suffix}`}
                            />
                    </div>
                    <div className="w-full mt-2 flex flex-row items-center justify-between">
                        <button className="px-4 py-2 rounded-md border border-transparent bg-white bg-opacity-30 hover:brightness-125 text-white font-semibold text-sm"
                            onClick={() => setCreateNewPopup(false)}
                        >
                            Discard
                        </button>
                        <button className="px-4 py-2 rounded-md border border-transparent bg-white hover:brightness-125 text-black font-semibold text-sm"
                            onClick={() => {
                                if (document.getElementById('new-invoice-input')?.value!==null && document.getElementById('new-invoice-input').value!=="") {
                                    let newInvoiceTitle = document.getElementById('new-invoice-input')?.value;
                                    let updatedInvoiceList = invoiceList;
                                    updatedInvoiceList.push({
                                        title: newInvoiceTitle,
                                        styles: generateCoverStyle()
                                    });
                                    setInvoiceList(updatedInvoiceList);
                                    setCreateNewPopup(false);
                                    console.log('saving data...');
                                }
                            }}
                        >
                            Create
                        </button>
                    </div>
                    
                </div>
            </ReactModal>
        </React.Fragment>
    )
}