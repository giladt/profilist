import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import useProfis from "@/context/useProfies";
import Header from "@/components/atoms/header";
import Button from "@/components/atoms/button";
import Modal from "@/components/molecules/modal";
import Text from "@/components/atoms/text";
import ProfiCarousel from "@/components/molecules/profi-carousel";
import type { ModalContent } from "@/types";
import type { TileProps } from "@/types/molecules";

function ModalContent({ data }: ModalContent) {
  return (
    <div className="container flex flex-col md:flex-row overflow-y-auto gap-4 text-black dark:text-white">
      <img
        className="rounded-lg aspect-square shadow-md shadow-black/50 m-1 h-80"
        src={data.picture.large}
        alt={data.name.first}
      />

      <div className="info flex flex-col w-fit text-left gap-4">
        <Header.Main size="lg">
          <Text.regular>Your Profi - </Text.regular>
          <Text.bold>
            {data.name.title} {data.name.first} {data.name.last}
          </Text.bold>
        </Header.Main>

        <address className="justify-start">
          <Header.Sub size="md">
            <Text.bold>Phone</Text.bold>
          </Header.Sub>
          <Text.regular>
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </Text.regular>

          <Header.Sub size="md">
            <Text.bold>Mobile</Text.bold>
          </Header.Sub>
          <Text.regular>
            <a href={`tel:${data.cell}`}>{data.cell}</a>
          </Text.regular>

          <Header.Sub size="md">
            <Text.bold>EMail</Text.bold>
          </Header.Sub>
          <Text.regular>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </Text.regular>

          <Header.Sub size="md">
            <Text.bold>Address</Text.bold>
          </Header.Sub>
          <Text.regular>
            {data.location.street.name} {data.location.street.number.toString()}
          </Text.regular>
          <br />
          <Text.regular>
            {data.location.city}, {data.location.postcode}
            <br />
            {data.location.country}
          </Text.regular>
        </address>
      </div>
    </div>
  );
}

function Home() {
  const refModal = useRef<HTMLDialogElement>(null);

  const {
    profis,
    incrementor,
    initProfis,
    addProfis,
    removeProfi,
    getProfi,
    selectedProfiId,
    profiIsLoading,
  } = useProfis();
  const [tiles, setTiles] = useState<TileProps[]>([]);

  useEffect(() => {
    initProfis();
  }, []);

  useEffect(() => {
    const tilesMap: TileProps[] = profis.map((profi, idx) => ({
      imageUrl: profi.picture.large,
      text: `${profi.name.first} ${profi.name.last}`,
      tileSize: 256,
      buttonText: (
        <span>
          <FontAwesomeIcon icon={faTrash} /> Remove
        </span>
      ),
    }));
    setTiles(tilesMap);
  }, [profis]);

  const handleModalOpen = (id: number) => {
    if (!refModal.current) return;
    getProfi(id);
    refModal.current.showModal();
  };

  const profi = selectedProfiId !== null && profis[selectedProfiId];

  return (
    <>
      <section className="flex flex-col gap-4 items-center justify-center">
        <p>
          <Text.bold>Found {tiles.length} Profies for you to scroll:</Text.bold>
        </p>
        <div>
          <Button.Full onClick={addProfis}>
            Add {incrementor} more Profi{incrementor > 1 && "s"}
          </Button.Full>
          <Button.Full onClick={initProfis}>Reset</Button.Full>
        </div>
      </section>
      <section className="w-full p-4 mx-auto max-w-7xl overflow-hidden select-none">
        <ProfiCarousel
          tiles={tiles}
          tileSize={256}
          isLoading={profiIsLoading}
          handleClick={handleModalOpen}
          handleRemove={removeProfi}
        />
      </section>
      <Modal ref={refModal}>{profi && <ModalContent data={profi} />}</Modal>
    </>
  );
}

export default Home;
