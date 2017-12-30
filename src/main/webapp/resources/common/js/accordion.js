function Accordion(accordionId, options) {
	var objAccordion = this;
	
	objAccordion.$accordion = $('#' + accordionId);
	objAccordion.options = options;
	
	objAccordion.$accordion.find('.accordion-btn').each(function () {
		var $accourdionBtn = $(this);
		var $accordionTarget = $($accourdionBtn.attr('data-target'));
		
		$accordionTarget.hide();
		
		$accourdionBtn.css({"cursor":"pointer"}).click(function () {
			objAccordion.toggle($accourdionBtn, $accordionTarget);
		});
	});
}

Accordion.prototype.expand = function ($accourdionBtn, $accordionTarget) {
	this.$accordion.find('.accordion-target.expanded').slideUp().removeClass('expanded');
	
	$accordionTarget.slideDown().addClass('expanded');
	
	if(typeof(this.options.onExpand) == 'function') {
		this.options.onExpand($accourdionBtn, $accordionTarget);
	}
};

Accordion.prototype.collapse = function ($accourdionBtn, $accordionTarget) {
	$accordionTarget.slideUp().removeClass('expanded');
	
	if(typeof(this.options.onCollapse) == 'function') {
		this.options.onCollapse($accourdionBtn, $accordionTarget);
	}
};

Accordion.prototype.toggle = function ($accourdionBtn, $accordionTarget) {
	if(!$accordionTarget.hasClass('expanded')) {
		this.expand($accourdionBtn, $accordionTarget);
	} else {
		this.collapse($accourdionBtn, $accordionTarget);
	}
};