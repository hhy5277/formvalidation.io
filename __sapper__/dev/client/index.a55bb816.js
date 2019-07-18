import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/validating-social-account-url/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-social-account-url/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p, t2, a0, t3, t4, a1, t5, t6, code, t7, t8, t9, t10, t11, current;

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/validating-social-account-url",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Validating an avatar URL',
        'Validating social account URL',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['regexp', 'uri'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Validating social account URL");
			t1 = space();
			section = element("section");
			p = element("p");
			t2 = text("Instead of using the ");
			a0 = element("a");
			t3 = text("uri validator");
			t4 = text(", this example uses the ");
			a1 = element("a");
			t5 = text("regexp validator");
			t6 = text(" to validate Facebook account URL, such as ");
			code = element("code");
			t7 = text("http(s)://facebook.com/account");
			t8 = text(":");
			t9 = space();
			demo.$$.fragment.c();
			t10 = space();
			examples.$$.fragment.c();
			t11 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Validating social account URL");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p = claim_element(section_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t2 = claim_text(p_nodes, "Instead of using the ");

			a0 = claim_element(p_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "uri validator");
			a0_nodes.forEach(detach);
			t4 = claim_text(p_nodes, ", this example uses the ");

			a1 = claim_element(p_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t5 = claim_text(a1_nodes, "regexp validator");
			a1_nodes.forEach(detach);
			t6 = claim_text(p_nodes, " to validate Facebook account URL, such as ");

			code = claim_element(p_nodes, "CODE", {}, false);
			var code_nodes = children(code);

			t7 = claim_text(code_nodes, "http(s)://facebook.com/account");
			code_nodes.forEach(detach);
			t8 = claim_text(p_nodes, ":");
			p_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t10 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t11 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 111);
			a0.href = "/guide/validators/uri";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 48, 248);
			a1.href = "/guide/validators/regexp";
			a1.className = "blue dim link";
			add_location(a1, file, 8, 143, 343);
			add_location(code, file, 8, 263, 463);
			p.className = "lh-copy";
			add_location(p, file, 8, 8, 208);
			section.className = "mv5";
			add_location(section, file, 7, 4, 178);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p);
			append(p, t2);
			append(p, a0);
			append(a0, t3);
			append(p, t4);
			append(p, a1);
			append(a1, t5);
			append(p, t6);
			append(p, code);
			append(code, t7);
			append(p, t8);
			append(section, t9);
			mount_component(demo, section, null);
			insert(target, t10, anchor);
			mount_component(examples, target, anchor);
			insert(target, t11, anchor);
			mount_component(relatedvalidators, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			demo.$destroy();

			if (detaching) {
				detach(t10);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t11);
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
			document.title = "FormValidation • Validating social account URL";
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
