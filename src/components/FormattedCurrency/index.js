import numeral from 'numeral'

function formattedCurrency(props) {
  let formattedVal
  if (props.value >= 1000000000) {
    formattedVal = numeral(props.value / 1000000000).format('$0.00a') + 'b'
  } else if (props.value >= 1000000) {
    formattedVal = numeral(props.value / 1000000).format('$0.00a') + 'm'
  } else {
    formattedVal = numeral(props.value).format('$0,0.00')
  }
  return <>{formattedVal}</>
}

export default formattedCurrency
