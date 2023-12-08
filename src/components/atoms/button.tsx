import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import type { FC } from "react";
import type { ButtonProps } from "@/types/atoms";

const Full: FC<ButtonProps & { variant?: "sm" | "md" | "lg" }> = ({
  children,
  variant = "md",
  ...props
}) => {
  const variantStyle = {
    sm: "px-2 py-1 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-4 text-lg rounded-xl",
  };
  return (
    <button
      data-testid="button-full"
      {...props}
      className={`button-full 
      inline-flex mx-2 my-1
      ${variantStyle[variant]}
      text-white
      bg-[#f60439] hover:bg-[#f60439]/70
    `}
    >
      {children}
    </button>
  );
};

const Round: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      data-testid="button-round"
      {...props}
      className={`button-round 
      inline-flex p-4 rounded-full m-2
      justify-center items-center
      w-10 h-10
      text-white
      font-bold
      text-2xl
      bg-[#f60439] hover:bg-[#f60439]/70
      ${props.className}
    `}
    >
      {children}
    </button>
  );
};

const SwipeNext: FC = () => {
  const swiper = useSwiper();
  return (
    <Round
      data-testid="swipe-next"
      onClick={() => swiper.slideNext()}
      className="swipper-button-next"
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </Round>
  );
};
const SwipePrev: FC = () => {
  const swiper = useSwiper();
  return (
    <Round
      data-testid="swipe-prev"
      onClick={() => swiper.slidePrev()}
      className="swipper-button-prev"
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </Round>
  );
};

const Swipe = { next: SwipeNext, prev: SwipePrev };

export default { Full, Round, Swipe };
