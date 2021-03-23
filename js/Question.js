class Question{
    constructor(){
        this.nameInput = createInput("Enter your name here...");
        this.optionInput = createInput("Enter correct option here...");
        this.submitButton = createButton('Submit');
    }
    display(){
        var title = createElement('h1');
        title.html("Welcome to Tyagi Quiz");
        title.position(290, 1);

        var question = createElement('h2');
        question.html("What starts and ends with letter 'E', but has only one letter?");
        question.position(20, 101);

        var option1 = createElement('h2');
        option1.html("a) Envelope");
        option1.position(20, 140);
        
        var option2 = createElement('h2');
        option2.html("b) Example");
        option2.position(20, 180);

        this.nameInput.position(260,300);

        this.optionInput.position(460,300);

        this.submitButton.position(420, 360);

        this.submitButton.mousePressed(() => {
            this.nameInput.hide();
            this.optionInput.hide();
            this.submitButton.hide();

            contestant.name = this.nameInput.value();
            contestant.answer = this.optionInput.value();

            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

            var x = createElement('h2');
            x.html(contestant.name + ": " + contestant.answer)
            x.position(360, 300);
        })
    }
}