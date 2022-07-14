import React from "react";
import Button from "./Button";

const Reply = React.forwardRef((props, ref) => {
    const { inner, func, imageSrc, textholder, original } = props
  return (
    <div className="replyComponent">
      <img src={imageSrc} alt="profileImage" />
      <textarea placeholder={textholder} ref={ref} defaultValue={original} cols="10" rows="5"></textarea>
      <Button inner={inner} func={func} />
    </div>
  );
});

export default Reply;
