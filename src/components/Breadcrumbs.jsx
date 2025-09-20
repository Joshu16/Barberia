import { ChevronRight, Home } from 'lucide-react'

const Breadcrumbs = ({ currentPage }) => {
  const breadcrumbs = [
    { name: 'Inicio', href: '#inicio', icon: Home }
  ]

  // Agregar la página actual si no es la página de inicio
  if (currentPage && currentPage !== 'inicio') {
    breadcrumbs.push({ name: currentPage, href: `#${currentPage}` })
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && (
              <ChevronRight 
                size={16} 
                className="breadcrumb-separator" 
                aria-hidden="true" 
              />
            )}
            <a 
              href={crumb.href}
              className={`breadcrumb-link ${index === breadcrumbs.length - 1 ? 'current' : ''}`}
              aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
            >
              {crumb.icon && <crumb.icon size={16} />}
              <span>{crumb.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
