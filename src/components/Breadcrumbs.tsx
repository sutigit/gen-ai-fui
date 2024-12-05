interface BreadcrumbsProps {
    links: { label: string; href: string }[];
    style?: React.CSSProperties;
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, style }) => (
    <nav style={{ fontSize: '14px', color: 'gray', ...style }}>
        {links.map((link, index) => (
            <span key={index}>
                <a href={link.href} style={{ color: 'gray', textDecoration: 'none' }}>
                    {link.label}
                </a>
                {index < links.length - 1 && ' / '}
            </span>
        ))}
    </nav>
);
