var myGame = new Kiwi.Game();
var myState = new Kiwi.State("myState");
var loadingState = new Kiwi.State("loadingState");
var preloader = new Kiwi.State("preloader");
myState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
};
myState.create = function () {
    /*this.background = new Kiwi.GameObjects.StaticImage(
		this, this.textures["background"], 0, 0, true);
    this.character = new Kiwi.GameObjects.Sprite(
		this, this.textures["characterSprite"], 350, 330, true);*/
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['grid'], 0, 0);
    this.addChild(this.background);
    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['ninja'], 10, 400);
    this.header = new Kiwi.GameObjects.StaticImage(this, this.textures['header'], 12, 0);
    this.addChild(this.header);
    this.textbg1 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg2'], 29, 148);
    this.addChild(this.textbg1);
    this.textbg1.alpha = 0;
    this.textbg2 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg2'], 29, 148);
    this.addChild(this.textbg2);
    this.textbg2.alpha = 0;
    this.textbg3 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg2'], 260, 148);
    this.addChild(this.textbg3);
    this.textbg3.alpha = 0;
    this.textbg4 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg2'], 540, 148);
    this.addChild(this.textbg4);
    this.textbg4.alpha = 0;
    this.sign1 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 30, 430);
    this.addChild(this.sign1);
    this.sign2 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 300, 430);
    this.addChild(this.sign2);
    this.sign3 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 750, 430);
    this.addChild(this.sign3);
    this.sign4 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 970, 430);
    this.addChild(this.sign4);
    this.sign5 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1200, 430);
    this.addChild(this.sign5);
    this.sign7 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1490, 430);
    this.addChild(this.sign7);
    this.sign8 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1750, 430);
    this.addChild(this.sign8);
    this.selOrdrTyp2 = new Kiwi.GameObjects.StaticImage(this, this.textures['orderTyp2'], 670, 280);
    this.addChild(this.selOrdrTyp2);
    this.selOrdrTyp3 = new Kiwi.GameObjects.StaticImage(this, this.textures['orderTyp3'], 900, 280);
    this.addChild(this.selOrdrTyp3);
    this.selOrdrTyp4 = new Kiwi.GameObjects.StaticImage(this, this.textures['orderTyp4'], 1130, 280);
    this.addChild(this.selOrdrTyp4);
    this.step = 3;
    //Other Images
    /*this.text1 = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures['textAtlas'],
		"Hey look!    This is a    text box.", 66, 198);
    this.addChild(this.text1);
    this.text1.maxWidth = 210;
    this.text1.alphabeticalCells['.'] = 63;
    this.text1.alphabeticalCells['!'] = 62;
    this.text1.alphabeticalCells['$'] = 64;
    this.text1.alphabeticalCells['#'] = 65;
    this.text1.alphabeticalCells[' '] = 66;
    this.text1.scaleX = 0.6;
    this.text1.scaleY = 0.6;
    this.text1.alpha = 0;
    this.text2 = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures['textAtlas'],
		"There is more textin this section so we have made it smaller and incresed the width of the object.", 300, 180);
    this.addChild(this.text2);
    this.text2.maxWidth = 300;
    this.text2.alphabeticalCells['.'] = 63;
    this.text2.alphabeticalCells['!'] = 62;
    this.text2.alphabeticalCells['$'] = 64;
    this.text2.alphabeticalCells['#'] = 65;
    this.text2.alphabeticalCells[' '] = 66;
    this.text2.scaleX = 0.6;
    this.text2.scaleY = 0.6;
    this.text2.alpha = 0;
    this.text3 = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures['textAtlas'],
		"You can change the    font and color of the text by using a       different texture", 560, 192);
    this.addChild(this.text3);
    this.text3.maxWidth = 360;
    this.text3.alphabeticalCells['.'] = 63;
    this.text3.alphabeticalCells['!'] = 62;
    this.text3.alphabeticalCells['$'] = 64;
    this.text3.alphabeticalCells['#'] = 65;
    this.text3.alphabeticalCells[' '] = 66;
    this.text3.scaleX = 0.6;
    this.text3.scaleY = 0.6;
    this.text3.alpha = 0;
    this.topText = new Kiwi.Plugins.GameObjects.BitmapText(this, this.textures['textAtlas'],
		"ASDA DOTCOM FULFILMENT : WM2011!", 195, 33);
    this.topText.maxWidth = 2000;
    this.topText.alphabeticalCells['.'] = 63;
    this.topText.alphabeticalCells['!'] = 62;
    this.topText.alphabeticalCells['$'] = 64;
    this.topText.alphabeticalCells['#'] = 65;
    this.topText.alphabeticalCells[' '] = 66;
    this.topText.scaleX = 0.7;
    this.topText.scaleY = 0.9;
    this.addChild(this.topText);*/
    // Other Images :End
    Kiwi.State.prototype.create.call(this);
    this.jumpKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ALT, true);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN, true);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT, true);
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT, true);
    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['ninja'], 10, 400);
    this.character.animation.add('idle', [0], 0.1, false);
    this.character.animation.add('move', [1, 2, 3, 4, 5, 6], 0.1, true);
    this.character.animation.add('jump', [9], 0.1, true);
    this.character.animation.play('idle');
    this.addChild(this.character);
    this.character.box.hitbox = new Kiwi.Geom.Rectangle(48, 37, 27, 75);
    /*this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.A);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.D);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.S);
    this.character.animation.add(
		"idleright", [0], 0.1, false);
    this.character.animation.add(
		"crouchright", [1], 0.1, false);
    this.character.animation.add(
		"moveright", [2, 3, 4, 5, 6, 7], 0.1, true);
    this.character.animation.add(
		"idleleft", [8], 0.1, false);
    this.character.animation.add(
		"crouchleft", [9], 0.1, false);
    this.character.animation.add(
		"moveleft", [15, 14, 13, 12, 11, 10], 0.1, true);
    this.facing = "right";
    this.character.animation.play("idleright");
    this.addChild(this.background);
    this.addChild(this.character);*/
};
myState.update = function () {
    Kiwi.State.prototype.update.call(this);
    // Move the player with the arrow keys. 
    if (this.leftKey.isDown) {
        this.character.scaleX = -1;
        this.character.x -= 3;
        if (this.character.animation.currentAnimation.name != 'move')
            this.character.animation.switchTo('move', true);
    }
    else if (this.rightKey.isDown) {
        this.character.scaleX = 1;
        this.character.x += 3;
        if (this.character.animation.currentAnimation.name != 'move')
            this.character.animation.switchTo('move', true);
    }
    else if (this.jumpKey.isDown) {
        this.character.scaleY = 1;
        this.character.y -= 5;
        if (this.character.animation.currentAnimation.name != 'jump')
            this.character.animation.switchTo('jump', true);
    }
    else
        this.character.animation.switchTo('idle');
    var playerOffsetX = this.character.width * 0.5;
    var playerOffsetY = this.character.height * 0.5;
    // Set the cameras position to that of the player.
    this.game.cameras.defaultCamera.transform.x = -1 * this.character.x + this.game.stage.width * 0.5 - playerOffsetX;
    this.game.cameras.defaultCamera.transform.y = -1 * this.character.y + this.game.stage.height * 0.5 - playerOffsetY;
    /*if (this.downKey.isDown) {
        if (this.character.animation.currentAnimation.name !==
				("crouch" + this.facing)) {
            this.character.animation.play("crouch" + this.facing);
        }
    } else if (this.leftKey.isDown) {
        this.facing = "left";
        if (this.character.transform.x > 3) {
            this.character.transform.x -= 3;
        }
        if (this.character.animation.currentAnimation.name !==
				"moveleft") {
            this.character.animation.play("moveleft");
        }
    } else if (this.rightKey.isDown) {
        this.facing = "right";
        if (this.character.transform.x < 600) {
            this.character.transform.x += 3;
        }
        if (this.character.animation.currentAnimation.name !==
			"moveright") {
            this.character.animation.play("moveright");
        }
     }else if (this.character.animation.currentAnimation.name !==
			"idle" + this.facing) {
        this.character.animation.play("idle" + this.facing);
    }*/
};
// Loading assets
myState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
};
preloader.preload = function () {
    Kiwi.State.prototype.preload.call(this);
    this.addImage("loadingImage", "images/loadingImage.png", true);
};
preloader.create = function () {
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState("loadingState");
};
loadingState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
    this.game.states.rebuildLibraries();
    this.game.stage.color = "#E0EDF1";
    this.logo = new Kiwi.GameObjects.StaticImage(
		this, this.textures["loadingImage"], 150, 50);
    this.addChild(this.logo);
    this.logo.alpha = 0;
    this.tweenIn = this.game.tweens.create(this.logo);
    this.tweenIn.to(
		{ alpha: 1 }, 1000, Kiwi.Animations.Tweens.Easing.Linear.None, false);
    this.tweenIn.start();
    // Assets to load
    this.addSpriteSheet("characterSprite", "images/character.png", 150, 117);
    this.addSpriteSheet('ninja', 'images/ninja.png', 150, 117, true);
    this.addSpriteSheet('textAtlas', 'images/textAtlas.png', 16, 30, true);
    this.addSpriteSheet('otherfont', 'images/otherfont.png', 21, 30, true);
    this.addImage("background", "images/jungle.png");
    this.addImage('grid', 'images/background1.png');
    this.addImage('header', 'images/header.png', true);
    this.addImage('sign', 'images/sign.png', true);
    this.addImage('header', 'images/header.png', true);
    this.addImage('textbg1', 'images/textbg1.png', true);
    this.addImage('textbg2', 'images/textbg2.png', true);
    this.addImage('textbg3', 'images/textbg3.png', true);
    this.addImage('orderTyp2', 'images/2.png', true);
    this.addImage('ISCButton', 'images/ISC.png', true);
    this.addImage('orderTyp3', 'images/3.png', true);
    this.addImage('META_PACKButton', 'images/META_PACK.png', true);
    this.addImage('orderTyp4', 'images/4.png', true);
    this.addImage('ISC20Button', 'images/ISC20.png', true);
    this.addImage('ISCLock', 'images/L1.png', true);
    this.addImage('META_PACKLock', 'images/L2.png', true);
    this.addImage('ISC20Lock', 'images/L3.png', true);
};
loadingState.update = function () {
    Kiwi.State.prototype.update.call(this);
};
loadingState.create = function () {
    Kiwi.State.prototype.create.call(this);
    console.log("inside create of loadingState");
    this.tweenOut = this.game.tweens.create(this.logo);
    this.tweenOut.to(
		{ alpha: 0 }, 1000, Kiwi.Animations.Tweens.Easing.Linear.None, false);
    this.tweenOut.onComplete(this.switchToMain, this);
    this.tweenOut.start();
};
loadingState.switchToMain = function () {
    this.game.states.switchState("myState");
};
myGame.states.addState(myState);
myGame.states.addState(loadingState);
myGame.states.addState(preloader);
myGame.states.switchState("preloader");