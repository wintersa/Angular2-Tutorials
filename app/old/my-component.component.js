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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Tony';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span>\n\n\n\n        and am fucking <span [class.is-awesome]=\"inputElement.value === 'yes'\">awesome</span>\n        <br>\n        <br>\n        Freakin awesome isn't it?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' is entered</button>\n  ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC9teS1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUFBO29CQUNJLFNBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7Z0JBbkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFHLGNBQWM7d0JBQ3pCLFFBQVEsRUFBRSxpYkFXVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDdkMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoib2xkL215LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICBIaSwgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJ1wiPnt7bmFtZX19PC9zcGFuPlxuXG5cblxuICAgICAgICBhbmQgYW0gZnVja2luZyA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+YXdlc29tZTwvc3Bhbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIEZyZWFraW4gYXdlc29tZSBpc24ndCBpdD9cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJpbnB1dEVsZW1lbnQudmFsdWUgIT09ICd5ZXMnXCI+T25seSBlbmFibGVkIGlmICd5ZXMnIGlzIGVudGVyZWQ8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudHtcbiAgICBuYW1lID0gJ1RvbnknO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
