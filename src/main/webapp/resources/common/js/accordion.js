var AccordionFactory = (function () {
	var EventName = {
	}
		EXPAND: 0,
		COLLAPSE: 1
	};
	
	var EventPhases = [
		[
			'preExpand',
			'expand',
			'postExpand'
		],
		[
			'preCollapse',
			'collapse',
			'postCollapse'
		]
	];
	
	function Event(name, source, accordion) {
		this.name = name;
		this.source = source;
		this.target = $($(source).attr('data-target'))[0];
		this.accordion = accordion;
		this.phases = EventPhases[name];
	}
	
	function EventPhaseChain(event) {
		this.event = event;
		this.phaseIndex = -1;
		this.phaseCount = event.phases.length;
	}
	
	EventPhaseChain.prototype.next = function () {
		if(this.phaseCount < this.phaseIndex) {
			var phase = this.event.phases[++this.phaseIndex];
			
			if(typeof(this.event.accordion[phase]) == 'function') {
				this.event.accordion[phase](this.event, this);
			}
			
			if(typeof(this.event.accordion.options[phase]) == 'function') {
				this.event.accordion.options[phase](this.event, this);
			} else {
				this.next();
			}
		}
	};
	
	function Accordion(container, options) {
		var accordion = this;
		
		accordion.container = container;
		accordion.options = options;
		
		var $container = $(accordion.container);
		
		$container.find('.accordion-target').hide();
		
		$container.find('.accordion-control').css({"cursor":"pointer"}).click(function () {
			accordion.toggle(this);
		});
	}
	
	Accordion.prototype.expand = function (event, chain) {
		$(event.accordion).find('.accordion-target.expanded').slideUp().removeClass('expanded');
		
		$(event.target).slideDown().addClass('expanded');
	};
	
	Accordion.prototype.collapse = function (event, chain) {
		$(event.target).slideUp().removeClass('expanded');
	};
	
	Accordion.prototype.toggle = function (source) {
		var $target = $($(source).attr('data-target'));
		var eventName;
		
		if(!$target.hasClass('expanded')) {
			eventName = EventName.EXPANDED;
		} else {
			eventName = EventName.COLLAPSED;
		}
		
		var event = new Event(eventName, source, this);
		var chain = new EventPhaseChain(event);
		
		chain.next();
	};
	
	return {
		create: function (selector, options) {
			$(selector).each(function () {
				new Accordion(this, options);
			});
		}
	};
})();
