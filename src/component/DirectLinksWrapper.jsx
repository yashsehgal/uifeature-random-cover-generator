
export default function DirectLinksWrapper() {
    const directLinks = ["Docs", "Business", "Blogs", "Plans", "GitHub", "Careers", "Twitter", "Sponsors"];
    return (
        <div className="direct-links-section-wrapper mt-3 grid grid-cols-4 items-center justify-start gap-0.5">
            {directLinks?.map((directLink, directLinkIndex) => {
                return (
                    <span key={directLinkIndex}
                        className="text-xs text-zinc-700 hover:text-zinc-500 hover:underline font-normal"
                    >
                        {directLink}
                    </span>
                )
            })}
        </div>
    )
}