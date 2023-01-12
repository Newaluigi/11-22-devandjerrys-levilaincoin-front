const ResponsabilityButton = () => {
  return (
    <div>
      <div className='box'>
        <a href='#popup' className='boutonResponsability'>
          Irresponsabilité
        </a>
      </div>

      <div id='popup' className='overlay'>
        <div className='popup'>
          <h3 className='responsabilityText'>Clause d&#39;irresponsabilité</h3>
          <p className='responsabilityText'>
            Compte-tenu de la gravité des évèments qui ne manqueront pas de se
            produire, nous vous demandons de souscrire une assurance en béton.
          </p>
          <p className='responsabilityText'>
            Dans le cas contraire, notre entreprise n&#39;assumera pas la
            responsabilité des dommages et pertes causés.
          </p>
          <a href='#' className='cross'>
            &times;
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResponsabilityButton
