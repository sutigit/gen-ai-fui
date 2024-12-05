interface NavigationBarProps {
    links: { label: string; href: string }[];
    style?: React.CSSProperties;
}
export const NavigationBar: React.FC<NavigationBarProps> = ({ links, style }) => (
    <nav style={{ backgroundColor: 'blue', padding: '10px', ...style }}>
        {links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }}
            >
                {link.label}
            </a>
        ))}
    </nav>
);
