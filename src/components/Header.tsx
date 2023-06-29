import { header, logo, title } from './Header.css'

export const Header = () => {
  return (
    <div className={header}>
      <img className={logo} src='/doctor.png' alt='Logo' />
      <div className={title}>
        <h2>CLINIDENT</h2>
        <h5>Dra. Diana Recinos</h5>
        <h5>Cirujana Dentista</h5>
        <h5>Col. 5,337</h5>
      </div>
    </div>
  )
}
