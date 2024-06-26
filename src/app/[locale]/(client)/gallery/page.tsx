import { getData } from "@/actions/getData";
import Gallery from "@/components/Gallery/Gallery"

type Props = {}

export default async function Page({}: Props) {
  const items = await getData<GalleryItem[]>('gallery');

  return (
    <div className="container">
      <Gallery items={items}/>
    </div>
  )
}