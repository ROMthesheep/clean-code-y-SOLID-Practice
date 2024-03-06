const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
  if ( isDead ) {
      return 1500;
  }
  if ( isSeparated ) {
    return 2500;
  }
  return isRetired ? 3000 : 4000
}

const getPayAmountAlt = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
  switch (true) { // We define positive or negative logic
    case isDead:
      return 1500
    case isSeparated:
      return 2500
    case isRetired:
        return 3000
    default:
      return 4000
  }
}
console.log(getPayAmount({isDead: false, isSeparated: false, isRetired:false }));
console.log(getPayAmountAlt({isDead: false, isSeparated: false, isRetired:false }));