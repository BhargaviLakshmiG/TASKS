

class Cricket{
    team:Array<Team>=[];
    mom:string ;
    currentTeam:Team;
    team_won;
    man_of_match;

   constructor(){
       this.team.push(new Team("Team 1"));
       this.team.push(new Team("Team 2"))
       this.currentTeam=this.team[0];
   }

}

class Team{
    player:Array<Player>=[];
    score_total:number;
    team_name:string;
    team_num:number;

    constructor(teamname:string){
        this.team_name=teamname;
        this.team_num=parseInt(teamname.substring(5));
        console.log("Team id"+this.team_num);
        for(let i=1;i<=10;i++){
            this.player.push(new Player(`Player ${i}`));
           // console.log(this.player)
        }
    }
}

class Player{
    name:string;
    id:number;
    score=[];
    ball:number;
    constructor(name:string){
        this.name=name;
        this.id=parseInt(name.substring(7)) ;
        this.ball=1;
    // console.log(this.id)
    }
    
}




let cricket=new Cricket();
//console.log(cricket);

let team_cur=cricket.currentTeam.team_num;
let player_current=1;
let ball_current=1;

document.getElementById("hit1").onclick=printRuns;

function printRuns(){
    console.log("Printing player scores");
    if(ball_current<7 && player_current <=10 )
    {
        let td=<HTMLTableCellElement>document.getElementById(`p${player_current}t${team_cur}b${ball_current}`);
        let ball_score=Math.floor(Math.random() * 7);//generating random number between 0 to 6 as runs
        td.innerHTML=ball_score.toString();
          ball_current++;
          if(ball_score==0 ){
              getPlayerScore();
          }
    }

    else{
       getPlayerScore();
    }

    if(player_current>10)
    { 
        if(team_cur!==2){
            teamScore();
        console.log("CHANGING TEAM TO 2");
        team_cur=2;
        player_current=1;
        ball_current=1;
        changeTeam();
    }
    else
    {   
        teamScore();
        (<HTMLButtonElement>document.getElementById("hit2")).disabled=true;
        (<HTMLButtonElement>document.getElementById("gen_result")).disabled=false;
        document.getElementById("gen_result").onclick=generateResult;
      }
    }
}


function generateResult(){
    //printing team won and man of the match
     (<HTMLButtonElement>document.getElementById("gen_result")).disabled=true;
     let  score1=(<HTMLParagraphElement>document.getElementById("score_t1")).innerHTML;
     let  score2=(<HTMLParagraphElement>document.getElementById("score_t2")).innerHTML;
     let win_text=document.getElementById("match_won").innerHTML;
     if(+score1 > +score2){
        document.getElementById("match_won").innerHTML="MATCH WON BY TEAM 1";
        getMOM(1);
     }
     else if(+score1<+score2){
        document.getElementById("match_won").innerHTML="MATCH WON BY TEAM 2";
        getMOM(2);
     }
     else
        document.getElementById("match_won").innerHTML="MATCH TIED";
    }

  function getMOM(n:number){
      let p_score_high=0;
      let pl_high;
      for(let i=1;i<=10;i++){
      let p_score= +document.getElementById(`p${i}t${n}score`).innerHTML;
      if(p_score>p_score_high){
          p_score_high=p_score;
          pl_high=i;
      }
      }
      document.getElementById("mom").innerHTML=` MAN OF THE MATCH : PLAYER${pl_high} from TEAM ${n} with ${p_score_high} runs`;
  console.log(`MOM : PLAYER ${pl_high} from TEAM ${n} with ${p_score_high} runs`);
     

  }


function teamScore(){
    console.log("TOTAL team score for team " +team_cur);
    let team_total_score=0;
   for(let i=1;i<=10;i++){
    let cell_total=parseInt((<HTMLTableCellElement>document.getElementById(`p${i}t${team_cur}score`)).innerHTML);
    team_total_score+=cell_total;
    document.getElementById(`score_t${team_cur}`).innerHTML=team_total_score.toString();
   }


}

function changeTeam(){
   // console.log("change team func")
    (<HTMLButtonElement>document.getElementById("hit2")).disabled=false;
    (<HTMLButtonElement>document.getElementById("hit1")).disabled=true;
   console.log("Team "+team_cur+"Player "+player_current+"Ball "+ball_current)
    document.getElementById("hit2").onclick=printRuns;
   //printRuns();

}





//Getting total runs of each player
function getPlayerScore(){
    let total=<HTMLTableCellElement>document.getElementById(`p${player_current}t${team_cur}score`);
     let total_of_player=0;
    for(let i=1;i<=6;i++){
    let cell_value=parseInt((<HTMLTableCellElement>document.getElementById(`p${player_current}t${team_cur}b${i}`)).innerHTML);
    total_of_player+=cell_value;
      if(cell_value==0)
         break;
      }
    console.log(`${total_of_player}`) ;
    player_current++;
    ball_current=1;
    total.innerHTML=total_of_player.toString();
}






