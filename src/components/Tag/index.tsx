import { TagContainer, TagLink } from './styles'

type Props = {
  children: string
  type: 'tag' | 'link'
  to?: string
}

const Tag = ({ children, type, to }: Props) => {
  if (type === 'tag') return <TagContainer>{children}</TagContainer>
  return <TagLink to={to as string}>{children}</TagLink>
}

export default Tag
