import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'

import Template from 'templates/default/detail'
import getStyles from './styles'


class About extends Component {
  render() {
    const height = this.props.height || 'calc(100vh - 64px - 40px)'
    const styles = getStyles(this.props.theme, height);
    return (
      <Template style={styles.root}>
        <h1>
         I Have Nothing To Say About ME
        </h1>
        <div>
          <Link to="/" style={styles.freenit}>
          <Button style={styles.button}>
            GO HOME!!!
          </Button>
          </Link>
        </div>
      </Template>
    )
  }
}


About.propTypes = {
  height: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(About)
