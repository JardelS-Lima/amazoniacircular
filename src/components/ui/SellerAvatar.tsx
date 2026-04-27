interface SellerAvatarProps {
  company: string
  className?: string
}

export function SellerAvatar({ company, className = 'seller-avatar' }: SellerAvatarProps) {
  return <div className={className} aria-hidden="true">{company.charAt(0)}</div>
}
