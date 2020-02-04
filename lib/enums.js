exports.AttackModifier = Object.freeze({
	plus0: 0,
	plus1: 1,
	plus2: 2,
	minus1: 3,
	minus2: 4,
	nullAttack: 5,
	doubleAttack: 6,
	bless: 7,
	curse: 8,
	properties: {
		0: { name: "plus0" },
		1: { name: "plus1" },
		2: { name: "plus2" },
		3: { name: "minus1" },
		4: { name: "minus2" },
		5: { name: "nullAttack" },
		6: { name: "doubleAttack" },
		7: { name: "bless" },
		8: { name: "curse" }
	}
});

exports.CharacterClass = Object.freeze({
	Escort: 0xD54829FF,
	Objective: 0x349D00FF,
	Brute: 0x37AED7FF,
	Cragheart: 0x828B3BFF,
	Mindthief: 0x6279A5FF,
	Scoundrel: 0xA3D464FF,
	Spellweaver: 0xD0A1E2FF,
	Tinkerer: 0xD2C4A3FF,
	Diviner: 0xA0FFFFFF,
	BeastTyrant: 0xB4765AFF,
	Berserker: 0xF07C4EFF,
	Doomstalker: 0x5BC5DCFF,
	Elementalist: 0xDCDCDCFF,
	Nightshroud: 0x7440D4FF,
	Plagueherald: 0x72E0BEFF,
	Quartermaster: 0xC8AC8BFF,
	Sawbones: 0xD5CA9CFF,
	Soothsinger: 0xDE7190FF,
	Summoner: 0xEA75B8FF,
	Sunkeeper: 0xFCE434FF,
	Bladeswarm: 0xD6AC99FF,
	properties: {
		0xD54829FF: { name: "Escort" },
		0x349D00FF: { name: "Objective" },
		0x37AED7FF: { name: "Brute" },
		0x828B3BFF: { name: "Cragheart" },
		0x6279A5FF: { name: "Mindthief" },
		0xA3D464FF: { name: "Scoundrel" },
		0xD0A1E2FF: { name: "Spellweaver" },
		0xD2C4A3FF: { name: "Tinkerer" },
		0xA0FFFFFF: { name: "Diviner" },
		0xB4765AFF: { name: "Beast Tyrant" },
		0xF07C4EFF: { name: "Berserker" },
		0x5BC5DCFF: { name: "Doomstalker" },
		0xDCDCDCFF: { name: "Elementalist" },
		0x7440D4FF: { name: "Nightshroud" },
		0x72E0BEFF: { name: "Plagueherald" },
		0xC8AC8BFF: { name: "Quartermaster" },
		0xD5CA9CFF: { name: "Sawbones" },
		0xDE7190FF: { name: "Soothsinger" },
		0xEA75B8FF: { name: "Summoner" },
		0xFCE434FF: { name: "Sunkeeper" },
		0xD6AC99FF: { name: "Bladeswarm" }
	},
	toColor: function(rgba) { return {
		r: (rgba & 0xFF000000) >>> 24,
		g: (rgba & 0x00FF0000) >>> 16,
		b: (rgba & 0x0000FF00) >>> 8,
		a: (rgba & 0x000000FF)
	}; }
});

exports.Condition = Object.freeze({
	star: 0,
	summonNew: 1,
	summon: 2,
	stun: 3,
	immobilize: 4,
	disarm: 5,
	wound: 6,
	muddle: 7,
	poison: 8,
	strengthen: 9,
	invisible: 10,
	regenerate: 11,
	doom: 12,
	properties: {
		0: { name: "star" },
		1: { name: "summonNew" },
		2: { name: "summon" },
		3: { name: "stun" },
		4: { name: "immobilize" },
		5: { name: "disarm" },
		6: { name: "wound" },
		7: { name: "muddle" },
		8: { name: "poison" },
		9: { name: "strengthen" },
		10: { name: "invisible" },
		11: { name: "regenerate" },
		12: { name: "doom" }
	}
});

exports.ElementState = Object.freeze({
	inert: 0,
	strong: 1,
	waning: 2,
	properties: {
		0: { name: "inert" },
		1: { name: "strong" },
		2: { name: "waning" }
	}
});

exports.MonsterType = Object.freeze({
	normal: 0,
	elite: 1,
	boss: 2,
	summon: 3,
	properties: {
		0: { name: "normal" },
		1: { name: "elite" },
		2: { name: "boss" },
		3: { name: "summon" }
	}
});

exports.PlayerInit = Object.freeze({
	dragOrder: 0,
	dragNumber: 1,
	dragNumberRequired: 2,
	numpad: 3,
	properties: {
		0: { name: "dragOrder" },
		1: { name: "dragNumber" },
		2: { name: "dragNumberRequired" },
		3: { name: "numpad" }
	}
});

exports.SummonColor = Object.freeze({
	beast: 0,
	blue: 1,
	green: 2,
	yellow: 3,
	orange: 4,
	white: 5,
	purple: 6,
	pink: 7,
	red: 8,
	properties: {
		0: { name: "beast" },
		1: { name: "blue" },
		2: { name: "green" },
		3: { name: "yellow" },
		4: { name: "orange" },
		5: { name: "white" },
		6: { name: "purple" },
		7: { name: "pink" },
		8: { name: "red" }
	}
});
