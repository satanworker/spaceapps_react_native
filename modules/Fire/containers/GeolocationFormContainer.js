import { connect } from 'react-redux'

import { postFire } from '../../../redux/Fire/FireReducer'

import GeolocationForm from '../components/GeolocationForm';

const mapDispatchToProps = {
  postFire
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GeolocationForm)