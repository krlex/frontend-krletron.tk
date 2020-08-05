import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'
import getStyles from './styles'


class BlogInfo extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <div style={styles.root}>
        <div style={styles.small}>
          This is a blog page.
        </div>
        <div style={styles.small}>
        </div>
      </div>
    )
  }
}


BlogInfo.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(BlogInfo)
