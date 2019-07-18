import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';

/* src/routes/guide/api/get-element-value/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/api/get-element-value/index.svelte";

// (24:12) <PrevButton target="/guide/api/get-elements">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("getElements() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "getElements() method");
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

// (25:12) <NextButton target="/guide/api/get-fields">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("getFields() method");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "getFields() method");
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
	var h1, t0, t1, h2, t2, t3, section0, p0, t4, code0, t5, t6, a, t7, t8, t9, div0, t10, p1, sup0, t11, t12, t13, ul, li0, code1, t14, t15, sup1, t16, t17, t18, li1, code2, t19, t20, sup2, t21, t22, t23, li2, code3, t24, t25, t26, section1, div1, t27, current;

	var samplecode = new SampleCode({
		props: { lang: "javascript", code: `getElementValue(field: String, ele: HTMLElement, validator: String): String` },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/api/get-elements",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/api/get-fields",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("getElementValue()");
			t1 = space();
			h2 = element("h2");
			t2 = text("Return the element value");
			t3 = space();
			section0 = element("section");
			p0 = element("p");
			t4 = text("The element value might be modified by the ");
			code0 = element("code");
			t5 = text("field-value");
			t6 = text(" filter, via the ");
			a = element("a");
			t7 = text("Transformer");
			t8 = text(" plugin, for example");
			t9 = space();
			div0 = element("div");
			samplecode.$$.fragment.c();
			t10 = space();
			p1 = element("p");
			sup0 = element("sup");
			t11 = text("*");
			t12 = text(" presents a required parameter");
			t13 = space();
			ul = element("ul");
			li0 = element("li");
			code1 = element("code");
			t14 = text("field");
			t15 = space();
			sup1 = element("sup");
			t16 = text("*");
			t17 = text(" — The field name");
			t18 = space();
			li1 = element("li");
			code2 = element("code");
			t19 = text("ele");
			t20 = space();
			sup2 = element("sup");
			t21 = text("*");
			t22 = text(" — The field element");
			t23 = space();
			li2 = element("li");
			code3 = element("code");
			t24 = text("validator");
			t25 = text(" — The validator name");
			t26 = space();
			section1 = element("section");
			div1 = element("div");
			prevbutton.$$.fragment.c();
			t27 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "getElementValue()");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Return the element value");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t4 = claim_text(p0_nodes, "The element value might be modified by the ");

			code0 = claim_element(p0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t5 = claim_text(code0_nodes, "field-value");
			code0_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, " filter, via the ");

			a = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t7 = claim_text(a_nodes, "Transformer");
			a_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, " plugin, for example");
			p0_nodes.forEach(detach);
			t9 = claim_text(section0_nodes, "\n        ");

			div0 = claim_element(section0_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			samplecode.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach);
			t10 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			sup0 = claim_element(p1_nodes, "SUP", {}, false);
			var sup0_nodes = children(sup0);

			t11 = claim_text(sup0_nodes, "*");
			sup0_nodes.forEach(detach);
			t12 = claim_text(p1_nodes, " presents a required parameter");
			p1_nodes.forEach(detach);
			t13 = claim_text(section0_nodes, "\n        ");

			ul = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			code1 = claim_element(li0_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t14 = claim_text(code1_nodes, "field");
			code1_nodes.forEach(detach);
			t15 = claim_text(li0_nodes, " ");

			sup1 = claim_element(li0_nodes, "SUP", {}, false);
			var sup1_nodes = children(sup1);

			t16 = claim_text(sup1_nodes, "*");
			sup1_nodes.forEach(detach);
			t17 = claim_text(li0_nodes, " — The field name");
			li0_nodes.forEach(detach);
			t18 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			code2 = claim_element(li1_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t19 = claim_text(code2_nodes, "ele");
			code2_nodes.forEach(detach);
			t20 = claim_text(li1_nodes, " ");

			sup2 = claim_element(li1_nodes, "SUP", {}, false);
			var sup2_nodes = children(sup2);

			t21 = claim_text(sup2_nodes, "*");
			sup2_nodes.forEach(detach);
			t22 = claim_text(li1_nodes, " — The field element");
			li1_nodes.forEach(detach);
			t23 = claim_text(ul_nodes, "\n            ");

			li2 = claim_element(ul_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			code3 = claim_element(li2_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t24 = claim_text(code3_nodes, "validator");
			code3_nodes.forEach(detach);
			t25 = claim_text(li2_nodes, " — The validator name");
			li2_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t26 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			div1 = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			prevbutton.$$.fragment.l(div1_nodes);
			t27 = claim_text(div1_nodes, "\n            ");
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
			add_location(code0, file, 9, 70, 310);
			a.href = "/guide/plugins/transformer";
			a.className = "blue dim link";
			add_location(a, file, 9, 111, 351);
			p0.className = "lh-copy";
			add_location(p0, file, 9, 8, 248);
			div0.className = "mb3";
			add_location(div0, file, 10, 8, 458);
			add_location(sup0, file, 13, 29, 650);
			p1.className = "lh-copy i";
			add_location(p1, file, 13, 8, 629);
			add_location(code1, file, 15, 16, 750);
			add_location(sup1, file, 15, 35, 769);
			add_location(li0, file, 15, 12, 746);
			add_location(code2, file, 16, 16, 820);
			add_location(sup2, file, 16, 33, 837);
			add_location(li1, file, 16, 12, 816);
			add_location(code3, file, 17, 16, 891);
			add_location(li2, file, 17, 12, 887);
			ul.className = "ma0 pl3 lh-copy";
			add_location(ul, file, 14, 8, 705);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 218);
			div1.className = "flex";
			add_location(div1, file, 22, 8, 1004);
			section1.className = "mv5";
			add_location(section1, file, 21, 4, 974);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			append(section0, p0);
			append(p0, t4);
			append(p0, code0);
			append(code0, t5);
			append(p0, t6);
			append(p0, a);
			append(a, t7);
			append(p0, t8);
			append(section0, t9);
			append(section0, div0);
			mount_component(samplecode, div0, null);
			append(section0, t10);
			append(section0, p1);
			append(p1, sup0);
			append(sup0, t11);
			append(p1, t12);
			append(section0, t13);
			append(section0, ul);
			append(ul, li0);
			append(li0, code1);
			append(code1, t14);
			append(li0, t15);
			append(li0, sup1);
			append(sup1, t16);
			append(li0, t17);
			append(ul, t18);
			append(ul, li1);
			append(li1, code2);
			append(code2, t19);
			append(li1, t20);
			append(li1, sup2);
			append(sup2, t21);
			append(li1, t22);
			append(ul, t23);
			append(ul, li2);
			append(li2, code3);
			append(code3, t24);
			append(li2, t25);
			insert(target, t26, anchor);
			insert(target, section1, anchor);
			append(section1, div1);
			mount_component(prevbutton, div1, null);
			append(div1, t27);
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
			samplecode.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode.$$.fragment.o(local);
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

			samplecode.$destroy();

			if (detaching) {
				detach(t26);
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
			document.title = "FormValidation • getElementValue() method";
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
