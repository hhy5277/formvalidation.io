import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/requiring-at-least-one-field/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/requiring-at-least-one-field/index.svelte";

// (42:8) <Tip>
function create_default_slot_1(ctx) {
	var t0, code0, t1, t2, code1, t3, t4;

	return {
		c: function create() {
			t0 = text("Using the class name prefixed by ");
			code0 = element("code");
			t1 = text("js-");
			t2 = text(", ");
			code1 = element("code");
			t3 = text("js-email-address");
			t4 = text(" for example, is a good practice. It lets other developer in your team know that the field will be interactived by JavaScript. So it shouldn't be removed when other designers refactor the markup or CSS classes.");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "Using the class name prefixed by ");

			code0 = claim_element(nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t1 = claim_text(code0_nodes, "js-");
			code0_nodes.forEach(detach);
			t2 = claim_text(nodes, ", ");

			code1 = claim_element(nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t3 = claim_text(code1_nodes, "js-email-address");
			code1_nodes.forEach(detach);
			t4 = claim_text(nodes, " for example, is a good practice. It lets other developer in your team know that the field will be interactived by JavaScript. So it shouldn't be removed when other designers refactor the markup or CSS classes.");
			this.h();
		},

		h: function hydrate() {
			add_location(code0, file, 41, 46, 1758);
			add_location(code1, file, 41, 64, 1776);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, code0, anchor);
			append(code0, t1);
			insert(target, t2, anchor);
			insert(target, code1, anchor);
			append(code1, t3);
			insert(target, t4, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(code0);
				detach(t2);
				detach(code1);
				detach(t4);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, a0, t3, t4, code0, t5, t6, t7, p1, t8, t9, p2, t10, a1, t11, t12, t13, t14, t15, p3, t16, a2, t17, t18, code1, t19, t20, t21, t22, p4, t23, code2, t24, t25, t26, t27, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<form id="demoForm" method="POST">
    <input type="text" class="js-email-address" name="primaryEmail" placeholder="Primary email" />
    <input type="text" class="js-email-address" name="secondaryEmail" placeholder="Secondary email" />
    ...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                email: {
                    // All the email address field have js-email-address class
                    selector: '.js-email-address',
                    validators: {
                        ...
                    },
                },
            },
            plugins: {
                ...
            },
        }
    );
});    
</script-tag>
` },
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            email: {
                // All the email address field have js-email-address class
                selector: '.js-email-address',
                validators: {
                    callback: {
                        message: 'You must enter at least one email address',
                        callback: function(input) {
                            let isEmpty = true;
                            const emailElements = fv.getElements('email');
                            for (const i in emailElements) {
                                if (emailElements[i].value !== '') {
                                    isEmpty = false;
                                    break;
                                }
                            }

                            if (!isEmpty) {
                                // Update the status of callback validator for all fields
                                fv.updateFieldStatus('email', 'Valid', 'callback');
                                return true;
                            }

                            return false;
                        }
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                },
            }
        },
        plugins: {
            ...
        },
    }
);
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/requiring-at-least-one-field",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['callback', 'emailAddress', 'notEmpty'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Requiring at least one field");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("In fact, the form might have multiple fields with the same validator rules but at least one of them is required.\n            We can't use neither the ");
			a0 = element("a");
			t3 = text("notEmpty");
			t4 = text(" validator nor HTML 5 ");
			code0 = element("code");
			t5 = text("required");
			t6 = text(" attribute for all of them.");
			t7 = space();
			p1 = element("p");
			t8 = text("Fortunately, this can be done easily by two things.");
			t9 = space();
			p2 = element("p");
			t10 = text("First, use the ");
			a1 = element("a");
			t11 = text("selector");
			t12 = text(" option to define validators for all fields. So, we don't need to indicate the validator rules for each separate field.");
			t13 = space();
			samplecode0.$$.fragment.c();
			t14 = space();
			tip.$$.fragment.c();
			t15 = space();
			p3 = element("p");
			t16 = text("Next, use the ");
			a2 = element("a");
			t17 = text("callback");
			t18 = text(" validator to check if one of fields is not empty. And then update the result of callback validator via the ");
			code1 = element("code");
			t19 = text("updateFieldStatus()");
			t20 = text(" method.");
			t21 = space();
			samplecode1.$$.fragment.c();
			t22 = space();
			p4 = element("p");
			t23 = text("In the sample code above, we use the ");
			code2 = element("code");
			t24 = text("getElements()");
			t25 = text(" method to get all the email elements.");
			t26 = space();
			demo.$$.fragment.c();
			t27 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Requiring at least one field");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In fact, the form might have multiple fields with the same validator rules but at least one of them is required.\n            We can't use neither the ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "notEmpty");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " validator nor HTML 5 ");

			code0 = claim_element(p0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t5 = claim_text(code0_nodes, "required");
			code0_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, " attribute for all of them.");
			p0_nodes.forEach(detach);
			t7 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t8 = claim_text(p1_nodes, "Fortunately, this can be done easily by two things.");
			p1_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t10 = claim_text(p2_nodes, "First, use the ");

			a1 = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t11 = claim_text(a1_nodes, "selector");
			a1_nodes.forEach(detach);
			t12 = claim_text(p2_nodes, " option to define validators for all fields. So, we don't need to indicate the validator rules for each separate field.");
			p2_nodes.forEach(detach);
			t13 = claim_text(section_nodes, "\n");
			samplecode0.$$.fragment.l(section_nodes);
			t14 = claim_text(section_nodes, "\n        ");
			tip.$$.fragment.l(section_nodes);
			t15 = claim_text(section_nodes, "\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t16 = claim_text(p3_nodes, "Next, use the ");

			a2 = claim_element(p3_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t17 = claim_text(a2_nodes, "callback");
			a2_nodes.forEach(detach);
			t18 = claim_text(p3_nodes, " validator to check if one of fields is not empty. And then update the result of callback validator via the ");

			code1 = claim_element(p3_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t19 = claim_text(code1_nodes, "updateFieldStatus()");
			code1_nodes.forEach(detach);
			t20 = claim_text(p3_nodes, " method.");
			p3_nodes.forEach(detach);
			t21 = claim_text(section_nodes, "\n");
			samplecode1.$$.fragment.l(section_nodes);
			t22 = claim_text(section_nodes, "\n        ");

			p4 = claim_element(section_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t23 = claim_text(p4_nodes, "In the sample code above, we use the ");

			code2 = claim_element(p4_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t24 = claim_text(code2_nodes, "getElements()");
			code2_nodes.forEach(detach);
			t25 = claim_text(p4_nodes, " method to get all the email elements.");
			p4_nodes.forEach(detach);
			t26 = claim_text(section_nodes, "\n\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t27 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 110);
			a0.href = "/guide/validators/not-empty";
			a0.className = "blue dim link";
			add_location(a0, file, 9, 37, 375);
			add_location(code0, file, 9, 131, 469);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 206);
			p1.className = "lh-copy";
			add_location(p1, file, 10, 8, 530);
			a1.href = "/guide/getting-started/field-selector";
			a1.className = "blue dim link";
			add_location(a1, file, 11, 42, 647);
			p2.className = "lh-copy";
			add_location(p2, file, 11, 8, 613);
			a2.href = "/guide/validators/callback";
			a2.className = "blue dim link";
			add_location(a2, file, 42, 41, 2063);
			add_location(code1, file, 42, 220, 2242);
			p3.className = "lh-copy";
			add_location(p3, file, 42, 8, 2030);
			add_location(code2, file, 85, 64, 3868);
			p4.className = "lh-copy";
			add_location(p4, file, 85, 8, 3812);
			section.className = "mv5";
			add_location(section, file, 7, 4, 176);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, a0);
			append(a0, t3);
			append(p0, t4);
			append(p0, code0);
			append(code0, t5);
			append(p0, t6);
			append(section, t7);
			append(section, p1);
			append(p1, t8);
			append(section, t9);
			append(section, p2);
			append(p2, t10);
			append(p2, a1);
			append(a1, t11);
			append(p2, t12);
			append(section, t13);
			mount_component(samplecode0, section, null);
			append(section, t14);
			mount_component(tip, section, null);
			append(section, t15);
			append(section, p3);
			append(p3, t16);
			append(p3, a2);
			append(a2, t17);
			append(p3, t18);
			append(p3, code1);
			append(code1, t19);
			append(p3, t20);
			append(section, t21);
			mount_component(samplecode1, section, null);
			append(section, t22);
			append(section, p4);
			append(p4, t23);
			append(p4, code2);
			append(code2, t24);
			append(p4, t25);
			append(section, t26);
			mount_component(demo, section, null);
			insert(target, t27, anchor);
			mount_component(relatedvalidators, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			samplecode0.$destroy();

			tip.$destroy();

			samplecode1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t27);
			}

			relatedvalidators.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var guidelayout = new GuideLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			guidelayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • Requiring at least one field";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var guidelayout_changes = {};
			if (changed.$$scope) guidelayout_changes.$$scope = { changed, ctx };
			guidelayout.$set(guidelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			guidelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			guidelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			guidelayout.$destroy(detaching);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
