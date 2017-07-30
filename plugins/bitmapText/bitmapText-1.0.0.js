/**
* 
* @model Kiwi
* @submodel Plugins
* @class BitmapText
*/
Kiwi.Plugins.BitmapText = {
	name: 'BitmapText',
	version: '1.0.0'
}
	
Kiwi.PluginManager.register(Kiwi.Plugins.BitmapText);


//Do Kiwi Plugin GameObjects Exist?
if( typeof Kiwi.Plugins.GameObjects == "undefined") {
    Kiwi.Plugins.GameObjects = {}; 
}


Kiwi.Plugins.GameObjects.BitmapText = function(state, atlas, text, x, y) {
    //Call the parent.
    Kiwi.Entity.call(this, state, x, y);


    this._alphabeticalCells = { 
        a:26,    A:0,
        b:27,    B:1,
        c:28,    C:2,
        d:29,    D:3,
        e:30,    E:4,
        f:31,    F:5,
        g:32,    G:6,
        h:33,    H:7,
        i:34,    I:8,
        j:35,    J:9,
        k:36,    K:10,
        l:37,    L:11,
        m:38,    M:12,
        n:39,    N:13,
        o:40,    O:14,
        p:41,    P:15,
        q:42,    Q:16,
        r:43,    R:17,
        s:44,    S:18,
        t:45,    T:19,
        u:46,    U:20,
        v:47,    V:21,
        w:48,    W:22,
        x:49,    X:23,
        y:50,    Y:24,
        z:51,    Z:25,
        "0":52,  "1":53,
        "2":54,  "3":55,
        "4":56,  "5":57,
        "6":58,  "7":59,
        "8":60,  "9":61,
        ".":62,  "$":63,
        ",":64,  "!":65,
        "#":66,  ' ':67
    };
    
    this.atlas = atlas;
    this.text = text;
    this.supported = true;
    this._tempDirty = true;
    this.maxWidth = null;

    if(this.atlas.type == Kiwi.Textures.TextureAtlas.SINGLE_IMAGE) {
        
        this.supported = false;
        if(this.game.debugOption == Kiwi.DEBUG_ON) console.log('Single Images will not work with the Bitmap Text GameObject!');
    
    } else {

        this._tempCanvas = document.createElement('canvas');
        this._tempCtx = this._tempCanvas.getContext('2d');

    }
}


Kiwi.extend(Kiwi.Plugins.GameObjects.BitmapText, Kiwi.Entity);


Object.defineProperty(Kiwi.Plugins.GameObjects.BitmapText.prototype, "alphabeticalCells", {
    get: function() {
        return this._alphabeticalCells;
    },
    set: function(val) {
        //Re-render
        this._tempDirty = true;
        this._alphabeticalCells = val;
    },
    enumerable: true,
    configurable: true
});


Object.defineProperty(Kiwi.Plugins.GameObjects.BitmapText.prototype, "text", {
    get: function() {
        return this._text;
    },
    set: function(val) {
        //Re-render
        this._tempDirty = true;
        this._text = val;
    },
    enumerable: true,
    configurable: true
});


Kiwi.Plugins.GameObjects.BitmapText.prototype.update = function() {
    Kiwi.Entity.prototype.update.call(this);
}


//Re-renders the text...
Kiwi.Plugins.GameObjects.BitmapText.prototype._renderText = function() {

	//Clear the canvas.
    this._tempCtx.clearRect(0, 0, this._tempCanvas.width, this._tempCanvas.height);

    var width = 0;
    var height = 0;

    var lines = [{text:[],height:0}];

    //Calculate the height/width?...
    for(var i = 0; i < this.text.length; i++) {

    	var cell = this.atlas.cells[ this.alphabeticalCells[ this.text[i] ] ];

        if(typeof cell !== "undefined" && typeof cell !== null) {

            //No max-width specified
            if(this.maxWidth == null) {

                //calculate the height..
    	    	if(cell.h > height) height = cell.h; 

	    	    //Calculate the width
	    	    width += parseInt( cell.w );

            //Max-width specified
            } else {

                //Get what would be the new width
                var cw = width + parseInt( cell.w );

                //Would it extend past the maxWidth?
                if(cw >= this.maxWidth) {
                    //Reset the width/generate new line.
                    width = parseInt( cell.w );
                    lines.push( {text:[], height:0} );

                //Otherwise add the width to it
                } else {
                    width = cw;

                }

                //Does the new height extend past the regular height?
                if(lines[lines.length - 1].height < cell.h) lines[lines.length - 1].height = cell.h;

            }

            //Add the text to the next line.
            lines[lines.length - 1].text.push( cell );
    
        }

    }

    console.log(lines);

    if(this.maxWidth !== null) {
        height = 0;
        for(var i = 0; i < lines.length; i++) {
            height += lines[i].height;
        }

        if(lines.length > 0) width = this.maxWidth;
    }

    this._tempCanvas.width = width;
    this._tempCanvas.height = height;

    var x = 0;  
    var y = 0;  

    //Loop through the lines.
    for(var j = 0; j < lines.length; j++) {
        for(var i = 0; i < lines[j].text.length; i++) {

            var cell = lines[j].text[i];

            this._tempCtx.drawImage( this.atlas.image, cell.x , cell.y, cell.w, cell.h, x, y, cell.w, cell.h );
        
            x += parseInt( cell.w );
            
        }

        x = 0;
        y += lines[j].height;

    }

    this._tempDirty = false;
}


//Render Loop
Kiwi.Plugins.GameObjects.BitmapText.prototype.render = function(camera) {


    if(this.supported && this.alpha > 0 && this.visibility) {

        //render on stage
        var ctx = this.game.stage.ctx;
        ctx.save();

        var t = this.transform;
        if (this.alpha > 0 && this.alpha <= 1) {
            ctx.globalAlpha = this.alpha;
        }

        //does the text need re-rendering
        if (this._tempDirty) this._renderText();

        var m = t.getConcatenatedMatrix();
        ctx.setTransform(m.a, m.b, m.c, m.d, m.tx + t.rotPointX, m.ty + t.rotPointY);
        ctx.drawImage(this._tempCanvas, 0, 0, this._tempCanvas.width, this._tempCanvas.height, -t.rotPointX, -t.rotPointY, this._tempCanvas.width, this._tempCanvas.height);

        ctx.restore();

    }

}