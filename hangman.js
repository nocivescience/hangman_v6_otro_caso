var Hangman = (function () {
    // 'use strict';
    class Hangman {
        constructor(elId){
            this.elId       = elId;
            this.words      = [
                'PROGRAMMERWIZ', 'BRAINSTORMWIZ', 'CREATIVEWIZ', 'LOLLIPOPWIZ',
                'CULTUREWIZ', 'RAZORSHARPWIZ', 'SCREWDRIVERWIZ', 'TYPEWRITERWIZ'
            ]
        }
    }
    Hangman.prototype.colores= function(){
        document.getElementById('hangm').classList.toggle('fondo');
    }
    Hangman.prototype.letras=function(){
        document.getElementById('hangm').classList.toggle('letras');
    }
    Hangman.prototype.reset = function () {
        // Variables
        this.STOPPED        = false;
        this.MISTAKES       = 0;
        this.GUESSES        = [];
        // Select a random word from the list
        this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
        // DOM Elements
        this.hideElementByClass('h');
        this.showElementByIdWithContent(this.elId + "_guessbox", null);
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
    };
    Hangman.prototype.guess = function (letter) {
        letter = letter.charAt(0).toUpperCase();

        // Check if game is stopped or the user already guessed on that letter
        if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
            // Then we wont do anything
            return;
        }

        // Add the letter to our GUESSES array
        this.GUESSES.push(letter);
        // Update the word hint, and guessed letter list for the user
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));

        // Check if our word does not contain the guessed letter
        if (this.WORD.indexOf(letter) < 0) {
            // Incorrect guess, increase our mistakes by one
            this.MISTAKES++;
            // Show next part of hangman character
            this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);
            // Check if its Game Over
            if (this.MISTAKES === 8) {
                this.showElementByIdWithContent(this.elId + "_end", "GAME OVER!<br/>The word was: " + this.WORD);
                this.STOPPED = true;
            }
        } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
            // Victory condition
            this.showElementByIdWithContent(this.elId + "_end", "You made it!<br/>The word was: " + this.WORD);
            this.STOPPED = true;
        }
    };

    /**
     * Displays HTML element by id with the following content
     *
     * @param {string} elId     DOM ID
     * @param {HTML} content 
     */
    Hangman.prototype.showElementByIdWithContent = function (elId, content) {
        if (content !== null) {
            document.getElementById(elId).innerHTML = content;
        }
        document.getElementById(elId).style.opacity = 1;
        document.getElementById(elId).style.transform='rotateY(1800deg)';
        document.getElementById(elId).style.transition='.5s ease-out transform';
    };

    /**
     * Hides element by class
     *
     * @param {string} elClass DOM class
     */
    Hangman.prototype.hideElementByClass = function (elClass) {
        var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0.1;
            elements[i].style.transform='rotateY(0deg)';
        }
    };

    /**
     * The word but only with letters the user has guessed so far is visible
     */
    Hangman.prototype.getGuessedfWord = function () {
        var result = "", i;
        for (i = 0; i < this.WORD.length; i++) {
            // Word characters
            result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                    this.WORD[i] : "_";
        }
        return result;
    };

    // Create and return an instance of this class, its go time!
    return new Hangman('hangm');    
}());