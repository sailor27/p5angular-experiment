/// <reference path="../../node_modules/p5/lib/p5.global-mode.d.ts" />
const p5 = require("p5");
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'p5 and angular';

	drawStuff() {
		const sketch = function(param) {
			param.setup = function() {
				param.createCanvas(700, 420);
				param.background(51);
			};
			param.draw = function() {
				param.fill(255, 0, 200, 25);
				param.noStroke();
				param.ellipse(param.mouseX, param.mouseY, 40, 48, 48);
			};

		}
		const myp5 = new p5(sketch);
	}

	ngOnInit() {
		console.log(p5);
		this.drawStuff();
	}

}
