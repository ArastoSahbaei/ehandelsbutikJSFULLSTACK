import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/logotype.svg'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
	const history = useHistory()

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navLogo' onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt={'error..'} />
			<span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>shop</span>
			<span className='galleryButton' onClick={() => history.push(RoutingPath.galleryView)}>gallery</span>
			<span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>news</span>
			<span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>sign in</span>
		</div>
	)
}
