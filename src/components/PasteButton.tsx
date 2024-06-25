import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

interface PasteButtonProps {
  inputRef: React.RefObject<HTMLInputElement>;
  onPaste: (pastedText: string) => void;
}

const PasteButton: React.FC<PasteButtonProps> = ({ inputRef, onPaste }) => {
  const toast = useToast();

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (inputRef.current) {
        inputRef.current.value = text;
        onPaste(text); // Trigger the state update in the parent component
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
