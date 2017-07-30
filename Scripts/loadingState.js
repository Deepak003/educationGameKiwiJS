var loadingState = new Kiwi.State('loadingState');
var preloader = new Kiwi.State('preloader');
/////////////////////////////LOADING ASSETS///////////////////////////////
preloader.preload = function () {
    console.log("inside preload of preloader");
    Kiwi.State.prototype.preload.call(this);
    this.addImage("loadingImage", "images/loadingImage.png", true);
};
preloader.create = function () {
    console.log("inside create of preloader");
    Kiwi.State.prototype.create.call(this);
    myGame.states.switchState("loadingState");
};
loadingState.preload = function () {
    console.log("inside preload of loadingState");
    Kiwi.State.prototype.preload.call(this);
    this.game.states.rebuildLibraries();
    this.game.stage.color = "#E0EDF1";
    this.logo = new Kiwi.GameObjects.StaticImage(
		this, this.textures["loadingImage"], 0, 50);
    this.addChild(this.logo);
    this.logo.alpha = 0;
    this.tweenIn = myGame.tweens.create(this.logo);
    this.tweenIn.to(
		{ alpha: 1 }, 1000, Kiwi.Animations.Tweens.Easing.Linear.None, false);
    this.tweenIn.start();
    // Assets to load
    this.addSpriteSheet("characterSprite", "images/character.png", 150, 117);
    this.addSpriteSheet('ninja', 'images/ninja.png', 150, 117, true);
    this.addSpriteSheet('textAtlas', 'images/textAtlas.png', 16, 30, true);
    this.addSpriteSheet('otherfont', 'images/otherfont.png', 21, 30, true);
    this.addImage('background', 'images/background1.png');
    this.addImage('header', 'images/header.png', true);
    this.addImage('sign', 'images/sign.png', true);
    this.addImage('textbg1', 'images/textbg101.png', true);
    this.addImage('textbg2', 'images/textbg2.png', true);
    this.addImage('textbg3', 'images/textbg3.png', true);
    this.addImage('textbg4', 'images/textbg4.png', true);
    this.addImage('textbg5', 'images/textbg5.png', true);
    this.addImage('textbg6', 'images/textbg6.png', true);
    this.addImage('textbg7', 'images/textbg7.png', true);
    this.addImage('textbg8', 'images/textbg8.png', true);
    this.addImage('textbg9', 'images/textbg9.png', true);
    this.addImage('textbg10', 'images/textbg10.png', true);
    this.addImage('textbg11', 'images/textbg11.png', true);
    this.addImage('textbg12', 'images/textbg12.png', true);
    this.addImage('textbg13', 'images/textbg13.png', true);
    this.addImage('textbg14', 'images/textbg14.png', true);
    this.addImage('textbg15', 'images/textbg15.png', true);
    this.addImage('textbg16', 'images/textbg16.png', true);
    this.addImage('textbg17', 'images/textbg17.png', true);
    this.addImage('orderTyp2', 'images/2.png', true);
    this.addImage('startFullfillment', 'images/StartFullfillment1.png', true);
    this.addImage('waivingOrder', 'images/WaivingOrder1.png', true);
    this.addImage('customerOrder', 'images/CustomerOrder1.png', true);
    this.addImage('tasks', 'images/Tasks1.png', true);
    this.addImage('stockAllocation', 'images/StockAllocation1.png', true);
    this.addImage('ISCButton', 'images/ISC.png', true);
    this.addImage('orderTyp3', 'images/3.png', true);
    this.addImage('META_PACKButton', 'images/META_PACK.png', true);
    this.addImage('orderTyp4', 'images/4.png', true);
    this.addImage('ISC99Button', 'images/ISC99.png', true);
    this.addImage('ISCLock', 'images/lock3.png', true);
    this.addImage('META_PACKLock', 'images/lock3.png', true);
    this.addImage('ISC99Lock', 'images/lock3.png', true);
    this.addImage('ISC_Lock', 'images/lock3.png', true);
    this.addImage('META_PACK_Lock', 'images/lock3.png', true);
    this.addImage('ISC99_Lock', 'images/lock3.png', true);
    this.addImage('ollerton_Lock', 'images/lock3.png', true);
    this.addImage('lymbrack_Lock', 'images/lock3.png', true);
    this.addImage('ollertonButton_Lock', 'images/L11.png', true);
    this.addImage('lymbrackButton_Lock', 'images/L11.png', true);
    this.addImage('picking', 'images/Picking.png', true);
    this.addImage('packing', 'images/Packing.png', true);
    this.addImage('olnps', 'images/OLNPS.png', true);
    this.addImage('olnps2chutes', 'images/OLPNS2Chutes.png', true);
    this.addImage('isccarr', 'images/ISC_CARRIERS.png', true);
    this.addImage('metacarr', 'images/META_CARRIERS.png', true);
    this.addImage('isc99carr', 'images/ISC99_CARRIERS.png', true);
    this.addImage('ollertonButton', 'images/OllertonButton.png', true);
    this.addImage('lymbrackButton', 'images/LymBrackButton.png', true);
    this.addImage('loadshipment', 'images/LoadShipment.png', true);
    this.addImage('loadshipmentOLL', 'images/LoadShipmentOLL.png', true);
    this.addImage('loadLevel2', 'images/Level2.png', true);
};
loadingState.update = function () {
    Kiwi.State.prototype.update.call(this);
};
loadingState.create = function () {
    Kiwi.State.prototype.create.call(this);
    console.log("inside create of loadingState");
    this.tweenOut = myGame.tweens.create(this.logo);
    this.tweenOut.to(
		{ alpha: 0 }, 1000, Kiwi.Animations.Tweens.Easing.Linear.None, false);
    this.tweenOut.onComplete(this.switchToMain, this);
    this.tweenOut.start();
};
loadingState.switchToMain = function () {
    console.log("inside switchToMain of loadingState");
    myGame.states.switchState("myState");
};