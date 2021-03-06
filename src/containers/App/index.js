import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { bindActionCreators } from 'redux';
import React, { PureComponent } from 'react';

import toJS from '../../libs/toJS';
import { helloword } from './actions';

import './index.less';

class App extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    window.history.replaceState({},
      document.title,
      window.location.pathname + window.location.hash,
    );
    super(props);
    let locale = localStorage.getItem('locale');
    if (!locale) {
      locale = 'zh-CN';
      localStorage.setItem('locale', locale);
    }
    this.state = {
      locale,
    };
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.body.classList.add('windows');
    }
    const { actions } = this.props;
    actions.helloword(233);
  }

  render() {
    const { locale } = this.state;
    const { t, response } = this.props;

    return (
      <div>
        <h1>{t('app.helloTalkGene')}</h1>
        <h1>{locale}</h1>
        <pre>{JSON.stringify(response, null, "\t")}</pre>
      </div>
    );
  }

}

export default translate()(connect((state, ownProps) => ({
  children: ownProps.children,
  response: state.getIn(['app', 'helloword']),
}), dispatch => ({
  actions: {
    helloword: bindActionCreators(helloword, dispatch),
  },
}))(toJS(App)));
