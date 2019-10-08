import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication';
import Counter from '../Counter';
import Controls from '../Controls';
import css from './Reader.module.css';

class Reader extends Component {
  state = {
    articles: [...this.props.items],
    index: 0,
  };

  handleBack = e => {
    const { articles, index } = this.state;
    const len = articles.length;

    if (!len) return;

    if (index > 0) this.setState(prevState => ({ index: prevState.index - 1 }));
  };

  handleForward = e => {
    const { articles, index } = this.state;
    const len = articles.length;

    if (!len) return;

    if (index < len - 1) this.setState(prevState => ({ index: prevState.index + 1 }));
  };

  render() {
    const { index, articles } = this.state;
    return (
      <div className={css.reader}>
        <Publication article={articles[index]} />
        <Counter index={index} len={articles.length} />
        <Controls
          index={index}
          len={articles.length}
          handleBack={this.handleBack}
          handleForward={this.handleForward}
        />
      </div>
    );
  }
}

Reader.defaultProps = {
  items: [],
};

Reader.propTypes = {
  items: PropTypes.array,
};

export default Reader;
