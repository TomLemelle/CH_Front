
const SeeFile = () => {

    const data = {
        name: 'avatar',
        type: 'image',
        extension: 'jpg',
        fileLength: '1mo',
    }
    
    return (
        <table className="uploaded-files">
            <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Extension</th>
                <th>Taille</th>
                <th><img src='/assets/bin.png' alt='icon poubelle' width={28} height={31} /></th>
            </tr>

            <Row {...data} />
            <Row {...data} />
            <Row {...data} />
            <Row {...data} />
            <Row {...data} />
            <Row {...data} />
            <Row {...data} />
        </table>
    )
}

export default SeeFile;

const Row = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.extension}</td>
            <td>{props.fileLength}</td>
            <td style={{cursor: 'pointer'}}><img src='/assets/red-bin.png' alt='icon poubelle' width={28} height={31} onClick={() => console.log('delete')} /></td>
        </tr>
    )
}