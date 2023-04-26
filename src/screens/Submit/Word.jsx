export default (props) => {
    return (<>
        <div style={{ padding: '5px 10px',borderRadius:'3px', margin: 5, background: 'grey', color: 'white' }}>
            {props.word} 
            {(props.iskey)?null:<i class="fa fa-times" aria-hidden="true"></i>}
        </div>
    </>)
}