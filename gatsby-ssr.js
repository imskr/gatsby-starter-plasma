const React = require("react");
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="imskr"
      data-description="Support me on Buy me a coffee!"
      data-message="Thank you for visiting. You can now buy me a coffee!"
      data-color="#79D6B5"
      data-position="right"
      data-x_margin="28"
      data-y_margin="18"
    ></script>
  ]);
};
