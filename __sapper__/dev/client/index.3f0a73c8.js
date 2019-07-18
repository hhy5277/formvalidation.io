import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/events/core.field.added/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/events/core.field.added/index.svelte";

// (24:12) <PrevButton target="/guide/events/core.element.validating">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("core.element.validating event");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "core.element.validating event");
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

// (25:12) <NextButton target="/guide/events/core.field.invalid">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("core.field.invalid event");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "core.field.invalid event");
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
	var h1, t0, t1, h2, t2, a, t3, t4, t5, section0, p, t6, t7, ul, li0, code0, t8, t9, t10, li1, code1, t11, t12, t13, li2, code2, t14, t15, t16, t17, section1, div, t18, current;

	var examples = new Examples({
		props: { examples: [
        'Adding dynamic field',
    ] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/events/core.element.validating",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/events/core.field.invalid",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("core.field.added event");
			t1 = space();
			h2 = element("h2");
			t2 = text("Triggered after adding a field via the ");
			a = element("a");
			t3 = text("addField()");
			t4 = text(" method");
			t5 = space();
			section0 = element("section");
			p = element("p");
			t6 = text("The event object contains the following properties");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			code0 = element("code");
			t8 = text("elements");
			t9 = text(": HTMLElement[] — The field elements");
			t10 = space();
			li1 = element("li");
			code1 = element("code");
			t11 = text("field");
			t12 = text(": String — The field name");
			t13 = space();
			li2 = element("li");
			code2 = element("code");
			t14 = text("options");
			t15 = text(": Object — The field options");
			t16 = space();
			examples.$$.fragment.c();
			t17 = space();
			section1 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t18 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "core.field.added event");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Triggered after adding a field via the ");

			a = claim_element(h2_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t3 = claim_text(a_nodes, "addField()");
			a_nodes.forEach(detach);
			t4 = claim_text(h2_nodes, " method");
			h2_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			p = claim_element(section0_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t6 = claim_text(p_nodes, "The event object contains the following properties");
			p_nodes.forEach(detach);
			t7 = claim_text(section0_nodes, "\n        ");

			ul = claim_element(section0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", {}, false);
			var li0_nodes = children(li0);

			code0 = claim_element(li0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t8 = claim_text(code0_nodes, "elements");
			code0_nodes.forEach(detach);
			t9 = claim_text(li0_nodes, ": HTMLElement[] — The field elements");
			li0_nodes.forEach(detach);
			t10 = claim_text(ul_nodes, "\n            ");

			li1 = claim_element(ul_nodes, "LI", {}, false);
			var li1_nodes = children(li1);

			code1 = claim_element(li1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t11 = claim_text(code1_nodes, "field");
			code1_nodes.forEach(detach);
			t12 = claim_text(li1_nodes, ": String — The field name");
			li1_nodes.forEach(detach);
			t13 = claim_text(ul_nodes, "\n            ");

			li2 = claim_element(ul_nodes, "LI", {}, false);
			var li2_nodes = children(li2);

			code2 = claim_element(li2_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t14 = claim_text(code2_nodes, "options");
			code2_nodes.forEach(detach);
			t15 = claim_text(li2_nodes, ": Object — The field options");
			li2_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			t16 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t17 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			div = claim_element(section1_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t18 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 104);
			a.href = "/guide/api/add-field";
			a.className = "blue dim link";
			add_location(a, file, 6, 65, 225);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 164);
			p.className = "lh-copy";
			add_location(p, file, 9, 8, 340);
			add_location(code0, file, 11, 16, 467);
			add_location(li0, file, 11, 12, 463);
			add_location(code1, file, 12, 16, 546);
			add_location(li1, file, 12, 12, 542);
			add_location(code2, file, 13, 16, 611);
			add_location(li2, file, 13, 12, 607);
			ul.className = "ma0 pl3 lh-copy";
			add_location(ul, file, 10, 8, 422);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 310);
			div.className = "flex";
			add_location(div, file, 22, 8, 798);
			section1.className = "mv5";
			add_location(section1, file, 21, 4, 768);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, h2, anchor);
			append(h2, t2);
			append(h2, a);
			append(a, t3);
			append(h2, t4);
			insert(target, t5, anchor);
			insert(target, section0, anchor);
			append(section0, p);
			append(p, t6);
			append(section0, t7);
			append(section0, ul);
			append(ul, li0);
			append(li0, code0);
			append(code0, t8);
			append(li0, t9);
			append(ul, t10);
			append(ul, li1);
			append(li1, code1);
			append(code1, t11);
			append(li1, t12);
			append(ul, t13);
			append(ul, li2);
			append(li2, code2);
			append(code2, t14);
			append(li2, t15);
			insert(target, t16, anchor);
			mount_component(examples, target, anchor);
			insert(target, t17, anchor);
			insert(target, section1, anchor);
			append(section1, div);
			mount_component(prevbutton, div, null);
			append(div, t18);
			mount_component(nextbutton, div, null);
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
			examples.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			examples.$$.fragment.o(local);
			prevbutton.$$.fragment.o(local);
			nextbutton.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(h2);
				detach(t5);
				detach(section0);
				detach(t16);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t17);
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
			document.title = "FormValidation • core.field.added event";
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
