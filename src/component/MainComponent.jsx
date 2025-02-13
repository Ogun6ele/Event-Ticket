const MainComponent = ({ heading, children, buttonPrevious, buttonNext, onNext, onPrevious, disableNext }) => {
  return (
    <main>
      <div className="heading">
        <h1>{heading}</h1>
        <p>Step 1/3</p>
      </div>
      <div className="steps-meter">
        <span style={{ width: `33%` }}></span>
      </div>
      
      <div className="content">
        {children}
        <div className="buttons">
          <button className="previous" onClick={onPrevious}>{buttonPrevious}</button>
          <button className="next" onClick={onNext} >{buttonNext}</button>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
