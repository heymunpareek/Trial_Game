class Level1_Game {
    constructor() {
    }
    displayGame1() {  
        
        level1game.hideNot();
        level1game.movement();
        
        
    }
    hideNot() {
        player.visible = true;
    }
    hide() {
        player.visible = false;
    }
    movement() {
        if(keyDown("right")){
            player.changeAnimation("walkRight", walkingRight);
            player.x = player.x + 2.5;
        }
        else if(keyDown("left")){
            player.changeAnimation("walkLeft", walkingLeft);
            player.x = player.x - 2.5;
        }
        else{
            player.changeAnimation("standing", standingImg);
        }
    }
}