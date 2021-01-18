
$(function() {

    //Populate using an object literal

    WTF.init({

        heading: [
            "[[ IMPERIAL INTELLIGENCE // ACCESSING DATABASE... ]]<br><br>[[ AUTHORIZATION ACKNOWLEDGED ]]"
        ],
        response: [
           "[[ RETRIEVE NEXT MISSION ASSIGNMENT ]]"
        ],
        template: [
            "Your mission is to go to @locale and @mission. The target is @behavior @target. However, be careful because @complication. @theme.",
	    "Your objective is to travel to @locale and obtain @asset from @behavior @target. You may encounter resistance in the form of @obstacle. @theme.",
	   "Your objective is to travel to @locale and @mission. The target is @behavior @target. You may encounter resistance in the form of @obstacle. @theme.",
	    "Your objective is to travel to @locale and @mission. The target is @behavior @target. However, be careful because @complication. @theme.",
	    "Your mission is to protect @behavior @target on @locale from a hostile @target @reason. You may encounter resistance in the form of @obstacle. @theme.",
	    "Your mission is to infiltrate @behavior @group on @locale and establish a contact. You may encounter difficulty in the form of @obstacle. @theme.",
        ],
        locale: [
		"Alderaan",
		"Balmorra",
		"Belsavis",
		"Cademimu V",
		"Corellia",
		"Coruscant",
		"Dantooine",
		"Dromund Kaas",
		"Hoth",
		"Hutta",
		"Nar Shaddaa",
		"Onderon",
		"Ord Mantell",
		"Quesh",
		"Rishi",
		"Tanaab",
		"Taris",
		"Tatooine"	    
        ],
        mission: [
		"assassinate the target",
		"blackmail the target",
		"collect intelligence from a source",
		"extract the target",
		"implicate the target in a crime",
		"investigate the target",
		"kidnap the target",
		"plant compromising evidence",
		"plant surveillance on the target",
		"sabotage the target's operations"
        ],
        behavior: [
	        "an abrasive",
		"an absent-minded",
		"an active",
		"an affable",
		"an aggrandizing",
		"an aloof",
		"an altruistic",
		"an amiable",
		"an anxious",
		"an apprehensive",
		"an argumentative",
		"an aspiring",
		"an authoritarian",
		"a belligerent",
		"a boisterous",
		"a calculating",
		"a candid",
		"a canny and experienced",
		"a capable",
		"a cheerful",
		"a clever",
		"a community-oriented",
		"a conceited",
		"a condescending",
		"a conscientious",
		"a controlling",
		"a courteous",
		"a daring",
		"a debonair",
		"a determined",
		"a diligent",
		"a direct",
		"a disagreeable",
		"a disparaging",
		"a draconian",	
		"an eccentric",
		"an economically ruthless",
		"an efficient",
		"an egotistical",
		"an empathetic",
		"an engaging",
		"an exacting",
		"a fiscally responsible",
		"a flamboyant",
		"a flighty",
		"a flustered",
		"a frugal",
		"a frustrated",
		"a garrulous",
		"a genial",
		"a goal oriented",
		"a greedy",
		"a gregarious",
		"a grieving",
		"a gruff",
		"a hesitant",
		"a humble",
		"an ill-tempered",
		"an impulsive",
		"an industrious",
		"an intelligent",
		"an intimidating",
		"an intrepid",
		"an irritable",
		"a jaded",
		"a materialistic",
		"a melodramatic",
		"a naive and inexperienced",
		"a negligent",
		"a no-nonsense",
		"an obsequious",
		"an opinionated",
		"an optimistic",
		"an organized",
		"an ostentatious",
		"an outgoing",
		"a paranoid",
		"a particular",
		"a patient",
		"a persistent",
		"a persuasive",
		"a pessimistic",
		"a philanthropic",
		"a placid", 
		"a pragmatic",
		"a pretentious",
		"a professional",
		"a punctual",
		"a quick-tempered",
		"a rambunctious",
		"a rational",
		"a recalcitrant",
		"a recently promoted",
		"a reclusive",
		"a refined",
		"a reliable",
		"a reluctant",
		"a reserved",
		"a resilient",
		"a resolute",
		"a responsible",
		"a risk-taking",
		"a scrupulous",
		"a shrewd",
		"a slovenly",
		"a sly",
		"a strict",
		"a strident",
		"a taciturn",
		"a tactful",
		"a temperamental",
		"a tenacious",
		"an unconventional",
		"an unpredictable",
		"an unscrupulous",
		"a vain",
		"a verbose",
		"a vindictive"
        ],
        target: [
		"academic",
		"ambassador",
		"archaeologist",
		"art collector",
		"artist",
		"biologist",
		"botanist",
		"civic leader",
		"customs officer",
		"dancer",
		"diplomat",
		"exporter of fine textiles",
		"exporter of luxury goods",
		"force-user",
		"geologist",
		"grifter",
		"high-level corporate executive",
		"hutt",
		"Imperial deserter",
		"information broker",
		"local gang enforcer",
		"member of local law enforcement",
		"mercenary band",
		"mercenary",
		"mid-level corporate executive",
		"news reporter",
		"nurse",
		"owner of a fine restaurant",
		"owner of a shady pawnshop",
		"owner of a shipping company",
		"owner of a sleazy diner",
		"pair of siblings who run a scrapyard",
		"politician up for re-election",
		"politician",
		"Republic deserter",
		"scientist",
		"scrapyard owner",
		"smuggler",
		"socialite",
		"soldier",
		"spice dealer",
		"swoop racer",
		"tailor",
		"travelling merchant"
        ],
        group: [
            "smuggling ring",
            "criminal syndicate",
            "diplomat's staff",
            "politician's staff",
            "pirate encampment",
	    "managing team of a corporation",
	    "noble's household staff"
        ],
        complication: [
            "there's a bounty hunter on the target's trail",
            "the target keeps exotic animals as security",
            "an unidentified person close to the target is a highly trained bodyguard",
            "the target is on the move",
            "the target is located in a remote location and travel will be difficult",
            "the target's appearance and exact identity is unknown",
            "the target employs a double for security",
            "the target is on the move and will be difficult to find",
	    "the target has been accused of a crime",
	    "the target is expecting hostile action",
	    "the target is imprisoned",
	    "the target is missing",
	    "the target is hospitalized",
        ],
        asset: [
            "information revealing Republic movements",
            "intel regarding a Republic supply cache",
            "intel regarding a criminal organization's supply cache",
            "intel pertaining to the identity of a spy",
            "the identity of a traitor",
	    "supplies",
	    "blackmail material"
        ],
        obstacle: [
            "wildlife",
            "natural hazards",
            "harsh environmental phenomena",
            "roving outlaws",
            "capable and alert guards",
	    "dangerous weather",
	    "an epidemic in the sector",
	    "a Republic patrol",
	    "travel delays",
	    "poorly trained guards",
	    "a rioting populace"
        ],
        reason: [
            "who is out for revenge",
            "who is blackmailing the target",
            "who is acting for unknown reasons",
            "who is extorting the target",
            "who is pursuing misguided revenge",
	    "who plans to kidnap the target",
	    "who intends to assassinate the target",
	    "who is the target's creditor",
	    "who suspects the target is an Imperial contact"
        ],
        theme: [
            "Secrecy is paramount",
            "Get the job done",
            "Speed is of the essence",
            "You cannot be detected",
            "Leave no witnesses",
	    "No collateral damage is allowed",
	    "Imperial Intelligence's involvement must remain undetected"
        ]
    });

 
});
