
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
	'isPlaying': true, 
	'musicSrc': "Opening-Mastered-mp3.mp3",
	'buttonComp': "music off",
	'playingComp': "music off", 
	'pausingComp': "music on"
};
var musicElement = new Audio( musicProp.musicSrc );
musicElement.autoplay = true;
musicElement.loop = true;

var musicButton = new Vue({
	el: "#music-button", 
	data: musicProp, 
	methods: {
		turnOnMusic () {
			this.isPlaying = true;
			this.buttonComp = this.playingComp;
			musicElement.play();
		}, 
		turnOffMusic () {
			this.isPlaying = false;
			this.buttonComp = this.pausingComp;
			musicElement.pause();
		},
		musicButtonClick (event) {
			if (this.isPlaying) this.turnOffMusic();
			else this.turnOnMusic();
		}
	}
});

var pageHeader = new Vue({
	el: "#page-header", 
	data () { return {
		subTitle: "차별금지법 제정을 위한 #오프닝챌린지",
		hSvgTexts: [
			{ id: "artist", 		x: 0, 	y: 84, 	text: "9와 숫자들" }, 
			{ id: "music-title", 	x: 0, 	y: 160, 	text: "〈Opening〉" }
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
	data () { return {
		hText: "지금 들으시는 노래는<br><span class='hText-bold'>9와 숫자들이 부르는<br> 〈Opening〉</span> 입니다.",
		pTexts: [
			"rkskekfkak<br>asdfasdf",
			"qkdkdkwkckzk", 
			`<a class='colour-youtube'
				data-toggle='collapse' href='#youtube-music' role='button' aria-expanded='false' aria-controls='collapseExample'>
				►→↓ YouTube에서 보기
			</a>`, 
			`<a class=''
				data-toggle='collapse' href='#full-lyrics' role='button' aria-expanded='false' aria-controls='collapseExample'>
				►→↓ 눌러서 가사 펼쳐 보기
			</a>`, 
			`<div class="collapse" id="full-lyrics">
				누구에게나 울어야 하는 날이 있어<br> 내 앞에서만 열리지 않는 문을 만나면 <br> 
				<br> 
				때로는 커서<br> 때로는 작아서<br> 조금 특별한 색깔을 좋아해서<br> 넘지 못 하는 선이 있어<br> 
				<br> 
				Open your mind<br> Open the door<br> 이제 암호를 정하기로 해<br> 
				<br> 
				Open your mind<br> Open the door<br> 세 번 노크를 하면<br> 활짝 열어주기로<br> 
				<br> 
				누구에게나 들려줘야 할 말이 있어<br> 태어난 대로 느끼는 대로 살면 된다고<br> 
				<br> 
				이건 새로운 시작<br> 깨질 수 없는 약속<br> 난 너의 믿음을 인정할 테니 <br> 너도 내 사랑을 응원해줄래<br> 
				<br> 
				Open your mind<br> Open the door<br> 새로운 시작<br> 
				<br> 
				Open your mind<br> Open the door<br> 깨질 수 없는 약속<br> 
				<br> 
				Open your mind<br> Open the door<br> 이제 암호를 정하기로 해<br> 
				<br> 
				Open your mind<br> 세 번 노크를 하면<br> 활짝 열어주기로
			</div>`,
			"qkdkdkwkckzk"
		]
	}}
});

var challengeIntro = new Vue({
	el: "#challenge-intro", 
	data () { return {
		hText: "<span class='hText-bold'>#오프닝챌린지로</span><br> 차별금지법 제정을<br> 함께 열어요!",
		pTexts: [
			"나를 어떻게 볼까 두려워<br> 나를 닫은 적이 있지 않나요?",
			"아니요, 나는 닫은 적이 없습니다.<br> 세상이 우리 앞에 문을 닫았습니다.", 
			"나는 이제 문을 엽니다.<br> 세상의 닫힌 문을 엽니다.<br> 그리고 당신에게 나를 엽니다.", 
			"평등의 약속, 차별금지법 바로 지금<br> 국회의 닫힌 문을 열어<br> 우리는 약속할 수 있습니다.",
		], 
		images: [
			{ src: "", annotation: "어노테이션1" },
			{ src: "", annotation: "어노테이션2" },
			{ src: "", annotation: "어노테이션3" },
			{ src: "", annotation: "어노테이션4" },
		]
	}}
});

var challengeManual = new Vue({
	el: "#challenge-manual", 
	data () { return {
		hText: "오호, 어떻게 챌린지하면 되나요?",
		pTexts: [
			"〈Opening〉 곡의 후렴구 가사<br> “Open your mind Open the door”에 맞춰서<br> 무엇이든 여는 모습을 영상으로 찍어주세요.",
			`아래의 해시태그를 클릭해서(눌러서) 내용을 미리 복사해두세요.<br> 
				<button type='button' class='btn btn-primary' 
					data-toggle='tooltip' data-title='복사했습니다!'
					id='hashtag-clipboard' ref='hashtagClipboard' data-clipboard-text='#오프닝챌린지 #차별금지법바로지금'>
					#오프닝챌린지 #차별금지법바로지금</button>`, 
			"여러분이 촬영한 영상을 해시태그와 함께 여러분의 소셜미디어에 올려주세요.",
			"Instagram 릴스 또는 TikTok에 올린다면<br> 〈Opening〉 음원을 검색해서 영상에 음악을 직접 입힐 수 있어요."
		]
	}}, 
	mounted () {
		// console.log($(this.$refs.hashtagClipboard))
		new ClipboardJS('#hashtag-clipboard');
		$('#hashtag-clipboard').tooltip({ trigger: 'manual' }).click( function() {
			var el = this;
			$(el).tooltip('show');
			setTimeout( function() { $(el).tooltip('hide'); }, 1500);
		});
	}
});

var challengeSearch = new Vue({
	el: "#challenge-search", 
	data () { return {
		hText: "으아,<br> 이런 걸 내가<br> 해도 되는 건가ㅠ",
		pTexts: [
			"그럼요! 차별금지법 제정에 힘을 모으려는 수많은 사람들이 벌써 챌린지에 참여하고 있답니다. <br>여러 소셜 미디어에서 #오프닝챌린지 #차별금지법바로지금 해시태그를 통해 여러분과 함께 릴레이에 참여한 사람들의 모습을 살펴보세요."
		],
		buttons: [
			{ buttonName: 'Instagram', 	buttonClass: "colour-instagram border-instagram", 	buttonURL: 'https://www.instagram.com'}, 
			{ buttonName: 'TikTok',		buttonClass: "colour-tiktok border-tiktok", 		buttonURL: 'https://www.instagram.com' }, 			
			{ buttonName: 'Facebook', 	buttonClass: "colour-facebook border-facebook", 	buttonURL: 'https://www.instagram.com'}, 
			{ buttonName: 'Twitter', 	buttonClass: "colour-twitter border-twitter", 		buttonURL: 'https://www.instagram.com'}, 
			{ buttonName: 'Youtube', 	buttonClass: "colour-youtube border-youtube", 		buttonURL: 'https://www.instagram.com'}, 
		]
	}}
});

var challengeManual = new Vue({
	el: "#assembly-petition", 
	data () { return {
		hText: "맞다,<br> <span class='hText-bold'>차별금지법 제정을 위한 국회청원</span>은<br> 잘 되고 있어?",
		pTexts: [
			"블라블라블라블라",
			"블라블라블라블라", 
			"블라블라블라블라"
		],
		buttons: [
			{ buttonName: '차별금지법 청원하러 가기', 	buttonClass: "float-right", 	buttonURL: 'https://petitions.assembly.go.kr/status/onGoing/C25F4B51E8D2312DE054A0369F40E84E?fbclid=IwAR0bGjkGjlX9nrynwL68sWyrPbJmPB7K7xEwMnIFGD5WkBYdCapCXzlxBAE'}
		]
	}}
});