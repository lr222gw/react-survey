// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, spend_time, review, },
  editAnswercallback,
  deleteAnswercallback,
  answerId
}) {


  return (
    <li>
      <article className="answer">
        <div>
          <button style={{float:"right"}} onClick={() => editAnswercallback(answerId)}>Edit</button>
          <button style={{float:"right"}} onClick={() => deleteAnswercallback(answerId)}>Delete</button>
          <h3>{username || "Anon"} said:</h3>
        </div>
        <div>
          <p>
            <em>How do you rate your rubber duck colour?</em>
            <span className="answer__line">{color}</span>
          </p>
        </div>
        <div>
          <p>
            <em>How do you like to spend time with your rubber duck?</em>
          </p>
          <ItemsList list={spend_time} />
        </div>
        <div>
          <p>
            <em>What else have you got to say about your rubber duck?</em>
            <span className="answer__line">{review}</span>
          </p>
        </div>
      </article>
    </li>
  );
}
