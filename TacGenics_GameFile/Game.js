class Game {
    constructor() {
        
        
    }
    gamePlay() {
        if(gs === 0){
        form1 = new Form_1();
        form2 = new Form_2();
                
        level1 = new Level_1();
        
        form3 = new Form_3();
       

        loading = new Loading_Screen();
        loading.display();
        }
        if(gs === 1){
            
            form1.displayForm1();
            
            
        }
        if(gs === 2){
            form1.hide();
            form2.display();
            
        }
        if(gs === 3){
            
            form2.hide();            
            form3.display();
        }

        if(gs === l1){
            
            form3.hide();
            level1.display();
        }
        
        if(gs === l1g){            
            level1game = new Level1_Game();
            level1game.displayGame1();
        }
    }
}