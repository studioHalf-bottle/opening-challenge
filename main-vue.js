
// Vue.component('main-paragraph', {
// 	props: ['pTexts'], 
// 	template: `<p v-for='(pText, index) in pTexts' v-bind:item='pText' v-bind:index='index' v-bind:key='index'></p>`
// });


// Vue.component('h2-section', {
// 	props: ['h-text', 'p-texts'], 
// 	template: 
// 		`<h2>{{ h-text }}</h2>
// 		<p v-for="(pText, index) in pTexts"><span v-html="pText"></span></p>`
// 	// data: function() { return { 
// 	// 			hText: "#오프닝챌린지로 차별금지법 제정을 함께 열어요!",
// 	// 			pTexts: [
// 	// 				``,
// 	// 				``
// 	// 			]
// 	// 		}
// 	// 	}
// });


// Vue.directive('tooltip-button', {
// 	mounted: function(el) {
// 		$(el).tooltip();
// 	}
// });

var musicProp = { 
	'isPlaying': false, 
	'musicSrc': "./Opening-Mastered-mp3.mp3",
	'buttonBoomUp': false, 
	'buttonDescription': false,
	'playSVG': './@asset/img/quieter-icon.svg', 
	'pauseSVG': './@asset/img/louder-icon.svg',
	'dataSVG': './@asset/img/louder-icon.svg'
};
var musicElement = new Audio( musicProp.musicSrc );
musicElement.autoplay = false;
musicElement.loop = true;
// musicElement.play();

var musicButton = new Vue({
	el: "#music-button", 
	data: musicProp, 
	methods: {
		turnOnMusic () {
			this.isPlaying = true;
			this.dataSVG = this.playSVG;
			// this.buttonComp = this.playingComp;
			musicElement.play();
		}, 
		turnOffMusic () {
			this.isPlaying = false;
			this.dataSVG = this.pauseSVG;
			// this.buttonComp = this.pausingComp;
			musicElement.pause();
		},
		boomUpButton () {
			this.buttonBoomUp = true;
			setTimeout( function() { this.buttonDescription = true; }, 500); 
		}, 
		boomDownButton () {
			this.buttonDescription = false;
			setTimeout( function() { this.buttonBoomUp = false; }, 500); 
		},
		musicButtonClick (event) {
			if (this.isPlaying) this.turnOffMusic();
			else this.turnOnMusic();
		}
	}, 
	mounted () {
		// $('#music-button').tooltip({ trigger: 'manual' });
		// setTimeout( function() { $('#music-button').tooltip('show'); }, 2000);
		// setTimeout( function() { $('#music-button').tooltip('hide'); }, 8000);

		setTimeout( this.boomUpButton(), 1000); 
		setTimeout( this.boomDownButton(), 5000);
	}
});

var pageHeader = new Vue({
	el: "#page-header", 
	data () { return {
		subTitle: "차별금지법 제정을 위한 #오프닝챌린지",
		hSvgTexts: [
			{ id: "artist", 		x: 0, 	y: 64, 	text: "9와 숫자들" }, 
			{ id: "music-title", 	x: 0, 	y: 148, 	text: "“Opening”" }
		],
		pTexts: [
			"Open your mind<br> Open the door<br> 새로운 시작",
			"Open your mind<br> Open the door<br> 깨질 수 없는 약속",
			"Open your mind<br> Open the door<br> 이제 암호를 정하기로 해",
			"Open your mind<br> 세 번 노크를 하면<br> 활짝 열어주기로"
		]
	}}
});




var musicInfo = new Vue({
	el: "#music-info", 
	components: {
		'a-collapse': {
			props: ['class-prop', 'collapseURL', 'aria-controls', 'message'],
			template: 
			`<a data-toggle='collapse' role='button' 
				aria-expanded='false'>{{ message }}
			</a>`
		}
	},
	data () { return {
		collapseURL: ['youtube-music', 'full-lyrics'],

		hText: "지금 들으시는 노래는<br><span class='hText-bold'><span class='u'>9와 숫자들</span>이 부르는<br> “Opening”</span> 입니다.",
		pTexts_1: [
			"곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 ",
			"곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 ",
		], 
		pTexts_2: [
			"곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 곡설명 ",
		]
	}}
});

var challengeIntro = new Vue({
	el: "#challenge-intro", 
	data () { return {
		hText: "<span class='hText-bold'><span class='u'>#오프닝챌린지</span>로</span><br> 차별금지법 제정을<br> 함께 열어요!",
		pTexts: [
			"나를 어떻게 볼까 두려워<br> 나를 닫은 적이 있지 않나요?",
			"아니요, 나는 닫은 적이 없습니다.<br> 세상이 우리 앞에 문을 닫았습니다.", 
			"나는 이제 문을 엽니다.<br> 세상의 닫힌 문을 엽니다.<br> 그리고 당신에게 나를 엽니다.", 
			"평등의 약속, 차별금지법 바로 지금<br> 국회의 닫힌 문을 열어<br> 우리는 약속할 수 있습니다.",
		]
	}}
});

var challengeManual = new Vue({
	el: "#challenge-manual", 
	data () { return {
		hText: "오호, 어떻게 챌린지하면 되나요?",
		pTexts: [
			"“Opening” 곡의 후렴구인<br> “Open your mind, Open the door” 가사에 맞춰서<br> <span class='b'>무엇이든 여는 모습</span>을 영상으로 찍어주세요.",
			`아래의 해시태그를 클릭해서(눌러서) 내용을 미리 복사해두세요.<br> 
				<button type='button' class='btn btn-primary' 
					data-toggle='tooltip' data-title='복사했습니다!'
					id='hashtag-clipboard' ref='hashtagClipboard' data-clipboard-text='#오프닝챌린지 #차별금지법바로지금'>
					#오프닝챌린지 <br>#차별금지법바로지금</button>`, 
			"촬영한 영상과 함께 위의 해시태그를 여러분의 소셜미디어에 올려주세요.",
			"<span class='b colour-instagram'>Instagram 릴스</span> 또는 <span class='b colour-tiktok-sub'>TikTok</span>에 올린다면<br> “Opening” 음원을 검색해서 영상에 음악을 직접 입힐 수 있어요."
		]
	}}, 
	mounted () {
		new ClipboardJS('#hashtag-clipboard');
		$('#hashtag-clipboard').tooltip({ trigger: 'manual' }).click( function() {
			var el = this;
			$(el).tooltip('show');
			setTimeout( function() { $(el).tooltip('hide'); }, 1500);
		});
	}
});

var challengeExample = new Vue({
	el: "#challenge-example", 
	data () { return {
		hText: "문을… 뭐 어떻게… 열라구요?",
		pTexts: [
			"너무 어렵게 생각하지 않으셔도 되어요 🧠🤪 <br>주변의 모든 것이 열릴 수 있는 것이니까요! 🧰💻🚪📖📦🗃🎁🎉",
			"챌린지를 먼저 시작한 분들의 예시를 보여드릴게요."
		], 
		images: [
			{ src: "", annotation: "어노테이션1" },
			{ src: "", annotation: "어노테이션2" },
			{ src: "", annotation: "어노테이션3" },
			{ src: "", annotation: "어노테이션4" },
		]
	}}
});

var challengeSearch = new Vue({
	el: "#challenge-search", 
	data () { return {
		hText: "으아,<br> 이런 걸 내가<br> 해도 되는 건가ㅠ",
		pTexts: [
			"<span class='b'>그럼요!</span> 차별금지법 제정에 힘을 모으려는 수많은 사람들이 벌써 챌린지에 참여하고 있답니다. 🏃‍♀️🏃🏃‍♂️<br>여러 소셜 미디어에서 <span class='u b'>#오프닝챌린지 #차별금지법바로지금</span> 해시태그를 통해 여러분과 함께 릴레이에 참여한 사람들의 모습을 살펴보세요."
		],
		buttons: [
			// { buttonName: 'Instagram', 	buttonClass: "colour-instagram border-instagram", 	buttonURL: 'https://www.instagram.com/explore/tags/오프닝챌린지' }, 
			// { buttonName: 'TikTok',		buttonClass: "colour-tiktok border-tiktok", 		buttonURL: 'https://www.tiktok.com/tag/오프닝챌린지?lang=ko-KR' }, 			
			// { buttonName: 'Facebook', 	buttonClass: "colour-facebook border-facebook", 	buttonURL: 'https://www.facebook.com/hashtag/오프닝챌린지'}, 
			// { buttonName: 'Twitter', 	buttonClass: "colour-twitter border-twitter", 		buttonURL: 'https://twitter.com/search?q=%23오프닝챌린지'}, 
			// { buttonName: 'Youtube', 	buttonClass: "colour-youtube border-youtube", 		buttonURL: 'https://www.youtube.com/hashtag/오프닝챌린지'}, 
			{ buttonName: 'Instagram', 	buttonClass: "border-instagram", 	buttonURL: 'https://www.instagram.com/explore/tags/오프닝챌린지' }, 
			{ buttonName: 'TikTok',		buttonClass: "border-tiktok", 		buttonURL: 'https://www.tiktok.com/tag/오프닝챌린지?lang=ko-KR' }, 			
			{ buttonName: 'Facebook', 	buttonClass: "border-facebook", 	buttonURL: 'https://www.facebook.com/hashtag/오프닝챌린지'}, 
			{ buttonName: 'Twitter', 	buttonClass: "border-twitter", 		buttonURL: 'https://twitter.com/search?q=%23오프닝챌린지'}, 
			{ buttonName: 'Youtube', 	buttonClass: "border-youtube", 		buttonURL: 'https://www.youtube.com/hashtag/오프닝챌린지'}, 
		]
	}}
});

var challengeManual = new Vue({
	el: "#assembly-petition", 
	data () { return {
		hText: "맞다, <br><span class='hText-bold'>차별금지법 제정을 위한 <br>국회청원</span>은 잘 되고 있어?",
		pTexts: [
			"<span class='b'>성공했어요. 이제는 국회의 시간이에요!</span>",
			`<div class="progress">
				<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%" aria-valuenow="100000" aria-valuemin="0" aria-valuemax="100000"></div>
			</div>`,
			"청원 시작 22일 만인 2021년 6월 24일에, 10만 명의 서명이 채워졌어요. <br>이제 이 청원은 국회로 넘어가서, 차별금지법을 심사하는 국회의원의 모임인 ‘국회 법제사법위원회’에서 논의해요. <span class='u'>법제사법위원회는 90일 뒤인 9월 12일까지 반드시 심사를 끝내서</span>, 차별금지법을 국회 본회의로 올리거나, 논의하지 않기로 결정한 이유를 알려주게 되어 있어요.", 
			"차별금지법 제정을 바라는 10만 명의 간절한 뜻이 이뤄지도록, 국회의 시간에도 끝까지 함께 목소리를 내자구요!"
		],
		buttons: [
			{ buttonName: '국회로 올라간 차별금지법 청원 상황 보기', 	buttonClass: "", 	buttonURL: 'https://petitions.assembly.go.kr/status/onGoing/C25F4B51E8D2312DE054A0369F40E84E?fbclid=IwAR0bGjkGjlX9nrynwL68sWyrPbJmPB7K7xEwMnIFGD5WkBYdCapCXzlxBAE'}
		]
	}}
});