import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DateCopy: React.FC = () => {
  const toast = useToast();

  const getCurrentDateFormatted = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day} . Real Estate . Client . Address`;
  };

  const textToCopy = getCurrentDateFormatted();

  return (
    <CopyToClipboard text={textToCopy}>
      <Button
        colorScheme="green"
        variant="solid"
        size="sm"
        onClick={() =>
          toast({
            title: "Copied",
            description: "Date and details copied to clipboard",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
        leftIcon={<CopyIcon />}
      >
        Copy Date
      </Button>
    </CopyToClipboard>
  );
};

export default DateCopy;
