import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheckSquare,
	faCoffee,
	faThumbsUp,
	faThumbsDown,
	faStar,
	faMoon,
	faSun,
	faHome,
	faInfoCircle,
	faUserCircle,
	faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

export default function FontAwesomeInit() {
	library.add(
		faCheckSquare,
		faCoffee,
		faThumbsUp,
		faThumbsDown,
		faStar,
		faMoon,
		faSun,
		faHome,
		faInfoCircle,
		faUserCircle,
		faPhoneAlt
	);
	return null;
}
