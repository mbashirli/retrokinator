export default function PlayScreen() {
    return (
        <>
            <div className="question-block">
                <div className="question">
                    <div id="typedtext">Which of the following <br/> tastes do you desire right now?</div>
                </div>

                <div className="answers">
                    <form action="submit">
                        <button className="nes-btn is-primary" type="button">A. Salty, umami, and sweet</button>
                        <button className="nes-btn is-warning" type="button">B. Toasted ham</button>
                        <button className="nes-btn is-success" type="button">C. Grilled chicken</button>
                        <button className="nes-btn is-error" type="button">D. Something Sweet</button>
                    </form>
                </div>
            </div>
        </>
    );
}