import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, editAnswercallback } = props;
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editAnswercallback={editAnswercallback} answerId={i} key={i} />
      ))}
    </ul>
  );
}
