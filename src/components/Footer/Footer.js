import React from 'react'
import './footer.scss'

const Footer = props => {
  const currentYear = (new Date()).getFullYear()

  return (
    <footer styleName='App-footer'>
      <p>&copy; {currentYear} <a href='https://clearcapital.com'>ClearCapital.com</a>, Inc. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
