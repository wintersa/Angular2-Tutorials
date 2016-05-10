System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n           <h2>Game Setup</h2>\n           Enter your name please:\n           <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngClass]=\"{\n          puzzle: true,\n          solved: switch1.value ==  switch1Number &&\n                  switch2.value ==  switch2Number &&\n                  switch3.value ==  switch3Number &&\n                  switch4.value ==  switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n        >\n            <h2>\n                The Puzzle |\n                {{switch1.value ==  switch1Number &&\n                        switch2.value ==  switch2Number &&\n                        switch3.value ==  switch3Number &&\n                        switch4.value ==  switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Welcome to the game <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value !=  switch1Number ||\n                      switch2.value !=  switch2Number ||\n                      switch3.value !=  switch3Number ||\n                      switch4.value !=  switch4Number\">\n\n            You won the game! Congratulations {{name.value}} </h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQUFBO2dCQWVBLENBQUM7Z0JBVEcsa0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUN0QyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkEzREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLCttREF3Q1Q7cUJBRUYsQ0FBQzs7bUNBQUE7Z0JBZ0JGLHNCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCw2Q0FlQyxDQUFBIiwiZmlsZSI6InB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvblxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgcHV6emxlOiB0cnVlLFxuICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSAgc3dpdGNoMU51bWJlciAmJlxuICAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSAgc3dpdGNoMk51bWJlciAmJlxuICAgICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSAgc3dpdGNoM051bWJlciAmJlxuICAgICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSA9PSAgc3dpdGNoNE51bWJlclxuICAgICAgICB9XCJcbiAgICAgICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgVGhlIFB1enpsZSB8XG4gICAgICAgICAgICAgICAge3tzd2l0Y2gxLnZhbHVlID09ICBzd2l0Y2gxTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gyLnZhbHVlID09ICBzd2l0Y2gyTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09ICBzd2l0Y2gzTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09ICBzd2l0Y2g0TnVtYmVyID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPldlbGNvbWUgdG8gdGhlIGdhbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgU3dpdGNoIDE6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaCAyOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMzpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgU3dpdGNoIDQ6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9ICBzd2l0Y2gxTnVtYmVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSAhPSAgc3dpdGNoMk51bWJlciB8fFxuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgIT0gIHN3aXRjaDNOdW1iZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlICE9ICBzd2l0Y2g0TnVtYmVyXCI+XG5cbiAgICAgICAgICAgIFlvdSB3b24gdGhlIGdhbWUhIENvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSA8L2gyPlxuICBgXG5cbn0pXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IHtcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICB0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLCB0aGlzLnN3aXRjaDJOdW1iZXIsXG4gICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIsIHRoaXMuc3dpdGNoNE51bWJlcik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
