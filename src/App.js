import { AuthProvider } from "./components/auth/auth";
import AnimationRoute from "./AnimationRoute";

const App = () => {
  return (
    <AuthProvider>
      <AnimationRoute />
    </AuthProvider>
  );
};

export default App;
