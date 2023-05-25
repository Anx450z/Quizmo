import React from 'react'
import OptionPreview from '../../option/OptionPreview'
import ReactQuill from 'react-quill'

const TestQuestionCard = (props: any) => {
  const handelNextQuestion = () => {
    if (props.quizIndex < props.totalQuestions - 1) {
      props.setQuizIndex(props.quizIndex + 1)
    } else {
      props.setQuizIndex(0)
    }
  }
  const handelPreviousQuestion = () => {
    if (props.quizIndex > 0) {
      props.setQuizIndex(props.quizIndex - 1)
    } else {
      props.setQuizIndex(props.totalQuestions - 1)
    }
  }

  return (
    <div key={props.id} id={'question' + props.id} className="valid-question">
      <div className="flex items-center justify-between align-middle">
        <div className="flex items-center justify-center align-middle">
          <div className="pill bg-slate-200 text-slate-500 px-3">{props.index + 1}</div>
          <label>Question</label>
        </div>
        <div className="flex items-center justify-center align-middle">
          <label className="pill-button" onClick={handelNextQuestion}>
            next
          </label>
          <label className="pill-button" onClick={handelPreviousQuestion}>
            previous
          </label>
        </div>
      </div>
      <div className="w-full">
        <ReactQuill readOnly value={props.question} theme="bubble" />
      </div>
      <OptionPreview
        options={props.options}
        mutate={props.mutate}
        quiz_id={props.quiz_id}
        question_id={props.id}
      />
      <div className="flex items-center justify-between align-middle">
        <label className="pill-button">clear</label>
        <label className="pill-button">mark for review</label>
      </div>
    </div>
  )
}

export default TestQuestionCard
