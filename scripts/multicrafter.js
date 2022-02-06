const multiLib = require("multi-lib/library");

const butelkownia = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "butelkownia", [
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {
        input: {
            items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["water/180"],
            power: 1.2,
        },
        output: {
            items: ["z.p.g.m._mod-butelkaw/12"],
        },
        craftTime: 60
    },
    {
        input: {
            items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["cryofluid/180"],
            power: 1.2,
        },
        output: {
            items: ["z.p.g.m._mod-butelkal/12"],
        },
        craftTime: 60
    },
	{
        input: {
            items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["oil/180"],
            power: 1.2,
        },
        output: {
            items: ["z.p.g.m._mod-butelkar/12"],
        },
        craftTime: 60
    },
	{
        input: {
            items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["slag/180"],
            power: 1.2,
        },
        output: {
            items: ["z.p.g.m._mod-butelkaz/12"],
        },
        craftTime: 60
    },
	{
		input: {
			items: ["z.p.g.m._mod-butelkaw/12"],
			power: 1.2,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["water/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkal/12"],
			power: 1.2,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["cryofluid/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkar/12"],
			power: 1.2,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["oil/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkaz/12"],
			power: 1.2,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["slag/180"],
		},
		craftTime: 60
	},
], {
    /*you can customize block here. ex) load()*/
},
    /*this is Object constructor. This way is much better than literal way{a:123}
    you can replace this with {} if you don't want to modify entity*/
    function Extra() {
        /*you can use customUpdate=function(){}. this function excuted before update()
        also this.draw=function(){}
        you can customize entity here.
        ex)
        this._myProp=0;
        this.getMyProp=function(){
            return this._myProp;
        };
        this.setMyProp=function(a){
            this._myProp=a;
        };*/
    });
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
butelkownia.localizedName = "Butelkownia";
butelkownia.description = "Napełnia i odzyskuje ciecz z butelek";
butelkownia.itemCapacity = 48;
butelkownia.liquidCapacity = 180;
butelkownia.size = 2;
butelkownia.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
butelkownia.dumpToggle = true;


