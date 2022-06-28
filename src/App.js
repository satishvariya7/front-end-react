import MovieContainer from "./Components/Movie/MovieContainer";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { QueryClient, QueryClientProvider } from "react-query";
import reducer from "./Redux/Reducer/Index";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MovieContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
