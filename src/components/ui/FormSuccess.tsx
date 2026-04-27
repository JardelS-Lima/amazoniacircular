import type { ReactNode } from 'react'

interface FormSuccessProps {
  title: string
  message: ReactNode
  size?: 'modal' | 'page'
  actions?: ReactNode
}

export function FormSuccess({ title, message, size = 'page', actions }: FormSuccessProps) {
  if (size === 'modal') {
    return (
      <div className="modal-success">
        <div className="success-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" stroke="#3a8a4a" strokeWidth="2" />
            <path
              d="M12 20l6 6 10-12"
              stroke="#3a8a4a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>{title}</h3>
        <p>{message}</p>
        {actions}
      </div>
    )
  }

  return (
    <div className="form-success-box">
      <div className="success-icon-lg">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="#1a6b2a" strokeWidth="2.5" />
          <path
            d="M16 28l8 8 16-18"
            stroke="#1a6b2a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2>{title}</h2>
      <p>{message}</p>
      {actions && <div className="form-success-actions">{actions}</div>}
    </div>
  )
}
