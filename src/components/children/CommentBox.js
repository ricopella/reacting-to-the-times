import React from "react";

const CommentBox = props => <div className="form-group">
    <input className="form-control" name="commentName" placeholder="Name"/>
    <button
        {...props}
        style={{
        float: "right"
    }}
        className="btn btn-success">Submit</button>
</div>

export default CommentBox;