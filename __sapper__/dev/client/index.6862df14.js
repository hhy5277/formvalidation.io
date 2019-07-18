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

/* src/routes/guide/examples/regenerating-captcha-when-the-form-is-invalid/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/regenerating-captcha-when-the-form-is-invalid/index.svelte";

// (49:8) <Tip>
function create_default_slot_1(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("The example uses a very simple captcha generation which is a sum operation of two random numbers. In reality, it's recommended to use the popular Google's ");
			a = element("a");
			t1 = text("reCaptcha");
			t2 = text(" service");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "The example uses a very simple captcha generation which is a sum operation of two random numbers. In reality, it's recommended to use the popular Google's ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "reCaptcha");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " service");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/recaptcha";
			a.className = "blue dim link";
			add_location(a, file, 49, 167, 1764);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);
			insert(target, t2, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(a);
				detach(t2);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p, t2, span, t3, t4, t5, t6, t7, t8, current;

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `
const captchaEle = document.getElementById('captchaOperation');

const generateCaptcha = function() {
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    captchaEle.innerHTML = [random[0], '+', random[1], '='].join(' ');
};

generateCaptcha();

FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function(input) {
                                const items = captchaEle.innerHTML.split(' ');
                                const sum = parseInt(items[0]) + parseInt(items[2]);
                                return input.value == sum;
                            }
                        }
                    }
                }
            },
            plugins: {
                submitButton: new FormValidation.plugins.SubmitButton(),
                ...
            },
        }
    )
    .on('core.form.invalid', function() {
        // Regenerate captcha
        generateCaptcha();
    });
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

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/regenerating-captcha-when-the-form-is-invalid",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['callback'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Regenerating captcha when the form is invalid");
			t1 = space();
			section = element("section");
			p = element("p");
			t2 = text("In the following form, click the ");
			span = element("span");
			t3 = text("Submit");
			t4 = text(" button to see the new captcha is generated.");
			t5 = space();
			samplecode.$$.fragment.c();
			t6 = space();
			tip.$$.fragment.c();
			t7 = space();
			demo.$$.fragment.c();
			t8 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Regenerating captcha when the form is invalid");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p = claim_element(section_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t2 = claim_text(p_nodes, "In the following form, click the ");

			span = claim_element(p_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t3 = claim_text(span_nodes, "Submit");
			span_nodes.forEach(detach);
			t4 = claim_text(p_nodes, " button to see the new captcha is generated.");
			p_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n");
			samplecode.$$.fragment.l(section_nodes);
			t6 = claim_text(section_nodes, "\n        ");
			tip.$$.fragment.l(section_nodes);
			t7 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t8 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 127);
			span.className = "i";
			add_location(span, file, 8, 60, 292);
			p.className = "lh-copy";
			add_location(p, file, 8, 8, 240);
			section.className = "mv5";
			add_location(section, file, 7, 4, 210);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p);
			append(p, t2);
			append(p, span);
			append(span, t3);
			append(p, t4);
			append(section, t5);
			mount_component(samplecode, section, null);
			append(section, t6);
			mount_component(tip, section, null);
			append(section, t7);
			mount_component(demo, section, null);
			insert(target, t8, anchor);
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
			samplecode.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
			tip.$$.fragment.o(local);
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

			samplecode.$destroy();

			tip.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t8);
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
			document.title = "FormValidation • Regenerating captcha when the form is invalid";
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
