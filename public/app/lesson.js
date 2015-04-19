(function(window){
    "use strict";

    var lesson = function(number, text, regex){
        this.number = number;
        this.text = text;
        this.regex = regex;
        this.complete = false;
    }

    lesson.prototype = {
        isComplete : function(){
            if(this.complete){
                return true;
            }

            var pattern = new RegExp(this.regex);
            if(pattern.test(this.text)){
                this.complete = true;
            }

            return this.complete;
        }
    }

    window.Lesson = lesson;

})(window);