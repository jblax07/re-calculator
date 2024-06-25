import React from "react";
import { IconButton } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  return (
    <CopyToClipboard text={textToCopy}>
      <IconButton boxSize={7} aria-label="Copy" icon={<CopyIcon />} />
    </CopyToClipboard>
  );
};

export default CopyButton;
