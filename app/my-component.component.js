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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsQ0FBQztnQkFuQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUcsY0FBYzt3QkFDekIsUUFBUSxFQUFFLGliQVdUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3FCQUN2QyxDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdURBRUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICAnbXktY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgSGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJydcIj57e25hbWV9fTwvc3Bhbj5cblxuXG5cbiAgICAgICAgYW5kIGFtIGZ1Y2tpbmcgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPmF3ZXNvbWU8L3NwYW4+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICBGcmVha2luIGF3ZXNvbWUgaXNuJ3QgaXQ/XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPk9ubHkgZW5hYmxlZCBpZiAneWVzJyBpcyBlbnRlcmVkPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnR7XG4gICAgbmFtZSA9ICdUb255Jztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
