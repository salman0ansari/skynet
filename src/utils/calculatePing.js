import moment from "moment-timezone";

export default function calculatePing (timestamp, now) {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};