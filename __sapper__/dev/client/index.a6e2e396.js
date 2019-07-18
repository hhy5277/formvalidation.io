import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.8206184d.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as ChangelogLayout } from './chunk.4a563e90.js';

/* src/routes/updates/v0.4.3/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/updates/v0.4.3/index.svelte";

// (10:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("New features");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "New features");
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

// (18:8) <Heading>
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Improvements");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Improvements");
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

// (27:8) <Heading>
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Bug fixes");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Bug fixes");
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

// (5:0) <ChangelogLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, h2, t2, t3, section0, t4, ul0, li0, t5, a0, t6, t7, li1, i, t8, a1, t9, t10, t11, section1, t12, ul1, li2, t13, a2, t14, t15, li3, t16, a3, t17, t18, code0, t19, t20, t21, li4, t22, t23, section2, t24, ul2, li5, t25, t26, li6, t27, t28, li7, t29, code1, t30, t31, t32, li8, t33, a4, t34, t35, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Version 0.4.3");
			t1 = space();
			h2 = element("h2");
			t2 = text("Released 26 April 2014");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			ul0 = element("ul");
			li0 = element("li");
			t5 = text("Add ");
			a0 = element("a");
			t6 = text("file validator");
			t7 = space();
			li1 = element("li");
			i = element("i");
			t8 = text(" Add ");
			a1 = element("a");
			t9 = text("vat validator");
			t10 = text(", support 32 countries");
			t11 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t12 = space();
			ul1 = element("ul");
			li2 = element("li");
			t13 = text("Add Canadian Postal Code support for the ");
			a2 = element("a");
			t14 = text("zipCode validator");
			t15 = space();
			li3 = element("li");
			t16 = text("The ");
			a3 = element("a");
			t17 = text("choice validator");
			t18 = text(" supports ");
			code0 = element("code");
			t19 = text("select");
			t20 = text(" element");
			t21 = space();
			li4 = element("li");
			t22 = text("Activate tab containing the first invalid field");
			t23 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t24 = space();
			ul2 = element("ul");
			li5 = element("li");
			t25 = text("Plugin method invocation");
			t26 = space();
			li6 = element("li");
			t27 = text("Fix IE8 error");
			t28 = space();
			li7 = element("li");
			t29 = text("The ");
			code1 = element("code");
			t30 = text("excluded: ':disabled'");
			t31 = text(" setting does not work on IE 8");
			t32 = space();
			li8 = element("li");
			t33 = text("The ");
			a4 = element("a");
			t34 = text("isbn validator");
			t35 = text(" accepts letters and special characters");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Version 0.4.3");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Released 26 April 2014");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n        ");

			ul0 = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul0_nodes = children(ul0);

			li0 = claim_element(ul0_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			t5 = claim_text(li0_nodes, "Add ");

			a0 = claim_element(li0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t6 = claim_text(a0_nodes, "file validator");
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t7 = claim_text(ul0_nodes, "\n            ");

			li1 = claim_element(ul0_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			i = claim_element(li1_nodes, "I", { class: true }, false);
			var i_nodes = children(i);

			i_nodes.forEach(detach);
			t8 = claim_text(li1_nodes, " Add ");

			a1 = claim_element(li1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t9 = claim_text(a1_nodes, "vat validator");
			a1_nodes.forEach(detach);
			t10 = claim_text(li1_nodes, ", support 32 countries");
			li1_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t12 = claim_text(section1_nodes, "\n        ");

			ul1 = claim_element(section1_nodes, "UL", { class: true }, false);
			var ul1_nodes = children(ul1);

			li2 = claim_element(ul1_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			t13 = claim_text(li2_nodes, "Add Canadian Postal Code support for the ");

			a2 = claim_element(li2_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t14 = claim_text(a2_nodes, "zipCode validator");
			a2_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t15 = claim_text(ul1_nodes, "\n            ");

			li3 = claim_element(ul1_nodes, "LI", {}, false);
			var li3_nodes = children(li3);

			t16 = claim_text(li3_nodes, "The ");

			a3 = claim_element(li3_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t17 = claim_text(a3_nodes, "choice validator");
			a3_nodes.forEach(detach);
			t18 = claim_text(li3_nodes, " supports ");

			code0 = claim_element(li3_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t19 = claim_text(code0_nodes, "select");
			code0_nodes.forEach(detach);
			t20 = claim_text(li3_nodes, " element");
			li3_nodes.forEach(detach);
			t21 = claim_text(ul1_nodes, "\n            ");

			li4 = claim_element(ul1_nodes, "LI", {}, false);
			var li4_nodes = children(li4);

			t22 = claim_text(li4_nodes, "Activate tab containing the first invalid field");
			li4_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t23 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t24 = claim_text(section2_nodes, "\n        ");

			ul2 = claim_element(section2_nodes, "UL", { class: true }, false);
			var ul2_nodes = children(ul2);

			li5 = claim_element(ul2_nodes, "LI", {}, false);
			var li5_nodes = children(li5);

			t25 = claim_text(li5_nodes, "Plugin method invocation");
			li5_nodes.forEach(detach);
			t26 = claim_text(ul2_nodes, "\n            ");

			li6 = claim_element(ul2_nodes, "LI", {}, false);
			var li6_nodes = children(li6);

			t27 = claim_text(li6_nodes, "Fix IE8 error");
			li6_nodes.forEach(detach);
			t28 = claim_text(ul2_nodes, "\n            ");

			li7 = claim_element(ul2_nodes, "LI", {}, false);
			var li7_nodes = children(li7);

			t29 = claim_text(li7_nodes, "The ");

			code1 = claim_element(li7_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t30 = claim_text(code1_nodes, "excluded: ':disabled'");
			code1_nodes.forEach(detach);
			t31 = claim_text(li7_nodes, " setting does not work on IE 8");
			li7_nodes.forEach(detach);
			t32 = claim_text(ul2_nodes, "\n            ");

			li8 = claim_element(ul2_nodes, "LI", {}, false);
			var li8_nodes = children(li8);

			t33 = claim_text(li8_nodes, "The ");

			a4 = claim_element(li8_nodes, "A", { href: true, class: true }, false);
			var a4_nodes = children(a4);

			t34 = claim_text(a4_nodes, "isbn validator");
			a4_nodes.forEach(detach);
			t35 = claim_text(li8_nodes, " accepts letters and special characters");
			li8_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			section2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 92);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 143);
			a0.href = "/guide/validators/file";
			a0.className = "blue dim link";
			add_location(a0, file, 11, 20, 321);
			add_location(li0, file, 11, 12, 313);
			i.className = "fa fa-star";
			add_location(i, file, 12, 16, 416);
			a1.href = "/guide/validators/vat";
			a1.className = "blue dim link";
			add_location(a1, file, 12, 47, 447);
			add_location(li1, file, 12, 12, 412);
			ul0.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul0, file, 10, 8, 268);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 198);
			a2.href = "/guide/validators/zip-code";
			a2.className = "blue dim link";
			add_location(a2, file, 19, 57, 740);
			add_location(li2, file, 19, 12, 695);
			a3.href = "/guide/validators/choice";
			a3.className = "blue dim link";
			add_location(a3, file, 20, 20, 846);
			add_location(code0, file, 20, 107, 933);
			add_location(li3, file, 20, 12, 838);
			add_location(li4, file, 21, 12, 978);
			ul1.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul1, file, 18, 8, 650);
			section1.className = "mv5";
			add_location(section1, file, 16, 4, 580);
			add_location(li5, file, 28, 12, 1181);
			add_location(li6, file, 29, 12, 1227);
			add_location(code1, file, 30, 20, 1270);
			add_location(li7, file, 30, 12, 1262);
			a4.href = "/guide/validators/isbn";
			a4.className = "blue dim link";
			add_location(a4, file, 31, 20, 1360);
			add_location(li8, file, 31, 12, 1352);
			ul2.className = "pa0 ma0 ml3 lh-copy";
			add_location(ul2, file, 27, 8, 1136);
			section2.className = "mv5";
			add_location(section2, file, 25, 4, 1069);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			insert(target, t3, anchor);
			insert(target, section0, anchor);
			mount_component(heading0, section0, null);
			append(section0, t4);
			append(section0, ul0);
			append(ul0, li0);
			append(li0, t5);
			append(li0, a0);
			append(a0, t6);
			append(ul0, t7);
			append(ul0, li1);
			append(li1, i);
			append(li1, t8);
			append(li1, a1);
			append(a1, t9);
			append(li1, t10);
			insert(target, t11, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t12);
			append(section1, ul1);
			append(ul1, li2);
			append(li2, t13);
			append(li2, a2);
			append(a2, t14);
			append(ul1, t15);
			append(ul1, li3);
			append(li3, t16);
			append(li3, a3);
			append(a3, t17);
			append(li3, t18);
			append(li3, code0);
			append(code0, t19);
			append(li3, t20);
			append(ul1, t21);
			append(ul1, li4);
			append(li4, t22);
			insert(target, t23, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t24);
			append(section2, ul2);
			append(ul2, li5);
			append(li5, t25);
			append(ul2, t26);
			append(ul2, li6);
			append(li6, t27);
			append(ul2, t28);
			append(ul2, li7);
			append(li7, t29);
			append(li7, code1);
			append(code1, t30);
			append(li7, t31);
			append(ul2, t32);
			append(ul2, li8);
			append(li8, t33);
			append(li8, a4);
			append(a4, t34);
			append(li8, t35);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
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

			heading0.$destroy();

			if (detaching) {
				detach(t11);
				detach(section1);
			}

			heading1.$destroy();

			if (detaching) {
				detach(t23);
				detach(section2);
			}

			heading2.$destroy();
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var changeloglayout = new ChangelogLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			changeloglayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			changeloglayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • v0.4.3";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(changeloglayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var changeloglayout_changes = {};
			if (changed.$$scope) changeloglayout_changes.$$scope = { changed, ctx };
			changeloglayout.$set(changeloglayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			changeloglayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			changeloglayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			changeloglayout.$destroy(detaching);
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
