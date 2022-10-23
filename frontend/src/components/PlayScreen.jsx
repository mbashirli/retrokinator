import { useState } from "react";

// class PlayScreen extends Component {
//   constructor(props) {
//     super(props);
//     = { apiResponse: "", countkey: 0 };
//   }

//   buttonA() {
//     // this.countkey += 1;
//     // console.log(this.countkey);
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ answer: "A", id: 0 }),
//     };
//     fetch("https://localhost:4000/api/foods/sendOption", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.setState({ postId: data.id }));
//   }

//   render() {
//     return (

//     );
//   }
// }

export default PlayScreen;

function PlayScreen() {
  let [count, setCount] = useState(0);
  let [apiResponse, setState] = useState("");
  function callAPI() {
    let link = `http://localhost:4000/api/foods/getQuestions/${count}`;
    fetch(link)
      .then((res) => res.json())
      .then((res) => setState(res));
  }

  function componentWillMount() {
    callAPI();
  }

  callAPI();

  return (
    <>
      <div className="question-block">
        <div className="question">
          <div id="typedtext">{apiResponse["q_body"]}</div>
        </div>

        <div className="answers">
          <form action="submit">
            <button
              className="nes-btn is-primary"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              {apiResponse["q_answer1"]}
            </button>
            <button
              className="nes-btn is-warning"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              {apiResponse["q_answer2"]}
            </button>
            <button
              className="nes-btn is-success"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              {apiResponse["q_answer3"]}
            </button>
            <button
              className="nes-btn is-error"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              {apiResponse["q_answer4"]}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
