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
    let { tag:Tag='div', direction, grow, shrink, basis, justify, align, wrap, style, ...other } = this.props;
    let flexStyle = {
      flexDirection: direction || 'column',
      flexGrow: grow || 0,
      flexShrink: shrink || 0,
      flexBasis: (_.isNull(basis) || _.isUndefined(basis) && 'auto') || basis,
      justifyContent: prefix(justify || 'start'),
      alignItems: prefix(align || 'stretch'),
      flexWrap: wrap ? 'wrap' : 'nowrap'
    };
    return <Tag className='flexbox' style={_.extend(flexStyle, style)} {...other}/>
  }
}