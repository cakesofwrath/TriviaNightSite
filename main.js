var Slides = React.createClass({
  getInitialState: function() {
    return {questions: null};
  },
  componentDidMount: function() {
    $.getJSON("questions.json", (data) => {
      let questions = data.open;
      this.setState({
        questions
      });
      // console.log(this.state);
      console.log(Reveal);
    });
  },
  render: function() {
    if(this.state.questions) {
      console.log("render");
      var questions = this.state.questions;
      return (
        <div className="reveal">
          <div className="slides">
            {Object.keys(questions).map((k) => {
              return (<section> {[
                [(<section><h1>{k}</h1></section>)].concat(
                  questions[k].map((val, i) => {
                    let f = function(v) {return {__html: v.q}};
                    return (
                      <section>
                        <p dangerouslySetInnerHTML={f(val)} className="fragment"></p>
                        <p className="fragment">{val.a}</p>
                      </section>
                    );
                  })
                )
              ]} </section> );
            })}
          </div>
        </div>
      );
    }
    else {
      return <div>Loading...</div>
    }
  }
});


ReactDOM.render(
  <Slides />,
  document.body
);
