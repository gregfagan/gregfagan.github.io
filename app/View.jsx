import _ from 'lodash';
import React from 'react';
import 'flexbox';

var prefixableOptions = new Set(['start', 'end']);

function prefix(flexOption) {
  return prefixableOptions.has(flexOption) ?
    `flex-${flexOption}` :
    flexOption;
}

export default class View extends React.Component {
  render() {
    let { tag:Tag='div', direction='column', grow=0, shrink=0, basis='auto', justify='start', align='stretch', wrap=false, style, ...other } = this.props;
    let flexStyle = {
      flexDirection: direction,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      justifyContent: prefix(justify),
      alignItems: prefix(align),
      flexWrap: wrap ? 'wrap' : 'nowrap'
    };
    return <Tag className='flexbox' style={_.extend(flexStyle, style)} {...other}/>
  }
}