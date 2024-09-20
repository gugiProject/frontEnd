import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { imageListAtom } from '@/store/trade/create/atoms';

import uploadIcon from '../../../../public/Img/file-upload-icon.svg';

export default function ImageUpload() {
  const [images, setImages] = useRecoilState(imageListAtom);
  const maxImages = 5;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > maxImages) {
      alert(`최대 ${maxImages}장의 사진만 업로드할 수 있습니다.`);
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label>사진 첨부</label>
      <p className="text-12 text-[#33333366] py-8 ">
        최대 n장까지 첨부 가능합니다.
      </p>
      <div className="flex space-x-4 overflow-x-auto">
        {images.length < maxImages && (
          <label className="flex-shrink-0 cursor-pointer rounded-lg">
            <Image src={uploadIcon} alt="file-upload" width={98} height={98} />
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
        {images.map((image, index) => (
          <div
            key={`preview=${index}`}
            className="relative w-98 h-98 flex-shrink-0"
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="w-full h-full object-cover rounded-lg"
              onClick={() => handleRemoveImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
