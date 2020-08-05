import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'

import Template from 'templates/default/detail'
import getStyles from './styles'


class Blog extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px - 40px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <Template style={styles.root}>
        <h1>
         I Have Nothing To Show You
        </h1>
        <div>
          <Link to="/" style={styles.freenit}>
          <Button>
            GO HOME!!!
          </Button>
          </Link>
        </div>
      </Template>
    )
  }
}


Blog.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(Blog)
