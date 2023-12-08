import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import Tile from "@/components/molecules/tile";
import Button from "@/components/atoms/button";
import type { FC } from "react";
import type { ProfiCarouselProps } from "@/types/atoms";

const ProfiCarousel: FC<ProfiCarouselProps> = ({
  tiles,
  tileSize,
  isLoading,
  handleClick,
  handleRemove,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
            width: 600,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            width: 700,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
            width: 1000,
          },
        }}
        grabCursor={true}
      >
        {!!tiles.length &&
          tiles.map((tile, idx) => (
            <SwiperSlide tag="span" key={idx} itemID={idx.toString()}>
              <Tile
                imageUrl={tile.imageUrl}
                text={tile.text}
                buttonText={tile.buttonText}
                tileSize={tileSize}
                clickHandler={() => handleClick(idx)}
                buttonClickHandler={() => handleRemove(idx)}
              />
            </SwiperSlide>
          ))}
        {!!tiles.length && (
          <span slot="container-end" className="flex">
            <>
              <Button.Swipe.prev />
              <Button.Swipe.next />
            </>
          </span>
        )}
        {!!isLoading && (
          <span slot="wrapper-end">
            <Tile text="Loading..." buttonText="" tileSize={tileSize} />
          </span>
        )}
        <span slot="wrapper-end">
          {!isLoading && !tiles.length && (
            <Tile text="No Profis" buttonText="" tileSize={tileSize} />
          )}
        </span>
      </Swiper>
    </>
  );
};
export default ProfiCarousel;
