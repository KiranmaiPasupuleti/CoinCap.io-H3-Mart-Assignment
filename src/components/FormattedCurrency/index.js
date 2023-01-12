import numeral from 'numeral'

function formattedCurrency(value) {
  let formattedVal
  if (value >= 1000000000) {
    formattedVal = numeral(value / 1000000000).format('0.00a') + 'b'
  } else if (value >= 1000000) {
    formattedVal = numeral(value / 1000000).format('0.00a') + 'm'
  } else {
    formattedVal = numeral(value).format('0,0.00')
  }
  return <>{formattedVal} </>
}

export default formattedCurrency
