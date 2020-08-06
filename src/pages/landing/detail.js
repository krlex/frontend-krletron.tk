import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import {
  Button,
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
          Welcome to Krletron.tk
        </h1>
        <div style={styles.small}>
          .......Every day you can learn something new........
        </div>
        <div>
          <Link to="/about" style={styles.freenit}>
          <Button style={styles.button}>
          Who am i?
          </Button>
          </Link>
        </div>
      </Template>
    )
  }
}


Landing.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(Landing)
