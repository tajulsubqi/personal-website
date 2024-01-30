const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-gray-800 p-4 text-white text-center md:hidden">
        <p>
          &copy; {currentYear} Copyright By<strong className="ml-1">Tajul Subqi</strong>
        </p>
      </footer>
    </>
  )
}

export default Footer
