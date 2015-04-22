(function(window){
    "use strict";

    //Lesson
    var lesson = function(number, name, text, validator){
        this.number = number;
        this.name = name;
        this.text = text;
        this.validator = validator;
        this.complete = false;
    }

    lesson.prototype = {
        isComplete : function(){
            if(this.complete){
                return true;
            }

            if(this.validator.isValid(this.text)){
                this.complete = true;
            }

            return this.complete;
        }
    }

    window.Lesson = lesson;


    //Validator
    var validator = function(regexes){
        var expressions = [];
        this.expressions = expressions;
        if(regexes){
            regexes.forEach(function(expression){
                expressions.push(new RegExp(expression));
            });
        }
    }

    validator.prototype = {
        isValid : function(input){
            var valid = false;
            this.expressions.forEach(function(expression){
                if(expression.test(input)){
                    valid = true;
                }
            });
            return valid;
        }
    }

    window.Validator = validator;



})(window);