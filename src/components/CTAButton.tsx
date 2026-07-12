import { Link } from 'react-router-dom'

type CTAButtonProps = {
  text: React.ReactNode
  href: string
  internal?: boolean
  className?: string
}

function CTAButton({ text, href, internal, className }: CTAButtonProps) {
  if (internal) {
    return <Link to={href} className={className}>{text}</Link>
  }

  return (
    <a href={href} target="_blank" className={className}>{text}</a>
  )
}

export default CTAButton