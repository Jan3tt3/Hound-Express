import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import StatusPanel from "./components/StatusPanel/StatusPanel";
import GuideList from "./components/GuideList/GuideList";
import GuideForm from "./components/GuideForm/GuideForm";
import HistoryModal from "./components/HistoryModal/HistoryModal";
import type { Guide } from "./types/Guide";
import type { HistoryEntry } from "./types/HistoryEntry";
import { useLocalStorage } from "./hooks/useLocalStorage";

const AppContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 1rem;
`;

function App() {
  const [guides, setGuides] = useLocalStorage<Guide[]>("guides", []);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [showHistory, setShowHistory] = useState(false); // ✅ ahora aquí

  const addGuide = (guide: Guide) => {
    setGuides((prev) => [...prev, guide]);
  };

  const updateStatus = (id: string, newStatus: Guide["status"]) => {
    setGuides((prev) =>
      prev.map((guide) =>
        guide.id === id ? { ...guide, status: newStatus } : guide
      )
    );

    const guide = guides.find((g) => g.id === id);

    if (guide) {
      const historyEntry: HistoryEntry = {
        id: crypto.randomUUID(),
        guideId: id,
        date: new Date().toLocaleString(),
        oldStatus: guide.status,
        newStatus,
      };

      setHistory((prev) => [historyEntry, ...prev]);
    }
  };

  const openHistory = (guide: Guide) => {
    setSelectedGuide(guide);
    setShowHistory(true);
  };

  const closeHistory = () => {
    setSelectedGuide(null);
    setShowHistory(false);
  };

  const handleShowHistory = (historyData: HistoryEntry[]) => {
    setHistory(historyData);
    setShowHistory(true);
  };

  useEffect(() => {
    console.log("Estado de guías actualizado:", guides);
  }, [guides]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <StatusPanel guides={guides} />
        <GuideForm onAddGuide={addGuide} />

        <GuideList
          guides={guides}
          onUpdateStatus={updateStatus}
          onShowHistory={openHistory}
        />

        {showHistory && selectedGuide && (
          <HistoryModal
            guide={selectedGuide}
            history={history}
            onClose={closeHistory}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
