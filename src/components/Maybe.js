import * as R from 'ramda'

export const Maybe = ({ children, ...props }) =>
  R.compose(
    R.all(R.allPass([R.complement(R.isNil), R.complement(R.isEmpty)])),
    R.values
  )(props)
    ? children(props)
    : null
