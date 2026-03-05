function Child({ sendMessage }) {

    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={sendMessage}>
                Click to call parent function
            </button>
        </div>
    );
}

export default Child;