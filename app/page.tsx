import { ImageKitUpload } from '../components/imagekit-upload'

export default function Home() {
  return (
      <div className="flex flex-col items-center pt-24">
        <h1 className="text-3xl font-bold mb-1">HOME PAGE</h1>
        <p>Upload Videos Here</p>

        <ImageKitUpload/>
      </div>
  );
}
