function drawCharting(div, jsonData){
	var paper;

	if (jsonData.width && jsonData.height){
		canvasWidth = jsonData.width;
		canvasHeight= jsonData.height;
	} else {
		canvasWidth = div.clientWidth;
		canvasHeight= div.clientHeight;
	}

	var padding = (canvasWidth+canvasHeight)/50,
	    axeBorder  = padding/6,
	    border  = axeBorder*1.5,
	    font=padding/1.5;
	padding = {
		'top': padding/2,
		'left': padding,
		'right': padding/2,
		'bottom': padding,
	};


	paper = Raphael(div, canvasWidth, canvasHeight);

	var drawGrid = function(width,height){
		// Ось OY
		paper.path(Raphael.format(
			"M{0},{1}v-{2}",
			padding.left, height+padding.top+2*axeBorder,
			height+2*axeBorder
		)).attr({'stroke-width': axeBorder, 'arrow-end': 'classic'});
		// Ось OX
		paper.path(Raphael.format(
			"M{0},{1}h{2}",
			padding.left-2*axeBorder, height+padding.top,
			width+2*axeBorder
		)).attr({'stroke-width': axeBorder, 'arrow-end': 'classic'});
	};

	// Список дефолтных цветов
	var getColors = function(n){
		var hue = 240,
		    edge = 3,
		    offset = 60;
		var colors=[];
		for (var i=0; i<n; ++i){
			colors.push(Raphael.hsb(hue/360,0.6,0.8));
			hue+=120;
			if (i%3==2){
				hue+=240-offset;
				if (i+1==edge){
					offset+=offset/2;
					edge*=2;
				}
			}
			hue-=hue<360?0:360;
		}
		return colors;
	};

	var width   = canvasWidth -padding.left-padding.right,
	    height  = canvasHeight-padding.top-padding.bottom;

	var colors = getColors(jsonData.answers.length);

	var lineChart = function(){

		var max=parseFloat(jsonData.answers[0]['count']);
		for(var i in jsonData.answers){
			var item=parseFloat(jsonData.answers[i]['count']);
			if (max<item) max=item;
		}

		var factor=Math.floor(Math.log(Math.abs(max))/Math.log(10)),
		    unit=Math.pow(10,factor);

		padding.left*=Math.abs(factor)/2+1;
		width=canvasWidth-padding.left-padding.right;

		var x=padding.left;
		var stepX = (width - 5*axeBorder)/(jsonData.answers.length-1);

		// Подписи оси OX
		if (!jsonData.disableTooltips){
			var names = paper.set();
			var maxText=0,
				nameFont=font>stepX?stepX:font;
			if (jsonData.answers.length==1){
				names.push(paper.text(0, (width - 5*axeBorder)/2, jsonData.answers[0].name).attr('font-size', nameFont));
				maxText=names[0].getBBox().width;
			} else
				for(var i=0; i < jsonData.answers.length; ++i){
					names.push(paper.text(0, i*stepX, jsonData.answers[i].name).attr('font-size', nameFont));
					if (maxText<names[i].getBBox().width)
						maxText=names[i].getBBox().width;
				}
			if (maxText>canvasHeight/2){
				var k = 0.5*canvasHeight/maxText;
				nameFont*=k;
				maxText=0.5*canvasHeight;
			}
			for(var i=0; i < jsonData.answers.length; ++i){
				if (k) names[i].attr('font-size', nameFont);
				var offset = canvasHeight-(padding.bottom+2*maxText-names[i].getBBox().width)/2;
				names[i].transform(Raphael.format('r -90,{0},{1}',
					(offset+padding.left)/2,
					(offset-padding.left)/2
				));
			}

			padding.bottom+=maxText;
			height=canvasHeight-padding.top-padding.bottom;
		}
		////

		drawGrid(width,height);
		var stepY=(height - 6*axeBorder)/max;

		if (border>stepX/3)
			border=stepX/3;

		var linePath='';
		var grid='';
		var scalaPath='';
		
		if (jsonData.answers.length==1){
			var y = height+padding.top-parseFloat(jsonData.answers[0]['count'])*stepY;
			linePath = 'M'+x+','+y+'L'+(width - 5*axeBorder+x)+','+y;
			scalaPath+='M'+((width - 5*axeBorder)/2+x)+','+(height+padding.top-axeBorder/2)+'v-'+axeBorder;
			grid+='M'+((width - 5*axeBorder)/2+x)+','+(height+padding.top-axeBorder*1.5)+'V'+(padding.top+6*axeBorder);
			var col = jsonData.answers[0].color? jsonData.answers[0].color: colors[0];
			paper.circle((width - 5*axeBorder)/2+x, (height+padding.top-parseFloat(jsonData.answers[0]['count'])*stepY), border).attr({
				'stroke-width': border/1.5,
				'stroke': col,
				'fill': Raphael.hsl(
					Raphael.color(col).h,
					Raphael.color(col).s,
					Raphael.color(col).l/2+0.5
				)
			});
		} else
			for(var i=0; i < jsonData.answers.length; ++i){
				linePath+=(i?'L':'M')+x+','+(height+padding.top-parseFloat(jsonData.answers[i]['count'])*stepY);
				scalaPath+='M'+x+','+(height+padding.top-axeBorder/2)+'v-'+axeBorder;
				grid+='M'+x+','+(height+padding.top-axeBorder*1.5)+'V'+(padding.top+6*axeBorder);
				var col = jsonData.answers[i].color? jsonData.answers[i].color: colors[i];
				paper.circle(x, (height+padding.top-parseFloat(jsonData.answers[i]['count'])*stepY), border).attr({
					'stroke-width': border/1.5,
					'stroke': col,
					'fill': Raphael.hsl(
						Raphael.color(col).h,
						Raphael.color(col).s,
						Raphael.color(col).l/2+0.5
					)
				});
				x+=stepX;
			}
		paper.path(linePath).attr({
			'stroke-width': border,
			'stroke': (jsonData.color===undefined)?'#4747b2':jsonData.color,
			'fill': 'none',
			'stroke-linejoin': 'round'
		}).toBack();

		var interval=unit*stepY;
		for (var i=1; i<=max/unit; ++i){
			var graduation=+(i*unit).toFixed(16);
			scalaPath+='M'+(padding.left+axeBorder/2)+','+(height+padding.top-graduation*stepY)+'h'+(axeBorder);
			grid+='M'+(padding.left+axeBorder*1.5)+','+(height+padding.top-graduation*stepY)+'H'+(canvasWidth-padding.right-5*axeBorder);
			paper.text(padding.left/2, height+padding.top-graduation*stepY, graduation).attr('font-size', font>interval? interval: font);
		}

		paper.path(scalaPath).attr({'stroke-width': axeBorder/1.5, 'fill': 'none'}).toBack();
		paper.path(grid).attr({'stroke-width': axeBorder/1.5, 'fill': 'none', 'stroke': '#f0f0f0'}).toBack();
	};

	var gistoChart = function(){
		var max=parseFloat(jsonData.answers[0]['count']);
		for(var i in jsonData.answers){
			var item=parseFloat(jsonData.answers[i]['count']);
			if (max<item) max=item;
		}

		var factor=Math.floor(Math.log(Math.abs(max))/Math.log(10)),
		    unit=Math.pow(10,factor);

		padding.left*=Math.abs(factor)/2+1;
		width=canvasWidth-padding.left-padding.right;

		drawGrid(width,height);

		var stepX = (width - 8*axeBorder)/jsonData.answers.length;
		var stepY = (height - 6*axeBorder)/max;

		var dutyCycle = (jsonData.answers.length==1)?0.3:0.7,
		    halfInt=(1-dutyCycle)/2*stepX,
		    gistHeight;
		var scalaPath='',
		    scalaVal=axeBorder;

		if (border>dutyCycle*stepX/10)
			border=dutyCycle*stepX/10;
		if (scalaVal>border/1.5)
			scalaVal=border/1.5;
		var x=padding.left+axeBorder+scalaVal*2;

		for(var i=0; i < jsonData.answers.length; ++i){
			gistHeight=parseFloat(jsonData.answers[i]['count'])*stepY;
			var col = jsonData.answers[i].color? jsonData.answers[i].color: colors[i];
			paper.path(Raphael.format(
				'M{0},{1}v-{2}h{3}v{2}',
				x+halfInt+border/2, height+padding.top-axeBorder/2,
				gistHeight-border, dutyCycle*stepX-border
			)).attr({'stroke-width': border, 'fill': col, 'stroke': Raphael.hsb(Raphael.color(col).h,Raphael.color(col).s,Raphael.color(col).v*0.6)});
			x+=stepX;
			scalaPath+='M'+x+','+(height+padding.top-axeBorder/2)+'v-'+(scalaVal);
		}

		var grid='';
		for (var i=1; i<=max/unit; ++i){
			var graduation=+(i*unit).toFixed(16);
			scalaPath+='M'+(padding.left+axeBorder/2)+','+(height+padding.top-graduation*stepY)+'h'+(scalaVal);
			grid+='M'+(padding.left+axeBorder/2+scalaVal)+','+(height+padding.top-graduation*stepY)+'H'+(canvasWidth-padding.right-3*axeBorder);
			paper.text(padding.left/2, height+padding.top-graduation*stepY, graduation).attr('font-size', font);
		}
		paper.path(scalaPath).attr({'stroke-width': scalaVal/1.5, 'fill': 'none'}).toBack();
		paper.path(grid).attr({'stroke-width': scalaVal/1.5, 'fill': 'none', 'stroke': '#f0f0f0'}).toBack();
	};

	var circleChart = function(){
		var cx=canvasWidth/2,
		    cy=canvasHeight/2,
		    // rx=width/2,
		    // ry=height/2;
		    r=Math.min(width/2,height/2);

		var bx=cx,
		    // by=cy-ry,
		    by=cy-r,
		    ex, ey;

		var sum=0;
		for(var i in jsonData.answers)
			sum+=parseFloat(jsonData.answers[i]['count']);

		var pie,sin,cos;
		if (jsonData.answers.length==1){
			paper.circle(cx,cy,r).attr({'stroke-width': 0, 'fill':jsonData.answers[0].color? jsonData.answers[0].color: colors[0]});
		} else
			for(var i=0; i < jsonData.answers.length; ++i){
				pie = parseFloat(jsonData.answers[i]['count'])/sum*360;
				sin=Math.sin(Raphael.rad(pie));
				cos=Math.cos(Raphael.rad(pie));
				ex=cx-cx*cos+cy*sin + bx*cos-by*sin;
				ey=cy-cy*cos-cx*sin + by*cos+bx*sin;

				paper.path(Raphael.format(
					'M{0},{1}L{2},{3}A{4},{4} 0 {7},1 {5},{6}z',
					cx,cy,bx,by,r,ex,ey,(pie>180?1:0))
				).attr({'stroke-width': 0, 'fill':jsonData.answers[i].color? jsonData.answers[i].color: colors[i]});
				bx=ex;
				by=ey;
			}
	};

	switch(jsonData.type){
		case 0: // Линия
			lineChart();
			break;
		case 1: // Гистограмма
			gistoChart();
			break;
		case 2: // Круговая
			circleChart();
			break;
	}
}
