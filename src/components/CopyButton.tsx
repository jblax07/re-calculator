import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const toast = useToast();
  return (
    <CopyToClipboard text={textToCopy}>
      <Button
        colorScheme="green"
        variant="solid"
        size="sm"
        onClick={() =>
          toast({
            title: "Copied",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        <CopyIcon />
      </Button>
    </CopyToClipboard>
  );
};

export default CopyButton;
