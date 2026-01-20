

export default function Alert({alert}) {

const capitalize = (word) =>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1)
}

  return (
    <>
    <div style={{height : '50px'}}>
      {alert && <div style={{
        backgroundColor: '#d1edff',
        color: '#0c5460',
        padding: '0.75rem 1.25rem',
        marginBottom: '1rem',
        borderRadius: '0.25rem',
        textAlign: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        alignItems: 'flex-start'
      }} role="alert">
  <div>
    <strong>{capitalize(alert.type)}:</strong> {alert.msg}
  </div>
    </div>}
 </div>

</>
  )
}
