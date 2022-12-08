import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../../components/home/HomePage";
import { useStore } from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ModalContainer from "../common/modals/ModalContainer";

function App() {
  let location = useLocation();
  const { commonStore, userStore } = useStore();

  const { token, setAppLoaded, appLoaded } = commonStore;
  const { getUser } = userStore;

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!appLoaded) return <LoadingComponent content="Loading app..." />;

  return (
    <>
    <ModalContainer />
      <ToastContainer position="bottom-right" hideProgressBar />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
