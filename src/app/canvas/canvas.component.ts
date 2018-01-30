/// <reference path="../../../node_modules/p5/lib/p5.global-mode.d.ts" />
const p5 = require("p5");
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  constructor(private location: Location ) {
		this.location.subscribe(val => console.log(this.location.subscribe));
	}

	myp5 = p5;
	returnCanvas = null;

	drawStuff() {
		this.returnCanvas = null;
		let sketch = function(param) {
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
		this.myp5 = new p5(sketch);
	}

	ngOnInit() {
		console.log(this.myp5);

		this.drawStuff();
	}

	deleteCanvas() {
		this.myp5.remove();
		this.returnCanvas = "true";
	}

}
