"use client";

import React from "react";
import Image from "next/image";
import Modal from "./modal/index";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

export function Content() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalIntroduction, setModalIntroduction] = React.useState("");
  const [modalImageSrc, setModalImageSrc] = React.useState("");
  const openModal = (title, introduction, image) => {
    setModalTitle(title);
    setModalIntroduction(introduction);
    setModalImageSrc(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalIntroduction("");
    setModalImageSrc("");
    setModalTitle("");
  };
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col px-4 py-20">
      <Modal
        isOpen={isOpen}
        title={modalTitle}
        introduction={modalIntroduction}
        image={modalImageSrc}
        onClose={() => closeModal()}
      />
      <Typography
        variant="h3"
        className="text-center"
        color="green"
        style={{ marginBottom: "20px" }}
      >
        Nos Fili&egrave;res
      </Typography>

      <div className="relative  bg-[url('/image/filiere/filiere.jpg')] bg-cover bg-no-repeat ">
        <div
          // className="backdrop-blur-sm bg-white/2"
          style={{ height: "100%", padding: "5px" }}
        >
          <Typography
            variant="lead"
            className="mt-2 mb-8 w-full text-center font-normal"
            color="white"
            style={{ textShadow: "1px 2px 3px black" }}
          >
            Nous avons 8 commme fili&egrave;res
          </Typography>
        </div>
      </div>

      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/riz-epis.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Riziculture
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Riziculture",
                      "Culture du riz",
                      "/image/filiere/riz-epis.jpg"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/lait.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Laiterie
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Laiterie", "le lait", "/image/filiere/lait.jpg")
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/Apiculture.png"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Apiculture
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Apiculture",
                      "Les abeilles",
                      "/image/filiere/Apiculture.png"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/viticulture.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Viticulture
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Viticulture",
                      "Culture du vin",
                      "/image/filiere/viticulture.jpg"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/pisciculture.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Pisciculture
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Pisciculture",
                      "Les poissons",
                      "/image/filiere/pisciculture.jpg"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/huilleEssentielle.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Huile Essentielle
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Huille essentielle",
                      "",
                      "/image/filiere/huilleEssentielle.jpg"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/vannerie.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Vannerie
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal("Vannerie", "", "/image/filiere/vannerie.jpg")
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b  border-blue-gray-100 mb-5">
            <Card shadow={false} className="p-0">
              <CardBody className="p-0 pb-5">
                <Typography
                  variant="h3"
                  className="leading-[45px] mb-4 !text-gray-900 "
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={256}
                        height={256}
                        src="/image/filiere/maraichere.jpg"
                        className="w-12 object-cover h-12 rounded-lg"
                        alt="photo"
                      />
                    </div>
                    <div>
                      <Typography
                        className="leading-[45px] mb-4 !text-gray-900 "
                        variant="h3"
                      >
                        Culture marraich&egrave;re
                      </Typography>
                    </div>
                  </div>
                </Typography>
                <Typography className="text-normal mb-4 !text-base text-blue-gray-500 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Typography>
                <Button
                  color="green"
                  variant="outlined"
                  onClick={() =>
                    openModal(
                      "Culture marraichère",
                      "",
                      "/image/filiere/maraichere.jpg"
                    )
                  }
                >
                  Voir plus...
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
