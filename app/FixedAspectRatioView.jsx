import React from 'react';
import View from 'View';

export default class FixedAspectRatioView extends React.Component {
  render() {
    let { ratio, style, children, ...other } = this.props;
    let { width, height, margin, ...otherStyle } = style;
    let numericWidth = Number(width.replace(/[^\d\.\-]/g, ''));
    let sizingStyle = {
      width: width,
      paddingBottom: `${numericWidth*1/ratio}%`,
      margin: margin
    }
    return (
      <View style={sizingStyle}>
        <View style={styles.wrapper}>
          <View grow={1} style={otherStyle} {...other}>
            {children}
          </View>
        </View>
      </View>
    );
  }
}

let styles = {
  wrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  }
}