/* eslint-disable react/prop-types */
import  { useState, useCallback, memo } from "react";

const initialComments = [
  {
    id: 1,
    text: "This is a comment",
    children: [
      {
        id: 2,
        text: "This is a reply",
        children: [
          {
            id: 3,
            text: "This is a nested reply",
            children: [],
          },
        ],
      },
    ],
  },
];

const NestedComments = () => {
  const [comments, setComments] = useState(initialComments);
  // add a new comment or reply

  const handleReply = useCallback((parentId, text) => {
    const newComment = { id: Date.now(), text, children: [] };
    console.log("newComment", newComment);

    function addToTree(nodes, parentId) {
      console.log("nodes", nodes);
      console.log("parentId", parentId);
      return nodes.map((node) => {
        if (node.id == parentId) {
          return { ...node, children: [...node.children, newComment] };
        }
        return { ...node, children: addToTree(node.children, parentId) };
      });
    }

    console.log("parentId", parentId);

    setComments((prev) =>
      parentId ? addToTree(prev, parentId) : [...prev, newComment]
    );
  }, []);

  const handleDelete = useCallback((id) => {
    function removeFromTree(nodes) {
      return nodes
        .filter((node) => node.id != id)
        .map((node) => ({
          ...node,
          children: removeFromTree(node.children),
        }));
    }

    setComments((prev) => removeFromTree(prev));
  }, []);
  // delete a comment
  return (
    <div>
      <h2>Nested Comments</h2>
      <input
        type="text"
        placeholder="Write a comment.."
        onKeyDown={(e) => {
          if (e.key == "Enter" && e.target.value.trim()) {
            handleReply(null, e.target.value);
            e.target.value = "";
          }
        }}
      />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReply={handleReply}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const Comment = memo(({ comment, onDelete, onReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText("");
      setShowReply(false);
    }
  };
  return (
    <div>
      <p>{comment.text}</p>
      <button onClick={() => setShowReply(!showReply)}>Reply</button>
      <button onClick={() => onDelete(comment.id)}>Delete</button>

      {showReply && (
        <div>
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={"Write a reply.."}
          />
          <button onClick={handleReply}>Submit</button>
        </div>
      )}

      {comment.children.length > 0 && (
        <div style={{ marginLeft: 10, border: "1px solid red" }}>
          {comment.children.map((child) => (
            <Comment
              key={child.id}
              comment={child}
              onReply={onReply}
              onDelete={onDelete}
            />
          ))}{" "}
        </div>
      )}
    </div>
  );
});

export default NestedComments;
