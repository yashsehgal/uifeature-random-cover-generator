import CreateNewFiles from "./component/CreateNewFiles";
import WhatsNewFeatured from "./component/WhatsNewFeatured";

export default function App() {
  return (
    <div className="app flex flex-row items-start justify-between w-full h-fit">
      <CreateNewFiles />
      <WhatsNewFeatured />
    </div>
  )
}