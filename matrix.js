const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin0 = 'JAZMINCITA';
const latin=latin0.toLowerCase()+latin0;
const apruebo='Apruebo';
const nums = '0123456789';
const colors=[
	'red',
	'green',
	'yellow',
	'aqua',
	'cadetblue'
]

const alphabet = latin;

const fontSize = 26;
const anotherFontSize=10;
const columns = canvas.width/fontSize;
const rows= canvas.width/anotherFontSize;

const rainDrops = [];

const windDrops=[];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}
 
for (let y=0;y<rows;y++){
	windDrops[y]=1
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = colors[Math.floor(Math.random()*colors.length)];
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, rainDrops[i]*fontSize, i*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 1;
        }
		rainDrops[i]++;
	}
};

const horizontal=()=>{
	context.fillStyle='rgba(0,0,0,0.05)';
	context.fillRect(0,0,canvas.width,canvas.height);
	context.fillStyle=colors[Math.floor(Math.random()*colors.length)];
	context.font=anotherFontSize+'px monospace';
	for( let i=0;i<windDrops.length;i++){
		const text=alphabet.charAt(Math.floor(Math.random()*alphabet.length));
		context.fillText(text,windDrops[i]*anotherFontSize,i*anotherFontSize);
		if(windDrops[i]*anotherFontSize>canvas.width&&Math.random()>0.975){
			windDrops[i]=1;
		}
		windDrops[i]+=2;
	}
}
setInterval(draw, 100);
setInterval(horizontal,80);