import React from "react";
import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react"

function Test(props) {
  //test
  const [card, setCard] = useState({});
  const [showCardView, setShowCardView] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleCard = (card) => {
    setCard(card)
    setShowCardView(true)
  }

  return (
    // <Card className="max-w-[400px]">
    // <div className="flex basis-1/6">
    <div className="h-full">
    {/* <Card className="m-3" isPressable onPress={() => handleCard(props.item)}> */}
    <Card className="m-3" isPressable onPress={onOpen}>
    <CardHeader className="flex gap-3">
      <div className="shrink-0" > 
      <Image
        alt="nextui logo"
        height={40}
        radius="full"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width={40}
      />
      </div>
      <div className="flex flex-col text-left">
        <p className="text-md">{props.item.name}</p>
        <p className="text-small text-default-500">{props.item.social_media}</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>{props.item.message}</p>
    </CardBody>
    {/* <Divider/>
    <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </CardFooter> */}
  </Card>
    {/* pass the card object and the updater function as props from state */}
    {/* {showCardView ? <CardView card={card} setShowCardView={setShowCardView}/> : null} */}
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.item.name}</ModalHeader>
              <ModalBody>
                <p> 
                {props.item.message}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
  </div>
  );
}

export default Test;