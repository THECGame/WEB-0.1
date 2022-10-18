import { connect } from "react-redux";
import { MainScreenComponent } from "./component";
import { GlobalState } from "../../store/state";

const mapStateToProps = (state: GlobalState) => {
  return {
    loading: state.ui.loading,
    lang: state.ui.lang,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const MainScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenComponent);
