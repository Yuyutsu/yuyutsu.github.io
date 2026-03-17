import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Architecture } from "./components/Architecture";
import { Features } from "./components/Features";
import { Decisions } from "./components/Decisions";
import { CodeExample } from "./components/CodeExample";
import { Impact } from "./components/Impact";
import { Roadmap } from "./components/Roadmap";
import { Divider } from "./components/Divider";

function App() {
  return (
    <div className="min-h-screen bg-surface text-text-secondary">
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Solution />
      <Divider />
      <Architecture />
      <Divider />
      <Features />
      <Divider />
      <Decisions />
      <Divider />
      <CodeExample />
      <Divider />
      <Impact />
      <Divider />
      <Roadmap />
      <footer className="py-16 px-6 text-center">
        <p className="text-text-muted text-sm">
          Engineered with precision. Built for production.
        </p>
      </footer>
    </div>
  );
}

export default App;
