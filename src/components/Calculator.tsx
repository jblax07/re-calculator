import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Checkbox,
} from "@chakra-ui/react";

const Calculator: React.FC = () => {
  const [homeValue, setHomeValue] = useState<number>(0);
  const [additionalPhotos, setAdditionalPhotos] = useState<number>(0);
  const [aerialPhotos, setAerialPhotos] = useState<number>(0);
  const [isMatterport, setIsMatterport] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [virtualStaging, setVirtualStaging] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [photoCost, setPhotoCost] = useState<number>(0);
  const [matterCost, setMatterCost] = useState<number>(0);
  const [addPhoto, setAddPhoto] = useState<number>(0);
  const [videoCost, setVideoCost] = useState<number>(0);
  const [closingPayment, setClosingPayment] = useState<number>(0);
  const [includeAssistant, setIncludeAssistant] = useState<boolean>(false);

  const calculateTotal = () => {
    const minRate = 250;
    const matterRate = 0.00025;
    const defaultPhotoRate = 0.0008;
    const photoRateAdjustment = 0.000035;
    const defaultVideoRate = 0.00085;
    const videoRateAdjustment = 0.00005;
    const minVideoRate = 650;
    const extraPhotoCost = 10;

    let photoRate =
      defaultPhotoRate -
      (photoRateAdjustment * Math.max(homeValue - 200000, 0)) / 100000;
    photoRate = Math.max(photoRate, 0.0005);

    let photoCost = Math.max(homeValue * photoRate, minRate);
    setPhotoCost(photoCost);

    let addPhoto = additionalPhotos * extraPhotoCost;
    setAddPhoto(addPhoto);
    let aerialCost = aerialPhotos * extraPhotoCost;

    let matterCost = isMatterport ? homeValue * matterRate + 50 : 0;
    setMatterCost(matterCost);

    let videoRate =
      defaultVideoRate -
      (videoRateAdjustment * Math.max(homeValue - 200000, 0)) / 100000;
    videoRate = Math.max(videoRate, 0.0004);

    let videoCost = isVideo
      ? Math.max(homeValue * videoRate, minVideoRate - photoCost)
      : 0;
    setVideoCost(videoCost);

    let virtualCost = virtualStaging * 25;

    let totalCost =
      photoCost + matterCost + videoCost + addPhoto + aerialCost + virtualCost;
    totalCost = Math.floor(totalCost / 5) * 5; // Rounding to the nearest 5 for presentation

    setTotalCost(totalCost);

    // Calculate the delayed payment at closing
    let remainingBalance = Math.max(totalCost - 650, 0);
    let convenienceFee = remainingBalance * 0.15;
    let paymentAtClosing = remainingBalance + convenienceFee;
    setClosingPayment(paymentAtClosing);
  };

  useEffect(() => {
    calculateTotal();
  }, [
    homeValue,
    additionalPhotos,
    aerialPhotos,
    isMatterport,
    isVideo,
    virtualStaging,
    includeAssistant,
  ]);

  // Function to increment the home value
  const incrementHomeValue = () => {
    setHomeValue((prev) => prev + 50000);
  };

  // Function to decrement the home value
  const decrementHomeValue = () => {
    setHomeValue((prev) => Math.max(0, prev - 50000)); // Prevent negative values
  };

  const incrementVirtualStaging = () => {
    setVirtualStaging((prev) => prev + 1);
  };

  const decrementVirtualStaging = () => {
    setVirtualStaging((prev) => Math.max(0, prev - 1)); // Prevent negative values
  };

  // Calculate payments based on the total cost
  const photographerPay = includeAssistant
    ? (photoCost + matterCost) * 0.5
    : (photoCost + matterCost) * 0.7;
  const assistPay = includeAssistant ? (photoCost + matterCost) * 0.2 : 0;
  const editorPay = photoCost * 0.06;

  const videographerPay = isVideo ? photoCost * 0.7 : 0;
  const videoEditorPay = isVideo ? photoCost * 0.1 + 75 : 0;

  const companyProfit =
    totalCost -
    (photographerPay +
      assistPay +
      editorPay +
      videographerPay +
      videoEditorPay);

  return (
    <div>
      <hr></hr>
      <p></p>
      <Heading size="md" color="lightblue">
        Estimated Listing Price:{" "}
      </Heading>
      <InputGroup>
        <InputLeftAddon pointerEvents="none" color="lightblue" fontSize="1.2em">
          $
        </InputLeftAddon>
        <Input
          color="lightblue"
          value={homeValue}
          onChange={(e) => setHomeValue(Number(e.target.value))}
          placeholder="300000"
        />
      </InputGroup>

      <p></p>
      <Heading size="md" color="lightblue">
        Virtual Staging:{" "}
      </Heading>
      <InputGroup>
        <InputLeftAddon pointerEvents="none" color="lightblue" fontSize="1.2em">
          #
        </InputLeftAddon>
        <Input
          color="lightblue"
          type="number"
          value={virtualStaging}
          onChange={(e) => setVirtualStaging(Number(e.target.value))}
        />
      </InputGroup>

      <Checkbox
        checked={isMatterport}
        onChange={(e) => setIsMatterport(e.target.checked)}
      >
        {" "}
        Matterport + Floor Plan Schematic
      </Checkbox>
      <p></p>
      <Checkbox
        type="checkbox"
        checked={isVideo}
        onChange={(e) => setIsVideo(e.target.checked)}
      >
        Video
      </Checkbox>
      <p></p>
      <hr></hr>
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      <p></p>
      <hr></hr>
      {/* {closingPayment > 0 && (
        <>
          <h4>$650 Deposit</h4>
          <h4>${closingPayment.toFixed(2)} At Closing if Elected</h4>
          <h4>${(closingPayment + 650).toFixed(2)} Total Paid</h4>
        </>
      )}
      {!closingPayment && <h4></h4>} */}
      {/* <hr></hr> */}
      {/* <span>
        We offer a delayed payment plan for those bigger shoots: Pay $650
        upfront and defer the remaining balance with a 15% convenience fee on
        the remaining balance at closing.
      </span> */}
      {/* <hr></hr> */}
      <p></p>
      <Heading>Payment Distribution</Heading>
      <p></p>
      <hr></hr>
      <Checkbox
        type="checkbox"
        checked={includeAssistant}
        onChange={(e) => setIncludeAssistant(e.target.checked)}
      >
        Include Assistant Pay
      </Checkbox>
      <hr></hr>
      <p>
        <Heading size="xs">
          Photographer Pay: ${photographerPay.toFixed(2)}
        </Heading>
      </p>
      {includeAssistant && (
        <p>
          <Heading size="xs">Assistant Pay: ${assistPay.toFixed(2)}</Heading>
        </p>
      )}
      <p>
        <Heading size="xs">Editor Pay: ${editorPay.toFixed(2)}</Heading>
      </p>
      {isVideo && (
        <p>
          <Heading size="xs">
            Videographer Pay: ${videographerPay.toFixed(2)}
          </Heading>
        </p>
      )}
      {isVideo && (
        <p>
          <Heading size="xs">
            Video Editor Pay: ${videoEditorPay.toFixed(2)}
          </Heading>
        </p>
      )}
      <Heading size="md"> Company Profit: ${companyProfit.toFixed(2)}</Heading>
      <hr></hr>
    </div>
  );
};

export default Calculator;