import { TutorialContentData } from "../../Constants/TutorialData/TutorialContentData/TutorialContent";
import { useState } from "react";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import "./TutorialContent.css";
import Like from "../../LikeComponent/Like";
import Footer from "../../Footer/Footer";
import { TutorialHeader } from "../TutorialHeaderComponent/TutorialHeader";

export const TutorialContent = () => {
  const [isActive, setIsActive] = useState(false);
  function toggle() {
    // if (isActive === i){
    //     setIsActive(null)
    // }
    setIsActive(!isActive);
  }
  return (
    <div>
      <div className="docs-content-container">
        <TutorialHeader />
        <div>
          {TutorialContentData.map((item) => (
            <div>
              {item.header ? <h1>{item.header}</h1> : <h2>{item.header1}</h2>}

              {item.description ? <p>{item.description}</p> : null}

              {item.code4 ? (
                <code className="tutorial-content-code-container">
                  {item.code4.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code21 ? (
                <code className="tutorial-content-code-container">
                  {item.code21.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.Ulist4 ? (
                <>
                  {item.Ulist4.map((each) => (
                    <ul>
                      <li>{each}</li>
                    </ul>
                  ))}
                </>
              ) : null}

              {item.accordiontitle ? (
                <div>
                  <div onClick={() => toggle()}>
                    <p className="accordion-title accordion-color">
                      {isActive ? <MdArrowDropDown /> : <MdArrowRight />}{" "}
                      {item.accordiontitle}
                    </p>
                  </div>
                  {isActive && (
                    <>
                      <p>{item.accordiondescription}</p>
                      <ol className="tutorial-content-accordion-list-container">
                        {item.accordionlist.map((list) => (
                          <li>{list}</li>
                        ))}
                      </ol>
                      <code className="tutorial-content-code-container">
                        <pre>{item.accordioncode}</pre>
                      </code>
                      <ol className="tutorial-content-accordion-list-container">
                        <li>{item.accordionlist1}</li>
                      </ol>
                      <div className="doc-content-tip-container">
                        <h4>{item.tipheader}</h4>
                        <p>{item.tipdescription}</p>
                      </div>
                      <code className="tutorial-content-code-container">
                        {item.accordioncode1.map((code) => (
                          <pre>{code}</pre>
                        ))}
                      </code>
                      <ol className="tutorial-content-accordion-list-container">
                        {item.accordionlist2.map((list1) => (
                          <li>{list1}</li>
                        ))}
                      </ol>
                      <code className="tutorial-content-code-container">
                        {item.accordioncode2.map((code1) => (
                          <pre>{code1}</pre>
                        ))}
                      </code>
                      <p>{item.accordiondescription1}</p>
                      <p>{item.accordiondescription2}</p>
                    </>
                  )}
                </div>
              ) : null}

              {item.tipheader ? (
                <div className="doc-content-tip-container">
                  <h4>{item.tipheader}</h4>
                  <p>{item.tipdescription}</p>
                  {item.tipcode ? (
                    <code className="tutorial-content-code-container">
                      {item.tipcode.map((tipcode) => (
                        <pre>{tipcode}</pre>
                      ))}
                    </code>
                  ) : null}
                  {item.tipdescription1 ? <p>{item.tipdescription1}</p> : null}
                </div>
              ) : null}

              {item.srcfile2 ? <img src={item.srcfile2} alt="" /> : null}

              {item.description1 ? <p>{item.description1}</p> : null}

              {item.code ? (
                <code className="tutorial-content-code-container">
                  {item.code.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code14 ? (
                <code className="tutorial-content-code-container">
                  {item.code14.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code15 ? (
                <code className="tutorial-content-code-container">
                  {item.code15.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code17 ? (
                <code className="tutorial-content-code-container">
                  {item.code17.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.Ulist ? (
                <>
                  {item.Ulist.map((each) => (
                    <ul>
                      <li>{each}</li>
                    </ul>
                  ))}
                </>
              ) : null}

              {item.code35 ? (
                <code className="tutorial-content-code-container">
                  {item.code35.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description2 ? <p>{item.description2}</p> : null}

              {item.code2 ? (
                <code className="tutorial-content-code-container">
                  {item.code2.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code16 ? (
                <code className="tutorial-content-code-container">
                  {item.code16.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code18 ? (
                <code className="tutorial-content-code-container">
                  {item.code18.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code22 ? (
                <code className="tutorial-content-code-container">
                  {item.code22.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code24 ? (
                <code className="tutorial-content-code-container">
                  {item.code24.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code25 ? (
                <code className="tutorial-content-code-container">
                  {item.code25.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code30 ? (
                <code className="tutorial-content-code-container">
                  {item.code30.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.Olist ? (
                <>
                  {item.Olist.map((each) => (
                    <ol className="tutorial-content-accordion-list-container">
                      <li>{each}</li>
                    </ol>
                  ))}
                </>
              ) : null}

              {item.Ulist1 ? (
                <>
                  {item.Ulist1.map((each) => (
                    <ul>
                      <li>{each}</li>
                    </ul>
                  ))}
                </>
              ) : null}

              {item.description3 ? <p>{item.description3}</p> : null}
              {item.code3 ? (
                <code className="tutorial-content-code-container">
                  {item.code3.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code7 ? (
                <code className="tutorial-content-code-container">
                  {item.code7.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code23 ? (
                <code className="tutorial-content-code-container">
                  {item.code23.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code32 ? (
                <code className="tutorial-content-code-container">
                  {item.code32.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code36 ? (
                <code className="tutorial-content-code-container">
                  {item.code36.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.Olist2 ? (
                <>
                  {item.Olist2.map((each) => (
                    <ol className="tutorial-content-accordion-list-container">
                      <li>{each}</li>
                    </ol>
                  ))}
                </>
              ) : null}

              {item.Olist3 ? (
                <>
                  {item.Olist3.map((each) => (
                    <ol className="tutorial-content-accordion-list-container">
                      <li>{each}</li>
                    </ol>
                  ))}
                </>
              ) : null}

              {item.description4 ? <p>{item.description4}</p> : null}
              {item.code1 ? (
                <code className="tutorial-content-code-container">
                  {item.code1.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code5 ? (
                <code className="tutorial-content-code-container">
                  {item.code5.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code8 ? (
                <code className="tutorial-content-code-container">
                  {item.code8.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code19 ? (
                <code className="tutorial-content-code-container">
                  {item.code19.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code26 ? (
                <code className="tutorial-content-code-container">
                  {item.code26.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code31 ? (
                <code className="tutorial-content-code-container">
                  {item.code31.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code33 ? (
                <code className="tutorial-content-code-container">
                  {item.code33.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code37 ? (
                <code className="tutorial-content-code-container">
                  {item.code37.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.tipHeader ? (
                <div className="doc-content-tip-container">
                  <h3>{item.tipHeader}</h3>
                  <p>{item.tipDescription}</p>
                </div>
              ) : null}
              {item.srcfile ? <img src={item.srcfile} alt="" /> : null}
              {item.description5 ? <p>{item.description5}</p> : null}

              {item.code9 ? (
                <code className="tutorial-content-code-container">
                  {item.code9.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code20 ? (
                <code className="tutorial-content-code-container">
                  {item.code20.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code27 ? (
                <code className="tutorial-content-code-container">
                  {item.code27.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code34 ? (
                <code className="tutorial-content-code-container">
                  {item.code34.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.Ulist2 ? (
                <>
                  {item.Ulist2.map((each) => (
                    <ul>
                      <li>{each}</li>
                    </ul>
                  ))}
                </>
              ) : null}

              {item.srcfile1 ? <img src={item.srcfile1} alt="" /> : null}

              {item.header3 ? (
                <a href="/" className="header-component-list-anchor">
                  <h3>{item.header3}</h3>
                </a>
              ) : null}
              {item.description6 ? <p>{item.description6}</p> : null}

              {item.code6 ? (
                <code className="tutorial-content-code-container">
                  {item.code6.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code28 ? (
                <code className="tutorial-content-code-container">
                  {item.code28.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description7 ? <p>{item.description7}</p> : null}

              {item.code10 ? (
                <code className="tutorial-content-code-container">
                  {item.code10.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.code29 ? (
                <code className="tutorial-content-code-container">
                  {item.code29.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description8 ? <p>{item.description8}</p> : null}

              {item.code38 ? (
                <code className="tutorial-content-code-container">
                  {item.code38.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description9 ? <p>{item.description9}</p> : null}

              {item.code39 ? (
                <code className="tutorial-content-code-container">
                  {item.code39.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description10 ? <p>{item.description10}</p> : null}

              {item.code11 ? (
                <code className="tutorial-content-code-container">
                  {item.code11.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description11 ? <p>{item.description11}</p> : null}

              {item.Ulist3 ? (
                <>
                  {item.Ulist3.map((each) => (
                    <ul>
                      <li>{each}</li>
                    </ul>
                  ))}
                </>
              ) : null}

              {item.description12 ? <p>{item.description12}</p> : null}

              {item.code12 ? (
                <code className="tutorial-content-code-container">
                  {item.code12.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.description13 ? <p>{item.description13}</p> : null}

              {item.Olist1 ? (
                <>
                  {item.Olist1.map((each) => (
                    <ol className="tutorial-content-accordion-list-container">
                      <li>{each}</li>
                    </ol>
                  ))}
                </>
              ) : null}

              {item.description14 ? <p>{item.description14}</p> : null}

              {item.code13 ? (
                <code className="tutorial-content-code-container">
                  {item.code13.map((code) => (
                    <pre>{code}</pre>
                  ))}
                </code>
              ) : null}

              {item.header31 ? <h3>{item.header31}</h3> : null}
              {item.description15 ? <p>{item.description15}</p> : null}
              {item.description16 ? <p>{item.description16}</p> : null}
              {item.description17 ? <p>{item.description17}</p> : null}
            </div>
          ))}
        </div>
        <Like />
      </div>
      <Footer />
    </div>
  );
};
