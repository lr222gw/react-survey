import { useState } from "react";
import AnswersList from "./AnswersList";




function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    color: "",
    consent: false,
    "spend-time" : {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    }
  });

  function onFormChange(event){
    console.log("onChange");
    
    if (event.target.type == "checkbox")
    {
      // Since checkbox values can be stored in a object, we have to do a "Spread" on that object instead if that's the case...
      if (typeof(formData[event.target.name]) == typeof({}) )
        setFormData({...formData, [event.target.name]: {...formData[event.target.name], [event.target.value]:event.target.checked}})
      else 
        setFormData({...formData, [event.target.name]: event.target.checked})
    }
    else 
    {
      setFormData({...formData, [event.target.name]: event.target.value})
    }
  }
  function onSubmitForm(event){
    event.preventDefault();
    console.log("onSubmit");
    console.log(formData);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
        /* answers should go here */
        // <AnswersList />
        }
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form" onSubmit={onSubmitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__radio-group">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" 
                onChange={onFormChange} 
                checked={formData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" 
                onChange={onFormChange} 
                checked={formData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" 
                onChange={onFormChange} 
                checked={formData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" 
                onChange={onFormChange} 
                checked={formData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>

          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" 
                    onChange={onFormChange} 
                    checked={formData["spend-time"]["swimming"]}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" 
                    onChange={onFormChange} 
                    checked={formData["spend-time"]["bathing"]}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" 
                    onChange={onFormChange} 
                    checked={formData["spend-time"]["chatting"]}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" 
                    onChange={onFormChange} 
                    checked={formData["spend-time"]["noTime"]}
                  />
                  I don't like tospend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>

          <label>Put your name here (if you feel like it):
            <input type="text" name="username" value="" onChange={onFormChange}  />
          </label>
          
          <label>Leave us your email pretty please??
            <input type="email" name="email" value="" onChange={onFormChange} />
          </label>

          <label className="form-control">
            I agree you can take my data and do whatever!
            <input type="checkbox" name="consent"
              onChange={onFormChange}
              checked={formData.consent}
            />
          </label>

          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>  
      </section>
    </main>
  );
}

export default Survey;
