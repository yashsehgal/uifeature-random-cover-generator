import React from "react";
import { useRef, useState } from "react";
import ReactModal from "react-modal";
import DirectLinksWrapper from "./DirectLinksWrapper";
import { getFeaturedUpdates } from "./featured-updates";
import { FaArrowRight, FaTimes } from 'react-icons/fa';

ReactModal.setAppElement('#root');

export default function WhatsNewFeatured() {
    const featuredUpdatesContentRef = useRef(getFeaturedUpdates());
    const [moreFeaturedContentPopup, setMoreFeaturedContentPopup] = useState(false);
    return (
        <React.Fragment>
            <div className="whats-new-featured-container w-[240px] h-fit m-16 px-3 py-2 border-l border-zinc-700">
                <div className="flex flex-col items-start justify-start gap-1 w-full h-fit">
                    <h1 className="leading-snug font-semibold text-zinc-500">What's New? Featured Updates</h1>
                    <p className="leading-snug font-normal text-zinc-600 text-xs">Latest {" "}
                        <span className="hover:text-zinc-400 hover:underline">
                            version {"(0.1.9)"}
                        </span>
                    </p>
                </div>
                <div className="featured-updates-section-wrapper mt-4 flex flex-col items-start justify-start gap-2 divide-y divide-zinc-800">
                    {featuredUpdatesContentRef.current?.map((featuredContent, featuredContentIndex) => {
                        if (featuredContentIndex < 3) {
                            return (
                                <FeaturedContentWrapper key={featuredContentIndex}
                                    content={featuredContent}
                                />
                            )
                        }
                        return <React.Fragment></React.Fragment>
                    })}
                </div>
                <button className="leading-snug text-xs font-semibold text-zinc-400 hover:text-zinc-300
                    flex flex-row items-center justify-center gap-2
                "
                    onClick={() => setMoreFeaturedContentPopup(!moreFeaturedContentPopup)}
                >
                    {"More Updates"}
                    <FaArrowRight />
                </button>
                <hr className="mt-2 border-zinc-800" />
                <DirectLinksWrapper />
            </div>
            <ReactModal isOpen={moreFeaturedContentPopup}
                onRequestClose={() => setMoreFeaturedContentPopup(!moreFeaturedContentPopup)}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.700)',
                        filter: 'blur(80%)'
                    },
                    content: {
                        background: '#121212',
                        borderColor: 'transparent',
                        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.360)',
                        width: '560px',
                        height: 'fit-content',
                        // centering content
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginBottom: 'auto',
                        marginTop: 'auto',
                        // removing default padding from modal
                        padding: '16px 24px'
                    }
                }}
            >
                <div className="w-full h-fit flex flex-row items-center justify-end">
                    <button className="px-3 py-2 flex flex-row items-center justify-center bg-transparent hover:bg-white hover:bg-opacity-10 rounded-md text-gray-300"
                        onClick={() => setMoreFeaturedContentPopup(!moreFeaturedContentPopup)}
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 w-full h-fit">
                    <h1 className="leading-snug font-semibold text-zinc-500">What's New? Featured Updates</h1>
                    <p className="leading-snug font-normal text-zinc-600 text-xs">Latest {" "}
                        <span className="hover:text-zinc-400 hover:underline">
                            version {"(0.1.9)"}
                        </span>
                    </p>
                </div>
                <div className="featured-updates-section-wrapper mt-4 flex flex-col mb-6 overflow-y-scroll pr-3 overflow-x-hidden h-[280px] items-start justify-start gap-2 divide-y divide-zinc-800">
                    {featuredUpdatesContentRef.current?.map((featuredContent, featuredContentIndex) => {
                        return (
                            <FeaturedContentWrapper key={featuredContentIndex}
                                content={featuredContent}
                            />
                        )
                    })}
                </div>
            </ReactModal>
        </React.Fragment>
    )
}

function FeaturedContentWrapper({ content }) {
    return (
        <div className="featured-content-wrapper w-full h-fit py-3">
            <h3 className="leading-snug text-zinc-300 text-xs font-semibold">{content?.title}</h3>
            <p className="leading-snug text-zinc-500 text-xs font-normal">{content?.description}</p>
            <div className="mt-2" />
            {content?.hasAction && content?.action?.type==='button'
                ? <button className="featured-content_action-button w-full h-fit py-1.5 rounded-md border-transparent bg-zinc-700 hover:bg-zinc-600 text-zinc-300 font-semibold text-xs"
                        onClick={() => window.open(content?.action?.url)}
                    >
                    {content?.action?.text}
                    </button>
                : <a href={content?.action?.url}
                    className="featured-content_action-link text-xs font-semibold text-zinc-500 hover:underline hover:text-zinc-400" 
                    rel="noreferrer">
                        {content?.action?.text}
                    </a>
            }
        </div>
    )
}