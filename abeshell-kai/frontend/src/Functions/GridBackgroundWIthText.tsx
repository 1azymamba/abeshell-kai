import React from 'react';

type GridBackGroundWithTextProps = {
    texts: string[];
    columns: number; // 1行当たり 4
}

const GridBackgroundWithText: React.FC<GridBackGroundWithTextProps> = ({ texts, columns }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '130px',
        color: '#A0FFA0',
        padding: '20px',
    };

    const itemStyle = {
        wordBreak: 'break-all' as const,
        minWidth: '0',
        whiteSpace: 'normal',
        overflowWrap: 'break-word' as const,
        fontFamily: 'Arial, sans-serif',
        fontWeight: 300,
        fontSize: '50px',
        fontStyle: 'italic',
        textAlign: 'center' as const,
        padding: '10px',
    };

    return (
        <div style={gridStyle}>
            {texts.map((text, index) => (
                <div key={index} style={itemStyle}>
                    {text}
                </div>
            ))}
        </div>
    );
};

export default GridBackgroundWithText;
