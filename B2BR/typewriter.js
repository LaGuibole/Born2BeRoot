function sleep(ms){
	return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ["Hello World", "Bonjour le monde", "Bye Bye B2BR"];
const type = document.getElementById("typewrite");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
	while (true) {
		let curWord = phrases[curPhraseIndex];

		for (let i = 0; i < curWord.length; i++) {
			type.innerText = curWord.substring(0, i + 1);
			await sleep(sleepTime);
		}

		await sleep(sleepTime * 10);

		for (let i = curWord.length; i >= 0; i--) {
			type.innerText = curWord.substring(0, i - 1);
			await sleep(sleepTime);
		}

		await sleep(sleepTime * 5);

		if (curPhraseIndex === phrases.length - 1) {
			curPhraseIndex = 0;
		} else {
			curPhraseIndex++;
		}
	}
};

writeLoop();
