import Image from "next/image";
import { FC } from "react";

import styles from "./categoySubMenu.module.scss";

type ImagePreviewProps = {
  images: string[];
};
const ImagePreview: FC<ImagePreviewProps> = ({ images }) => (
  <div className={styles.imagesWrapper}>
    {images?.map((imageSrc) => (
      <Image key={imageSrc} src={imageSrc} alt="Preview" width="200" height="150" />
    ))}
  </div>
);

export default ImagePreview;
