// https://github.com/Xavlume/random_imgur_image_js
function get_random_imgur_link() {
	let result = 'https://i.imgur.com/';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < 5; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result + '.png';
}

let is_redirect = false;

async function check_if_redirect(file: string) {
	const myObject = await fetch(file);
	is_redirect = myObject.redirected;
}

export async function display_random_imgur_image() {
	const the_link = get_random_imgur_link();
	await check_if_redirect(the_link);
	if (is_redirect && !the_link) {
		display_random_imgur_image();
	} else {
		return the_link;
	}
}
