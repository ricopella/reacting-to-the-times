import React from "react";

const Textarea = props => <textarea
    className="form-control"
    rows="2"
    {...props}
    name="commentBody"
    placeholder="Example: Great Article!"/>

export default Textarea;