import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import StatusPanel from "./components/StatusPanel/StatusPanel";
import GuideForm from "./components/GuideForm/GuideForm";
import GuideList from "./components/GuideList/GuideList";
import HistoryModal from "./components/HistoryModal/HistoryModal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <StatusPanel />
      <GuideForm />
      <GuideList />
      <HistoryModal />
    </ThemeProvider>
  );
}

export default App;
