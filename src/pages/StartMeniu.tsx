import NavigationButton from "../components/NavigationButton";

const StartMeniu = () => {
  return (
    <div>
      <NavigationButton title="Play Alone" address="/singlePlayer" />
      <NavigationButton title="Party" address="/party" />
    </div>
  );
};

export default StartMeniu;
