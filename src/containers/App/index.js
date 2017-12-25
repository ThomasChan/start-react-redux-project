import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { bindActionCreators } from 'redux';
import React, { PureComponent } from 'react';

import toJS from '../../libs/toJS';
import { appVersion } from './actions';

import './index.less';
import '../../../font/fontello.less';

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
    actions.appVersion(233);
  }

  render() {
    const { locale } = this.state;
    const { t, version } = this.props;

    return (
      <div>
        <h1>{t('app.helloTalkGene')}</h1>
        <h1>{locale}</h1>
        <pre>{JSON.stringify(version, null, "\t")}</pre>
      </div>
    );
  }

}

export default translate()(connect((state, ownProps) => ({
  children: ownProps.children,
  version: state.getIn(['app', 'appVersion']),
}), dispatch => ({
  actions: {
    appVersion: bindActionCreators(appVersion, dispatch),
  },
}))(toJS(App)));
