import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';

/* src/routes/guide/api/validate-element/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/api/validate-element/index.svelte";

// (33:12) <PrevButton target="/guide/api/validate">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("validate() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "validate() method");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (34:12) <NextButton target="/guide/api/validate-field">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("validateField() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "validateField() method");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, div0, t4, p, sup0, t5, t6, t7, ul, li0, code0, t8, t9, sup1, t10, t11, t12, li1, code1, t13, t14, sup2, t15, t16, t17, t18, section1, div1, t19, current;

	var samplecode0 = new SampleCode({
		props: { lang: "javascript", code: `validateElement(field: String, element: HTMLElement): Promise` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
fv
    .validateElement('userName', userNameEle)
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated' (FormValidation.Status.NotValidated): The element is not yet validated
        // 'Valid' (FormValidation.Status.Valid): The element is valid
        // 'Invalid' (FormValidation.Status.Invalid): The element is invalid
        ...
    });
` },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/api/validate",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/api/validate-field",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("validateElement()");
			t1 = space();
			h2 = element("h2");
			t2 = text("Validate a particular element");
			t3 = space();
			section0 = element("section");
			div0 = element("div");
			samplecode0.$$.fragment.c();
			t4 = space();
			p = element("p");
			sup0 = element("sup");
			t5 = text("*");
			t6 = text(" presents a required parameter");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			code0 = element("code");
			t8 = text("field");
			t9 = space();
			sup1 = element("sup");
			t10 = text("*");
			t11 = text(" — The field name");
			t12 = space();
			li1 = element("li");
			code1 = element("code");
			t13 = text("element");
			t14 = space();
			sup2 = element("sup");
			t15 = text("*");
			t16 = text(" — The field element");
			t17 = space();
			samplecode1.$$.fragment.c();
			t18 = space();
			section1 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t19 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "validateElement()");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Validate a particular element");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			div0 = claim_element(section0_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode0.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t4 = claim_text(section0_nodes, "\n        ");

			p = claim_element(section0_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			sup0 = claim_element(p_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t5 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t6 = claim_text(p_nodes, " presents a required parameter");
			p_nodes.forEach(detach);
			t7 = claim_text(section0_nodes, "\n        ");

			ul = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			code0 = claim_element(li0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t8 = claim_text(code0_nodes, "field");
			code0_nodes.forEach(detach);
			t9 = claim_text(li0_nodes, " ");

			sup1 = claim_element(li0_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t10 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			t11 = claim_text(li0_nodes, " — The field name");
			li0_nodes.forEach(detach);
			t12 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			code1 = claim_element(li1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t13 = claim_text(code1_nodes, "element");
			code1_nodes.forEach(detach);
			t14 = claim_text(li1_nodes, " ");

			sup2 = claim_element(li1_nodes, "SUP", {}, false);
			var sup2_nodes = children(sup2);

			t15 = claim_text(sup2_nodes, "*");
			sup2_nodes.forEach(detach);
			t16 = claim_text(li1_nodes, " — The field element");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t17 = claim_text(section0_nodes, "\n");
			samplecode1.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t18 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			div1 = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t19 = claim_text(div1_nodes, "\n            ");
			nextbutton.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 106);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 161);
			div0.className = "mb3";
			add_location(div0, file, 9, 8, 253);
			add_location(sup0, file, 12, 29, 431);
			p.className = "lh-copy i";
			add_location(p, file, 12, 8, 410);
			add_location(code0, file, 14, 16, 531);
			add_location(sup1, file, 14, 35, 550);
			add_location(li0, file, 14, 12, 527);
			add_location(code1, file, 15, 16, 601);
			add_location(sup2, file, 15, 37, 622);
			add_location(li1, file, 15, 12, 597);
			ul.className = "ma0 pl3 lh-copy";
			add_location(ul, file, 13, 8, 486);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 223);
			div1.className = "flex";
			add_location(div1, file, 31, 8, 1163);
			section1.className = "mv5";
			add_location(section1, file, 30, 4, 1133);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			append(section0, div0);
			mount_component(samplecode0, div0, null);
			append(section0, t4);
			append(section0, p);
			append(p, sup0);
			append(sup0, t5);
			append(p, t6);
			append(section0, t7);
			append(section0, ul);
			append(ul, li0);
			append(li0, code0);
			append(code0, t8);
			append(li0, t9);
			append(li0, sup1);
			append(sup1, t10);
			append(li0, t11);
			append(ul, t12);
			append(ul, li1);
			append(li1, code1);
			append(code1, t13);
			append(li1, t14);
			append(li1, sup2);
			append(sup2, t15);
			append(li1, t16);
			append(section0, t17);
			mount_component(samplecode1, section0, null);
			insert(target, t18, anchor);
			insert(target, section1, anchor);
			append(section1, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t19);
			mount_component(nextbutton, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t3);
				detach(section0);
			}

			samplecode0.$destroy();

			samplecode1.$destroy();

			if (detaching) {
				detach(t18);
				detach(section1);
			}

			prevbutton.$destroy();

			nextbutton.$destroy();
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
			document.title = "FormValidation • validateElement() method";
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
