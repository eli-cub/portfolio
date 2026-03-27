import Home from "./pages/Home";
import RosterBuilder from "./pages/RosterBuilder";
import { useAppRouter } from "./router";

function App() {
  const { currentCountry, navigate } = useAppRouter();

  if (!currentCountry) {
    return (
      <Home
        onSelectCountry={(country) =>
          navigate(country === "USA" ? "/usa" : "/canada")
        }
      />
    );
  }

  return (
    <RosterBuilder
      country={currentCountry}
      onBack={() => navigate("/")}
    />
  );
}

export default App;
