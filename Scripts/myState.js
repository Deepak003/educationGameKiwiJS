var myState = new Kiwi.State('myState');
myState.preload = function () {
    Kiwi.State.prototype.preload.call(this);
};
myState.create = function () {
    this.group = new Kiwi.Group(this);
    this.addChild(this.group);
    this.spriteWidth = 150;
    this.spriteHeight = 117;
    this.addButtons();
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['background'], 0, 0);
    this.background.addTag('background');
    this.group.addChild(this.background);
    this.header = new Kiwi.GameObjects.StaticImage(this, this.textures['header'],215,5);
    this.group.addChild(this.header);

    this.startFullfillment = new Kiwi.GameObjects.StaticImage(this, this.textures['startFullfillment'], 5, 374);
    this.group.addChild(this.startFullfillment);
    this.customerOrder = new Kiwi.GameObjects.StaticImage(this, this.textures['customerOrder'], 140, 348);
    this.group.addChild(this.customerOrder);
    this.waivingOrder = new Kiwi.GameObjects.StaticImage(this, this.textures['waivingOrder'], 310, 348);
    this.group.addChild(this.waivingOrder);
    this.selOrdrTyp2 = new Kiwi.GameObjects.Sprite(this, this.textures.orderTyp2, 600, 320);
    this.group.addChild(this.selOrdrTyp2);
    this.selOrdrTyp3 = new Kiwi.GameObjects.Sprite(this, this.textures.orderTyp3, 800, 320);
    this.group.addChild(this.selOrdrTyp3);
    this.selOrdrTyp4 = new Kiwi.GameObjects.Sprite(this, this.textures.orderTyp4, 1000, 320);
    this.group.addChild(this.selOrdrTyp4);

    this.stockAllocation = new Kiwi.GameObjects.StaticImage(this, this.textures['stockAllocation'], 1210, 348);
    this.group.addChild(this.stockAllocation);
    this.tasks = new Kiwi.GameObjects.StaticImage(this, this.textures['tasks'], 1400, 348);
    this.group.addChild(this.tasks);
    this.picking = new Kiwi.GameObjects.StaticImage(this, this.textures['picking'], 1600, 348);
    this.group.addChild(this.picking);
    this.packing = new Kiwi.GameObjects.StaticImage(this, this.textures['packing'], 1800, 297);
    this.group.addChild(this.packing);

    this.olnps = new Kiwi.GameObjects.StaticImage(this, this.textures['olnps'], 2050, 312);
    this.group.addChild(this.olnps);
    this.olnps2chutes = new Kiwi.GameObjects.StaticImage(this, this.textures['olnps2chutes'], 2300, 312);
    this.group.addChild(this.olnps2chutes);

    this.isccarr = new Kiwi.GameObjects.StaticImage(this, this.textures['isccarr'], 2530, 307);
    this.group.addChild(this.isccarr);
    this.metacarr = new Kiwi.GameObjects.StaticImage(this, this.textures['metacarr'], 2770, 297);
    this.group.addChild(this.metacarr);
    this.isc99carr = new Kiwi.GameObjects.StaticImage(this, this.textures['isc99carr'], 3010, 303);
    this.group.addChild(this.isc99carr);
    this.loadshipment = new Kiwi.GameObjects.StaticImage(this, this.textures['loadshipment'], 3250, 330);
    this.group.addChild(this.loadshipment);
    this.loadshipmentOLL = new Kiwi.GameObjects.StaticImage(this, this.textures['loadshipmentOLL'], 3490, 330);
    this.group.addChild(this.loadshipmentOLL);
    this.loadLevel2 = new Kiwi.GameObjects.StaticImage(this, this.textures['loadLevel2'], 3800, 370);
    this.group.addChild(this.loadLevel2); 

    var L1 = new Kiwi.GameObjects.Sprite(this, this.textures.ISCLock, 645, 365);
    L1.addTag('ISC');
    this.group.addChild(L1);
    var L2 = new Kiwi.GameObjects.Sprite(this, this.textures.META_PACKLock, 850, 365);
    L2.addTag('META_PACK');
    this.group.addChild(L2);
    var L3 = new Kiwi.GameObjects.Sprite(this, this.textures.ISC99Lock, 1045, 365);
    L3.addTag('ISC99');
    this.group.addChild(L3);
    var L4 = new Kiwi.GameObjects.Sprite(this, this.textures.ISC_Lock, 2590, 348);
    L4.addTag('ISC');
    this.group.addChild(L4);
    var L5 = new Kiwi.GameObjects.Sprite(this, this.textures.META_PACK_Lock, 2840, 348);
    L5.addTag('META_PACK');
    this.group.addChild(L5);
    var L6 = new Kiwi.GameObjects.Sprite(this, this.textures.ISC99_Lock, 3070, 348);
    L6.addTag('ISC99');
    this.group.addChild(L6);
    var L7 = new Kiwi.GameObjects.Sprite(this, this.textures.lymbrack_Lock, 3320, 360);
    L7.addTag('lymbrack');
    this.group.addChild(L7);
    var L8 = new Kiwi.GameObjects.Sprite(this, this.textures.ollerton_Lock, 3550, 360);
    L8.addTag('ollerton');
    this.group.addChild(L8);
    var L9 = new Kiwi.GameObjects.Sprite(this, this.textures.ollertonButton_Lock, 5, 305);
    L9.addTag('ollerton');
    this.group.addChild(L9);
    var L10 = new Kiwi.GameObjects.Sprite(this, this.textures.lymbrackButton_Lock, 5, 335);
    L10.addTag('lymbrack');
    this.group.addChild(L10);
    
    this.sign1 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 30, 430);
    this.group.addChild(this.sign1);
    this.sign2 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 205, 430);
    this.group.addChild(this.sign2);
    this.sign3 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 430, 430);
    this.group.addChild(this.sign3);
    this.sign4 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 670, 430);
    this.group.addChild(this.sign4);
    this.sign5 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 870, 430);
    this.group.addChild(this.sign5);
    this.sign6 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1070, 430);
    this.group.addChild(this.sign6);
    this.sign7 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1250, 430);
    this.group.addChild(this.sign7);
    this.sign8 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1470, 430);
    this.group.addChild(this.sign8);
    this.sign9 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1650, 430);
    this.group.addChild(this.sign9);
    this.sign10 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 1880, 430);
    this.group.addChild(this.sign10);
    this.sign11 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 2150, 430);
    this.group.addChild(this.sign11);
    this.sign12 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 2350, 430);
    this.group.addChild(this.sign12);
    this.sign13 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 2605, 430);
    this.group.addChild(this.sign13);
    this.sign14 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 2850, 430);
    this.group.addChild(this.sign14);
    this.sign15 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 3080, 430);
    this.group.addChild(this.sign15);
    this.sign16 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 3330, 430);
    this.group.addChild(this.sign16);
    this.sign17 = new Kiwi.GameObjects.StaticImage(this, this.textures['sign'], 3590, 430);
    this.group.addChild(this.sign17);

    this.textbg1 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg1'], 5, 120);
    this.group.addChild(this.textbg1);
    this.textbg1.alpha = 0;
    this.textbg2 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg2'], 150, 120);
    this.group.addChild(this.textbg2);
    this.textbg2.alpha = 0;
    this.textbg3 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg3'], 370, 120);
    this.group.addChild(this.textbg3);
    this.textbg3.alpha = 0;
    this.textbg4 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg4'], 600, 120);
    this.group.addChild(this.textbg4);
    this.textbg4.alpha = 0;
    this.textbg5 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg5'], 800, 120);
    this.group.addChild(this.textbg5);
    this.textbg5.alpha = 0;
    this.textbg6 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg6'], 1000, 120);
    this.group.addChild(this.textbg6);
    this.textbg6.alpha = 0;
    this.textbg7 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg7'], 1180, 120);
    this.group.addChild(this.textbg7);
    this.textbg7.alpha = 0;
    this.textbg8 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg8'], 1420, 120);
    this.group.addChild(this.textbg8);
    this.textbg8.alpha = 0;
    this.textbg9 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg9'], 1600, 120);
    this.group.addChild(this.textbg9);
    this.textbg9.alpha = 0;
    this.textbg10 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg10'], 1830, 120);
    this.group.addChild(this.textbg10);
    this.textbg10.alpha = 0;
    this.textbg11 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg11'], 2100, 120);
    this.group.addChild(this.textbg11);
    this.textbg11.alpha = 0;
    this.textbg12 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg12'], 2305, 120);
    this.group.addChild(this.textbg12);
    this.textbg12.alpha = 0;
    this.textbg13 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg13'], 2660, 120);
    this.group.addChild(this.textbg13);
    this.textbg13.alpha = 0;
    this.textbg14 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg14'], 2805, 120);
    this.group.addChild(this.textbg14);
    this.textbg14.alpha = 0;
    this.textbg15 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg15'], 3035, 120);
    this.group.addChild(this.textbg15);
    this.textbg15.alpha = 0;
    this.textbg16 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg16'], 3265, 120);
    this.group.addChild(this.textbg16);
    this.textbg16.alpha = 0;
    this.textbg17 = new Kiwi.GameObjects.StaticImage(this, this.textures['textbg17'], 3455, 120);
    this.group.addChild(this.textbg17);
    this.textbg17.alpha = 0;
    this.step = 3;

    Kiwi.State.prototype.create.call(this);
    this.jumpKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ALT, true);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN, true);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT, true);
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT, true);
 
    //this.header.box.hitbox = new Kiwi.Geom.Rectangle(5, 5, 600, 100);

    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['ninja'], 0, 395);
    this.character.animation.add('idle', [0], 0.1, false);
    this.character.animation.add('move', [1, 2, 3, 4, 5, 6], 0.1, true);
    this.character.animation.add('jump', [9], 0.1, true);
    this.character.animation.play('idle');
    this.group.addChild(this.character);
    this.character.box.hitbox = new Kiwi.Geom.Rectangle(48, 37, 27, 75);
};
myState.addButtons = function () {
    var button;
    button = new Button(this, 410, 300, 'ISC');
    this.addChild(button);
    button = new Button(this, 410, 340, 'META_PACK');
    this.addChild(button);
    button = new Button(this, 410, 380, 'ISC99');
    this.addChild(button);
    button = new Button(this, 29, 300, 'ollerton');
    this.addChild(button);
    button = new Button(this, 30, 330, 'lymbrack');
    this.addChild(button);
}
var Button = function (state, x, y, color) {
    this.myState = state;
    // When a button is clicked all of the sprites with the tag of the tag of
    // the color of the button are toggled between visible and not.
    Kiwi.GameObjects.Sprite.call(this, this.myState, this.myState.textures[color + "Button"], x, y);
    this.color = color;
    this.colorVisible = true;
    this.input.onDown.add(this.toggleColor, this);
}
Kiwi.extend(Button, Kiwi.GameObjects.Sprite);
Button.prototype.toggleColor = function () {
    if ((this.color != 'ollerton' && this.color != 'lymbrack') && (ninjaPause && !cusOrderPathSel)) {
        if (this.color == 'ISC') {
            isISCSel = true;
        } else if (this.color == 'META_PACK') {
            isMetaPackSel = true;
        } else {
            isISC99Sel = true;
        }
        var sprites = this.state.group.getChildrenByTag(this.color);
        this.colorVisible = !this.colorVisible;
        for (var i = sprites.length - 1; i >= 0; i--) {
            sprites[i].visible = this.colorVisible;
        }
        ninjaPause = false;
        cusOrderPathSel = true;
    } else {
        if (this.color == 'ollerton') {
            isOllSel = true;
        } else if (this.color == 'lymbrack') {
            isLymBrSel = true;
        }
        if (ninjaPause && !warehouseSel) {
            var sprites = this.state.group.getChildrenByTag(this.color);
            this.colorVisible = !this.colorVisible;
            for (var i = sprites.length - 1; i >= 0; i--) {
                sprites[i].visible = this.colorVisible;
            }
            ninjaPause = false;
            warehouseSel = true;
        }
    }
}
myState.update = function () {
    Kiwi.State.prototype.update.call(this);
    // Move the player with the arrow keys. 
    if (this.leftKey.isDown) {
        this.character.scaleX = -1;
        this.character.x -= 3;
        if (this.character.animation.currentAnimation.name != 'move')
            this.character.animation.switchTo('move', true);
        //this.header.scaleX = -1;
        if (!sign14Rchd) {
            this.header.x -= 3;
        }
    }
    else if (this.rightKey.isDown) {
        if ((!sign3Rchd || cusOrderPathSel) && !ninjaPause) {
            this.character.scaleX = 1;
            this.character.x += 3;
            if (this.character.animation.currentAnimation.name != 'move')
                this.character.animation.switchTo('move', true);
            //this.header.scaleX = 1;
            if (!sign14Rchd) {
                this.header.x += 3;
            }
        } else {
            //alert("Kindly choose a path!!!");
        }
    }
    else if (this.jumpKey.isDown) {
        this.character.scaleY = 1;
        this.character.y -= 5;
        if (this.character.animation.currentAnimation.name != 'jump')
            this.character.animation.switchTo('jump', true);
    }
    else
        this.character.animation.switchTo('idle');
    /* Sign Borad Animation*/
    if (this.character.box.hitbox.intersects(this.sign1.box.hitbox) && this.textbg1.alpha == 0) {
        //var tw = this.game.tweens.create(this.text1);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (!warehouseSel) {
            ninjaPause = true;
        }
        var tw = this.game.tweens.create(this.textbg1);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign1.box.hitbox) && this.textbg1.alpha == 1) {
        //var tw = this.game.tweens.create(this.text1);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        ninjaPause = false;
        var tw = this.game.tweens.create(this.textbg1);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign2.box.hitbox) && this.textbg2.alpha == 0) {
        //var tw = this.game.tweens.create(this.text2);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg2);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign2.box.hitbox) && this.textbg2.alpha == 1) {
        //var tw = this.game.tweens.create(this.text2);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg2);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign3.box.hitbox) && this.textbg3.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (!cusOrderPathSel) {
            sign3Rchd = true;
            ninjaPause = true;
        }
        var tw = this.game.tweens.create(this.textbg3);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign3.box.hitbox) && this.textbg3.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        sign3Rchd = false;
        ninjaPause = false;
        var tw = this.game.tweens.create(this.textbg3);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign4.box.hitbox) && this.textbg4.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (isISCSel) {
            //ninjaPause = true;
            var tw = this.game.tweens.create(this.textbg4);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign4.box.hitbox) && this.textbg4.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg4);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign5.box.hitbox) && this.textbg5.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (isMetaPackSel) {
            //ninjaPause = true;
            var tw = this.game.tweens.create(this.textbg5);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign5.box.hitbox) && this.textbg5.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg5);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign6.box.hitbox) && this.textbg6.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (isISC99Sel) {
            //ninjaPause = true;
            var tw = this.game.tweens.create(this.textbg6);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign6.box.hitbox) && this.textbg6.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg6);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign7.box.hitbox) && this.textbg7.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg7);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign7.box.hitbox) && this.textbg7.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg7);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign8.box.hitbox) && this.textbg8.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg8);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign8.box.hitbox) && this.textbg8.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg8);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign9.box.hitbox) && this.textbg9.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg9);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign9.box.hitbox) && this.textbg9.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg9);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign10.box.hitbox) && this.textbg10.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg10);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign10.box.hitbox) && this.textbg10.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg10);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign11.box.hitbox) && this.textbg11.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg11);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign11.box.hitbox) && this.textbg11.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg11);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign12.box.hitbox) && this.textbg12.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg12);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign12.box.hitbox) && this.textbg12.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg12);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign13.box.hitbox) && this.textbg13.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        //sign13Rchd = true;
        if (isISCSel) {
            ninjaPause = true;
            var tw = this.game.tweens.create(this.textbg13);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign13.box.hitbox) && this.textbg13.alpha == 1) {
        ninjaPause = false;
        var tw = this.game.tweens.create(this.textbg13);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign14.box.hitbox) && this.textbg14.alpha == 0) {
        if (isMetaPackSel) {
            ninjaPause = true;
        }
        var tw = this.game.tweens.create(this.textbg14);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (!sign14Rchd) {
            if (!sign14RchdFlag) {
                sign14RchdX = this.character.x;
            }
            if (!sign14RchdFlag)
                sign14RchdFlag = true;
                sign14Rchd = true;
        }
        if (!sign14RchdFlag) {
            sign14Rchd = false;
            sign14RchdFlag = true;
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign14.box.hitbox) && (this.textbg14.alpha == 1) ) {
        sign14RchdFlag = false;
        ninjaPause = false;
        var tw = this.game.tweens.create(this.textbg14);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign15.box.hitbox) && this.textbg15.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg15);
        tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    else if (!this.character.box.hitbox.intersects(this.sign15.box.hitbox) && this.textbg15.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg15);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign16.box.hitbox) && this.textbg16.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (isLymBrSel) {
            var tw = this.game.tweens.create(this.textbg16);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign16.box.hitbox) && this.textbg16.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg16);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    if (this.character.box.hitbox.intersects(this.sign17.box.hitbox) && this.textbg17.alpha == 0) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        if (isOllSel) {
            var tw = this.game.tweens.create(this.textbg17);
            tw.to({ alpha: 1 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        }
    }
    else if (!this.character.box.hitbox.intersects(this.sign17.box.hitbox) && this.textbg17.alpha == 1) {
        //var tw = this.game.tweens.create(this.text3);
        //tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
        var tw = this.game.tweens.create(this.textbg17);
        tw.to({ alpha: 0 }, 500, Kiwi.Animations.Tweens.Easing.Linear.None, true);
    }
    /* End : Sign Board Animation */
    var playerOffsetX = this.character.width * 0.5;
    var playerOffsetY = this.character.height * 0.5;
    // Set the cameras position to that of the player.
    if (!gameInit && !sign14Rchd) {
        this.game.cameras.defaultCamera.transform.x = -1 * (this.character.x);
        //this.game.cameras.defaultCamera.transform.y = -1 * (this.character.y) + this.game.stage.height * 0.5 - playerOffsetY;
        //gameInit = false;
    }
    else {
        this.game.cameras.defaultCamera.transform.x = -sign14RchdX;
        gameInit = false;
        //this.game.cameras.defaultCamera.transform.y = this.game.stage.height * 0.5 - playerOffsetY;
    }
};