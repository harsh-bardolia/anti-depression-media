import React from "react";
import QuestionsSlide from "./components/QuestionsSlide";

const Quizing = () => {

  const Questions=[
    {
        ques : "How often have you had little interest or pleasure in doing things?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often have you been bothered by feeling tired or having little energy?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often do you feel that all your hobbies and interests are boring and worthless and nothing can stimulate you?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "Are you afraid of forming a new relationship and feel scared of attachment?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often you have an anxiety attack (suddenly feeling fear or panic)?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often have you been bothered by feeling nervous, anxious or on edge?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often have you been bothered by feeling afraid as if something awful might happen?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
    {
        ques : "How often do you feel guilty or tearful for no reason?",
        opt : [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly Everyday"
        ]
    },
]
  return (
    <>
        <QuestionsSlide slides={Questions} />
    </>
  );
};

export default Quizing;
