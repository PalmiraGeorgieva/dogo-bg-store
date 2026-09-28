import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./FAQ.css";



function FAQ() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const faqItems = [
        {
            question: t("faq.orderQuestion"),
            answer: t("faq.orderAnswer"),
        },
        {
            question: t("faq.deliveryQuestion"),
            answer: t("faq.deliveryAnswer"),
        },
        {
            question: t("faq.returnQuestion"),
            answer: t("faq.returnAnswer"),
        },
        {
            question: t("faq.paymentQuestion"),
            answer: t("faq.paymentAnswer"),
        },
        {
            question: t("faq.sizeQuestion"),
            answer: t("faq.sizeAnswer"),
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-page">
            <button
                type="button"
                className="faq-back"
                onClick={() => navigate(-1)}
            >
                ← {t("faq.back")}
            </button>
            <div className="faq-header">
                <h1>{t("faq.title")}</h1>
                <p>
                   {t("faq.description")}
                </p>
            </div>
            <div className="faq-list">
                {faqItems.map((item, index) => (
                    <div
                       className={`faq-item ${
                         openIndex === index ? "open" : ""
                       }`}
                       key={item.question}
                    >
                        <button 
                          className="faq-question"
                          onClick={() => toggleQuestion(index)}
                          >
                            <span>{item.question}</span>
                            <span className="faq-icon">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>   
                ))}
            </div>
        </section>
    );
}

export default FAQ;