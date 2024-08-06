import React from "react";
import ImageActionBanner from "../../../../components/module/ImageActionBanner";
function page() {
  return (
    <ImageActionBanner
      title="Understanding a website"
      description="Customer engagement: A website is an online store that sells your products or services to customers. It helps in customer engagement by providing them with all the information they need about your product, service and company."
      onButtonClick="/Learn/DigitalMarketing/Website"
      buttonText="Module"
    ></ImageActionBanner>
  );
}

export default page;
