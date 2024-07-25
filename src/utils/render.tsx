import Image from "next/image";
import Paragraph from "@components/paragraph";

export const renderParagraphs = (
  paragraphs:
    | {
        title: string;
        text: string;
      }[]
    | undefined,
) => {
  if (!paragraphs) return null;

  return paragraphs?.map((s, index) => (
    <Paragraph
      key={index + s.title}
      title={s.title}
      text={s.text}
      titleStyle={index > 0 ? "mt-lg" : ""}
    />
  ));
};

export const renderImages = (images: string[] | undefined, index: number) => {
  if (!images) return null;

  if (images.length === 1) {
    return (
      <div key={"image-cont" + index} className="relative my-lg h-[450px] w-full">
        <Image
          src={images[0]}
          alt="project image"
          fill
          priority
          quality={100}
          className="object-cover rounded-[20px] bg-background"
        />
      </div>
    );
  }

  return (
    <div key={"image-cont" + index} className="my-lg flex flex-row gap-md">
      {images?.map((image, index) => (
        <div key={"image" + index} className="relative h-[345px] w-full">
          <Image
            src={image}
            alt="project image"
            fill
            priority
            quality={100}
            className="object-cover rounded-[20px] bg-background"
          />
        </div>
      ))}
    </div>
  );
};
