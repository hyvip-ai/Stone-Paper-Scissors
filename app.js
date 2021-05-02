const ImgSource = ['./images/paper.png','./images/rock.png','./images/scissors.png']
var Myimg = document.getElementById('mine');

var compimg = document.getElementById('comps');
var human = document.getElementById('score-hum')
var computer  = document.getElementById('score-com');
var playing = false

var myscore = 0
var compscore = 0
var win = document.getElementById('win')
human.innerText = myscore
computer.innerText = compscore
function startgame(){
  
   if(!playing){
    var name = prompt("enter player name");
    document.getElementById('name').innerText = name
    document.getElementById('btns').style.display = 'block'
    document.getElementById('img').style.display = 'block'
    document.getElementById('start').innerText = 'Exit'
    playing=true
   }
   else{
    document.getElementById('name').innerText = 'Me'
    document.getElementById('btns').style.display = 'none'
    document.getElementById('img').style.display = 'none'
    document.getElementById('start').innerText = 'Start Game'
     playing = false

   }


}
function paperclick(){
    
    var compstatus = Math.floor(Math.random()*ImgSource.length);
    if(compstatus==0){
        //tie
        Myimg.src = ImgSource[0]
        win.innerText = 'Tie'
        compimg.src = ImgSource[compstatus]
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
            win.innerText = ''

            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
        }, 3000);
    }
    if(compstatus==1){
        //humna wins
        Myimg.src = ImgSource[0]
        myscore = myscore+1
        human.innerText = myscore
        win.innerText='Human Wins'
        compimg.src = ImgSource[compstatus]
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
         win.innerText = ''

            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
        }, 3000);
    }
    if(compstatus==2){
        //computer wins
        Myimg.src = ImgSource[0]
        compscore = compscore+1;
        computer.innerText = compscore
        compimg.src = ImgSource[compstatus]
        win.innerText = 'Computer Wins'
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
            win.innerText = ''
        }, 3000);
    }
}
function scissorclick(){
    var compstatus = Math.floor(Math.random()*ImgSource.length);
    if(compstatus==2){
        //tie
        Myimg.src = ImgSource[2]
        win.innerText = 'Tie'
        compimg.src = ImgSource[compstatus]
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
            win.innerText = ''

            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
        }, 3000);
    }
    if(compstatus==0){
        //humna wins
        Myimg.src = ImgSource[2]
        myscore = myscore+1
        human.innerText = myscore
        win.innerText='Human Wins'
        compimg.src = ImgSource[compstatus]
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
         win.innerText = ''

            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
        }, 3000);
    }
    if(compstatus==1){
        //computer wins
        Myimg.src = ImgSource[2]
        compscore = compscore+1;
        computer.innerText = compscore
        compimg.src = ImgSource[compstatus]
        win.innerText = 'Computer Wins'
        compimg.style.animationPlayState='paused'
        Myimg.style.animationPlayState='paused'
        document.getElementById('in').innerText = 'New Round Starts in 3 secs'
        setTimeout(() => {
            compimg.style.animationPlayState='running'
            Myimg.style.animationPlayState='running'
            compimg.src = ImgSource[1]
            Myimg.src = ImgSource[1]
            document.getElementById('in').innerText = ''
            win.innerText = ''
        }, 3000);
    }

}
function rockclick(){

        var compstatus = Math.floor(Math.random()*ImgSource.length);
        // console.log(compstatus)
        if(compstatus==0){
            compscore = compscore+1;
            computer.innerText = compscore
            compimg.src = ImgSource[compstatus]
            win.innerText = 'Computer Wins'
            compimg.style.animationPlayState='paused'
            Myimg.style.animationPlayState='paused'
            document.getElementById('in').innerText = 'New Round Starts in 3 secs'
            setTimeout(() => {
                compimg.style.animationPlayState='running'
                Myimg.style.animationPlayState='running'
                compimg.src = ImgSource[1]
                Myimg.src = ImgSource[1]
                document.getElementById('in').innerText = ''
                win.innerText = ''
            }, 3000);
        }
        if(compstatus==1){
            win.innerText = 'Tie'
            compimg.src = ImgSource[compstatus]
            compimg.style.animationPlayState='paused'
            Myimg.style.animationPlayState='paused'
            document.getElementById('in').innerText = 'New Round Starts in 3 secs'
            setTimeout(() => {
                win.innerText = ''

                compimg.style.animationPlayState='running'
                Myimg.style.animationPlayState='running'
                compimg.src = ImgSource[1]
                Myimg.src = ImgSource[1]
                document.getElementById('in').innerText = ''
            }, 3000);
        }
        if(compstatus==2){
           myscore = myscore+1
           human.innerText = myscore
           win.innerText='Human Wins'
           compimg.src = ImgSource[compstatus]
           compimg.style.animationPlayState='paused'
           Myimg.style.animationPlayState='paused'
           document.getElementById('in').innerText = 'New Round Starts in 3 secs'
           setTimeout(() => {
            win.innerText = ''

               compimg.style.animationPlayState='running'
               Myimg.style.animationPlayState='running'
               compimg.src = ImgSource[1]
               Myimg.src = ImgSource[1]
               document.getElementById('in').innerText = ''
           }, 3000);
        }
}