export const Pagination = ({page, totalPages, onLeftClick, onRightClick}) => {
    
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}>←</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>→</button>
        </div>
    )
}