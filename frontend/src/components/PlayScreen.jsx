export default function PlayScreen() {
    return (
        <>
            <div className="question-block">
                <div className="question ">
                    <h2>Which of the following tastes do you desire right now?</h2>
                </div>

                <div className="answers">
                    <form action="submit">
                        <button type="button">A</button>
                        <button type="button">B</button>
                        <button type="button">C</button>
                        <button type="button">D</button>
                    </form>
                </div>
            </div>
        </>
    );
}