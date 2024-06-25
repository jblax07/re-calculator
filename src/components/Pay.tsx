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