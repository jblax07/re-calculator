import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

interface PasteButtonProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const PasteButton: React.FC<PasteButtonProps> = ({ inputRef }) => {
  const toast = useToast();

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (inputRef.current) {
        inputRef.current.value = text;
      }
      toast({
        title: "Pasted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to paste",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Button
      colorScheme="green"
      variant="solid"
      size="md"
      padding="15px"
      onClick={handlePasteClick}
    >
      <CopyIcon />
    </Button>
  );
};

export default PasteButton;
