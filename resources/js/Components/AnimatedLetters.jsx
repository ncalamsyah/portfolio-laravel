const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${idx}`}>
                    {char}
                </span>
            ))}
        </span>
    );
};
export default AnimatedLetters;
