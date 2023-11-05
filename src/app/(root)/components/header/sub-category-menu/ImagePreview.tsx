import Image from "next/image";
import { FC } from "react";

import styles from "./categoySubMenu.module.scss";

type ImagePreviewProps = {
  images: string[];
};
const ImagePreview: FC<ImagePreviewProps> = ({ images }) => {
  return (
    <div className={styles.imagesWrapper}>
      {images?.map((imgUrl, i) => (
        <Image key={i} src={imgUrl} alt="Preview" width="200" height="150" />
      ))}
    </div>
  );
};

export default ImagePreview;
