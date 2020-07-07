import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'
import {
  Paper,
} from '@material-ui/core'

import Template from 'templates/default/detail'
import getStyles from './styles'


class Landing extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px - 40px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <Template style={styles.root}>
        <h1>
          Coming soon new Krletron.tk site
        </h1>
        <div style={styles.small}>
          No need to use Wordpress...Freenit is new Framework for you
        </div>
        <Paper style={styles.freenit}>
          Krletron.tk
        </Paper>
      </Template>
    )
  }
}


Landing.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(Landing)
