import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import { withStore } from 'freenit'
import getStyles from './styles'


class AboutMe extends React.Component {
  render() {
    const { resolution } = this.props.store
    const styles = getStyles(this.props.theme, resolution.detail)
    return (
      <Paper style={styles.root}>
        <div style={styles.title}>Who the fuck i'm?</div>
        <div style={styles.title.small}>
          <p style={styles.title.center}>
            Linux/FreeBSD System Administrator (or DevFuckingOps)
          </p>
          <br />
          <p>
    I’m a hard-working, quick and efficient, a team player with excellent communication skills, and eager to take on new challenges.

    I have the ability to communicate, negotiate and coordinate events with business partners and service firms in variety of sectors. I am highly organized and able to prioritize effectively to accomplish multiple tasks.

    I have actively using GNU/Linux (since 2011) / Freebsd (since 2017) and it has been the only two systems that I use for basic and system administration.

    Beginning in April 2015, my friends and I starting hackerspace Tilda Center in Novi Sad, Serbia
          </p>
          <br />
          Projects:
          <br />
          <br />
          <p>CBSD – (2017 – now): </p>

          <p>     – VM configuration for CBSD </p>

          <p>     – Updating CBSD Documentation </p>

          <br />
          <p>Tutoring and mentoring – (2017 – now): </p>

          <p>     – Linux And FreeBSD intro for beginners </p>

          <p>     – Linux/FreeBSD System Administration </p>

          <br />
          <p>Research – (2015- now): </p>

          <p>     – Cloud based services (Infrastructure as code) </p>

          <p>     – Researching  Technologies based on web system administration </p>

          <p>     – Automation for full business startup (mail-servers, webstartkits, web servers) </p>
          <br />
          Tehnodrome Systems Novi Sad
          <br />
          15.Januar 2017 – 15.Mart 2018
          <br />
          <p> Unix and Linux system installation, configuration, administration, the development and
          testing of backup and recovery methodologies, troubleshooting, capacity and performance planning,
          performance tuning, preventative maintenance, monitoring and alerting setup. </p>
          <br />
          <p />   – Linux administration (Ubuntu, CentOS, Debian)
          <p />   – Google-cloud Platfrom
          <p />   – CPanel
          <p />   – VestaCP>
          <p />   – Git
          <p />   – Vagrant
          <p />   – Docker
          <p />   – Docker-compose
          <p />   – Ansible
          <p />   – Digital Ocean
          <br />
          <br />
          Freelancer in Upwork
          <br />
          1.April 2015 –
          <br />
          <p> Im working on small deploy servers, installation and confinguration for clients. Programs that I use: </p>
          <p /> – Bash
          <p /> – Python
          <p /> – AWX (Ansible-Tower)
          <p /> – Ansible
          <p /> – Vagrant
          <p /> – Docker
          <p /> – Docker-compose
          <p /> – Nginx
          <p /> – Apache2
          <p /> – Git
          <p /> – Html
          <p /> – Digital Ocean
          <p /> – Jenkins
          <p /> – Vultr
          <p /> – SSL
          <p /> – Configuring VPN Servers
          <p /> – Linux System Administration (Debian, Centos, Fedora)
          <br />
          <br />
          DDOR Novi Sad
          <br />
          Part-time job 1.Decembar 2014 – 31.January 2015
          <br />
          Expertise in Unix and Linux system installation, configuration, administration, the development and testing of backup and recovery methodologies, troubleshooting, capacity and performance planning, performance tuning, preventative maintenance, monitoring and alerting setup. Also done with:
          <br />
          <p /> – Solaris administration
          <p /> – VMWare ESXi administration
          <p /> – Git
          <p /> – Vagrant
          <p /> – Samba
          <p /> – Tomcat APP
          <p /> – Ansible
          <br />
          <br />
          Lust for Trust
          <br />
          Feb 2012 – March 2013
          <br />
          Administration of WordPress based environment
          <p /> – Apache
          <p /> – MySQL
          <p /> – PHP
          <p /> – Samba/NFS share
          <p /> – WordPress installation and configuration
          <br />
          <br />
          PC repair
          <br />
           September 2009 – March 2010
          <br />
           Installation, setup and maintenance of personal computers
          <p />– Windows XP, Vista
          <p />– Office suite
          <p />– Registry and system cleaning
          <p />– Installation and setup of client applications

          <p style={styles.title.center}>
            Education
          <br />
            Technician of electronics
          <br />
             Technical middle school “Mihajlo Pupin” Kikinda
             Mihajlo Pupin Kikinda Middle School Business machinery mechanic
          </p>
        </div>
      </Paper>
    )
  }
}


AboutMe.propTypes = {
  store: PropTypes.shape({
    resolution: PropTypes.shape({
      detail: PropTypes.shape({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }),
  theme: PropTypes.shape({}).isRequired,
}


export default withTheme(withStore(AboutMe))
