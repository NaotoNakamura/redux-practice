import React from 'react'
import { connect } from 'react-redux'

const Another = (props) => {
  return (
      <div>AnotherComponentCount:{props.value}</div>
  );
}

// stateから必要な情報をコンポーネントにマッピングする関数
const mapStateToProps = state => ({ value: state.count.value })

// 指定したコンポーネントのpropsにstateを混ぜ込む
export default connect(mapStateToProps)(Another)