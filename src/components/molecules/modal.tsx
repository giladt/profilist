import { type FC, useRef, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import useProfis from "@/context/useProfies";
import Button from "@/components/atoms/button";
import type { Modal } from "@/types/molecules";

const Modal: FC<Modal> = forwardRef<HTMLDialogElement | null, Modal>(
  ({ children }, ref) => {
    const { selectedProfiId, getProfi } = useProfis();
    const refDialog = useRef<HTMLDialogElement | null>(null);

    const handleClose = () => {
      if (refDialog.current) {
        getProfi();
        console.log("close", { selectedProfiId });
        refDialog.current.close();
      }
    };

    return (
      <dialog
        ref={(node) => {
          refDialog.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className="modal
          text-center opacity-0 flex-col
          transition-opacity
          rounded-md drop-shadow-lg p-4 
          relative top-0 left-0 right-0 bottom-0 
          inset-0 outline-none focus:outline-none
          w-auto h-fit hidden
          bg-stone-100 dark:bg-stone-700
          open:opacity-100 open:flex open:mx-6
          overflow-visible
          backdrop:backdrop-blur-md
        "
        onCancel={() => refDialog.current?.close()}
      >
        <Button.Round
          className="close-button 
            absolute -right-7 -top-7
          "
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faClose} />
        </Button.Round>
        {children}
      </dialog>
    );
  }
);
export default Modal;
