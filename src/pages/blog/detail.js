import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'

import {
    BlogAbout,
  //BlogInfo,
} from 'components'

import Template from 'templates/default/detail'
import getStyles from './styles'


class Blog extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px - 40px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <Template style={styles.root}>
        <BlogAbout />
      </Template>
    )
  }
}


Blog.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(Blog)
