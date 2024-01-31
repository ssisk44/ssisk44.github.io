import { useEffect, useRef, useState } from 'react';

const Canvas = props => {
	const {draw, ...rest} = props
	const canvasRef = useRef();

	let cellSize = 100;
	let drawingLineWidth = 2;
	let normalizationRange = 3;
	let particleVelo = 0.5;
	let particleStrokeStyle = 'hsla(0, 0%, 100%, 0.05)';
	
	class FlowField {
		#context;
		#width;
		#height;
		constructor(ctx, width, height){
			this.#context = ctx;
			this.#width = width;
			this.#height = height;
			this.#context.lineWidth = 2; // vector drawing width
			this.cellSize = cellSize;
			this.vectorLen = this.cellSize * 0.5;
			this.startingAngle = Math.random() * 360;
			this.flowField = []
			this.normalizationRange = normalizationRange;
			this.#initFlowField()
		}
	
	
	
		#initFlowField() {
			for(let y = 0; y < this.#height; y += this.cellSize){ // rows
				let flowFieldColumns = []
				for(let x = 0; x < this.#width; x += this.cellSize){ // columns
					let angle = Math.random() * 360;
					flowFieldColumns.push({'angle': angle, 'x': x, "y": y});
				}
				this.flowField.push(flowFieldColumns);
			}
			this.#normalizeFlowFieldVectors();
			// this.#drawVectors();
		}
	
		#normalizeFlowFieldVectors() {
			const yRangeMin = 0;
			const yRangeMax = this.flowField.length;
			const xRangeMin = 0;
			const xRangeMax = this.flowField[0].length;
	
			// gets grid squares in x/y range of normalization range and averages their angles (if x,y >= 0)
			for (let gridSquareRow = 0; gridSquareRow < this.flowField.length; gridSquareRow++){
				for (let gridSquareColumn = 0; gridSquareColumn < this.flowField[gridSquareRow].length; gridSquareColumn++){
					let angleAVG = 0;
					let angleCounter = 0;
					const yMin = (yRangeMin > gridSquareRow - this.normalizationRange) ? yRangeMin : gridSquareRow - this.normalizationRange;
					const yMax = (yRangeMax < gridSquareRow + this.normalizationRange) ? yRangeMax : gridSquareRow + this.normalizationRange;
					const xMin = (xRangeMin > gridSquareColumn - this.normalizationRange) ? xRangeMin : gridSquareColumn - this.normalizationRange;
					const xMax = (xRangeMax < gridSquareColumn + this.normalizationRange) ? xRangeMax : gridSquareColumn + this.normalizationRange;
					
					// calculate avg surrounding angle
					for(let y=yMin; y<yMax; y++){
						for(let x=xMin; x<xMax; x++){
							angleAVG += (this.flowField[y][x]).angle;
							angleCounter += 1;
						}
					}
					this.flowField[gridSquareRow][gridSquareColumn].angle = ~~(angleAVG/angleCounter);
				}
			}
		}
	}
	
	class Particle {
		constructor(ctx, ch, cw){
			this.lastX = Math.random() * ch;
			this.lastY = Math.random() * cw;
			this.x = null;
			this.y = null;
			this.velo = particleVelo;
			this.angle = null;
			this.context = ctx;
			this.ch = ch;
			this.cw = cw;
		}
	
		resetParticle(){
			this.lastX = this.x = Math.random() * this.ch;
			this.lastY = this.y = Math.random() * this.cw;
			// this.angle = null; add in future
		}
	
		checkInBoundary(){
			if (this.lastY > this.cw || this.lastY < 0 || this.lastX > this.ch || this.lastX < 0){
				this.resetParticle();
			}
		}
	
		getFlowFieldGridCellAngle(){
			const rowLocation = Math.floor(this.y / cellSize);
			const columnLocation = Math.floor(this.x / cellSize);
			const gridCellAngle = flowField.flowField[rowLocation][columnLocation].angle;
			return gridCellAngle;
		}
	
		adjustParticleVelocity(){ // TO DO
			const gridCellAngle = this.getFlowFieldGridCellAngle();
			if (this.angle == null){
				this.angle = gridCellAngle;
			} else {
				this.angle = (this.angle + gridCellAngle * 0.25) / 1.25;
			}
			// this.angle = gridCellAngle;
			
		}
	
		draw(){
			this.context.strokeStyle = particleStrokeStyle;
			this.context.lineWidth = drawingLineWidth;
			this.context.beginPath();
			this.context.moveTo(this.lastX, this.lastY);
			this.x = this.lastX + Math.cos(this.angle) * this.velo;
			this.y = this.lastY + Math.sin(this.angle) * this.velo;
			this.context.lineTo(this.x, this.y);
			this.context.stroke();	
		}
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		let animationID
		let particles = [];
		let numParticles = 100000;
		let ch = canvas.width = window.innerWidth;
		let cw = canvas.height = window.innerHeight;
	
		// initialize flowfield
		let flowField = new FlowField(context, canvas.width, canvas.height);

		// initialize particles
		for (let p=0; p<numParticles; p++){
			particles.push(new Particle(context, ch, cw))
		}

		const render = () => {
			draw(context)
			animationID = window.requestAnimationFrame(render)
		}
		render()

		return () => {
			window.cancelAnimationFrame(animationID)
		}
		
	}, [draw])

	

	return (<canvas ref={canvasRef} {...rest} />);
  }

export default Canvas;