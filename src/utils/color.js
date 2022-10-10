import chalk from "chalk";

export default function color(text, color) {
	return !color ? chalk.green(text) : chalk.keyword(color)(text);
}