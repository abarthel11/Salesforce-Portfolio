import { LightningElement, track } from 'lwc';

import LOGO from "@salesforce/resourceUrl/PortfolioAssets";
import mobileNav from './mobileNav.html'
import nav from './nav.html'

// import tabs from './tabs';

export default class NavBar extends LightningElement {
	@track navOpen = false

	render() {
		return window.screen.width < 768 ? mobileNav : nav;
	}

	get tabs(){
		return tabs
	}

	get logo(){
		return LOGO+'/img/AB.svg#logoId'
	}

	get navIcon(){
		return this.navOpen ? 'utility:close' : 'utility:rows' 
	}

	get navVariant(){
		return this.navOpen ? 'success' : 'brand'
	}

	// navigationHandler(event){
	// 	event.preventDefault();
	// 	const curTarget = event.currentTarget
	// 	window.history.pushState(curTarget.href, '', curTarget.href);
	// 	console.log(event.currentTarget);
	// }

	openNavigation(){
		this.navOpen = !this.navOpen
	}

	openCV(){
		console.log('open Cv');
	}

}
