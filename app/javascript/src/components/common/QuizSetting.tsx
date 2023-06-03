import React, { useState } from 'react'
import quizApi from '../../apis/quiz'
import useSwr from 'swr'

const QuizSetting = (props: any) => {
  const [correctMark, setCorrectMark] = useState<number>(1)
  const [negativeMarking, setNegativeMarking] = useState<boolean>(false)
  const [negativeMark, setNegativeMark] = useState<number>(0)
  const [duration, setDuration] = useState<number>(2)

  const filterOutNegativeNumber = (setState: any, value: number, minValue = 0) => {
    if (value > minValue) {
      setState(value)
    }
  }
  const updateQuizSetting = async () => {
    const quizSetting = {
      quiz_id: props.quizId,
      correct_mark: correctMark,
      negative_mark: Number(negativeMarking) * negativeMark,
      duration: duration * 60,
      negative_marking: negativeMarking,
      // start_time: startTime || null,
      // end_time: endTime || null
    }

    await quizApi.updateQuizSettings(props.quizId, quizSetting)
    mutate()
  }

  const getQuizSetting = async () => {
    const response = await quizApi.getQuizSettings(props.quizId)
    setCorrectMark(response.data.quiz_setting.correct_mark)
    setNegativeMarking(response.data.quiz_setting.negative_marking)
    setNegativeMark(response.data.quiz_setting.negative_mark)
    setDuration(response.data.quiz_setting.duration / 60)
    return response.data
  }

  const { mutate, isLoading } = useSwr(`/quiz/${props.quizId}/setting`, getQuizSetting)

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <section id="quiz-setting" className="m-2 border p-2">
            <input
              type="number"
              placeholder="correct mark"
              value={correctMark}
              onChange={e => filterOutNegativeNumber(setCorrectMark, e.currentTarget.valueAsNumber)}
            />
            <input
              type="checkbox"
              placeholder="negative marking"
              checked={negativeMarking}
              onChange={() => setNegativeMarking(!negativeMarking)}
            />
            <input
              type="number"
              disabled={!negativeMarking}
              placeholder="negative mark"
              value={negativeMark! * Number(negativeMarking) || 0}
              onChange={e =>
                filterOutNegativeNumber(setNegativeMark, e.currentTarget.valueAsNumber)
              }
            />
            <input type="datetime-local" placeholder="starts at" />
            <input type="datetime-local" placeholder="ends at" />
            <input
              type="number"
              placeholder="duration in minutes"
              value={duration}
              onChange={e => filterOutNegativeNumber(setDuration, e.currentTarget.valueAsNumber, 2)}
            />
            <div>
              <p>
                This Quiz will have <b className="text-green-500">{correctMark} marks awarded</b>{' '}
                for every correct correct answer.
                {negativeMarking ? (
                  <>
                    For every wrong answer{' '}
                    <b className="text-red-500">{negativeMark} marks will be deducted</b>.
                  </>
                ) : (
                  ''
                )}
                Duration of this quiz will be <b className="text-blue-500">{duration} minutes</b>.
              </p>
            </div>
            <button onClick={updateQuizSetting}>update setting</button>
          </section>
        </>
      )}
    </>
  )
}

export default QuizSetting
