interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style }) => (
    isOpen ? (
        <div
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
        >
            <div
                style={{ backgroundColor: 'white', padding: '20px', borderRadius: '4px', ...style }}
            >
                <button onClick={onClose} style={{ marginBottom: '10px' }}>Close</button>
                {children}
            </div>
        </div>
    ) : null
);
