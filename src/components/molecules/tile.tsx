import type { FC } from "react";
import type { TileProps } from "@/types/molecules";

import Text from "@/components/atoms/text";
import Button from "@/components/atoms/button";
import imagePlaceholder from "@/assets/images/placeholder-profi.png";

const Tile: FC<TileProps> = ({
  imageUrl,
  text,
  tileSize,
  buttonText: children,
  clickHandler,
  buttonClickHandler,
}: TileProps) => {
  return (
    <>
      <figure
        onClick={clickHandler}
        className="tile
            flex flex-col items-center justify-between text-center
            bg-gray-300 overflow-hidden
            hover:scale-105
            transition-transform delay-75
            rounded-lg
            relative m-2
            after:content-[''] after:bg-gradient-to-r
            after:from-[#d10000] after:via-[#f60439] after:to-[#b105f4]
            after:h-2 after:w-full after:absolute
            after:bottom-0 after:right-0 after:left-0
            whitespace-nowrap
          "
      >
        <img
          src={imageUrl || imagePlaceholder}
          style={{ height: tileSize, aspectRatio: 1 }}
          alt={text}
        />
        <figcaption
          className="caption 
          flex justify-center p-2 
          text-ellipsis
        "
        >
          <Text.bold>{text}</Text.bold>
        </figcaption>
      </figure>
      {children && (
        <Button.Full
          variant="sm"
          disabled={!buttonClickHandler}
          onClick={buttonClickHandler}
        >
          {children}
        </Button.Full>
      )}
    </>
  );
};
export default Tile;
