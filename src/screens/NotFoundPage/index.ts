import { connect } from 'react-redux';
import { Component } from './component';
import { showLoading } from '../../store/ui/actions';
import { GlobalState } from '../../store/state';

const mapStateToProps = (state: GlobalState) => {
  return {
    loading: state.ui.loading,
    lang: state.ui.lang
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    showLoading: (loading: boolean) => {
      dispatch(showLoading(loading));
    },
  };
};

export const NotFoundPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
