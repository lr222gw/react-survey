import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, editAnswercallback, deleteAnswercallback } = props;
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editAnswercallback={editAnswercallback} deleteAnswercallback={deleteAnswercallback} answerId={answerItem.id} key={i} />
      ))}
    </ul>
  );
}
