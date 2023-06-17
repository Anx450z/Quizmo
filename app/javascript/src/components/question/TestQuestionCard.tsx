import React, { useEffect, useState } from 'react'
import OptionPreview from '../../option/OptionPreview'
import ReactQuill from 'react-quill'
import optionApi from '../../apis/option'

const TestQuestionCard = (props: any) => {
  const [mark, setMark] = useState(false)
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

  const handleClearOptions = async () => {
    await optionApi.clearOption(props.id)
    props.mutate()
  }

  const handleMarkQuestion = () => {
    setMark(!mark)
    let allMarkedQuestions = props.markedQuestions

      if(mark && allMarkedQuestions.has(props.id)){
        allMarkedQuestions.delete(props.id)
        props.setMarkedQuestions(allMarkedQuestions)
      }else{
        props.setMarkedQuestions(
          (prevMarkedQuestions: any) => new Set([...prevMarkedQuestions, props.id])
        )
      }
  }


  return (
    <div key={props.id} id={'question' + props.id} className="show-question">
      <div className="flex items-center justify-between align-middle">
        <div className="flex items-center justify-center align-middle">
          <div className="pill bg-slate-200 px-3 text-slate-500">{props.index + 1}</div>
          <label>Question</label>
        </div>
        <div className="flex items-center justify-center align-middle">
          <label className="pill-button" onClick={handelNextQuestion}>
            &lt;
          </label>
          <label className="pill-button" onClick={handelPreviousQuestion}>
            &gt;
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
        <label className="pill-button" onClick={handleClearOptions}>
          clear
        </label>
        <label className="pill-button" onClick={handleMarkQuestion}>
         {props.markedQuestions.has(props.id) ? 'unmark' : 'mark for review'}
        </label>
      </div>
    </div>
  )
}

export default TestQuestionCard
