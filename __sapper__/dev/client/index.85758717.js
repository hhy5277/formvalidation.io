import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import { a as Heading } from './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import { a as NextButton } from './chunk.cdfc7765.js';
import { a as PrevButton } from './chunk.01d914ec.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';
import './chunk.41999a23.js';

/* src/routes/guide/validators/not-empty/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/not-empty/index.svelte";

// (10:8) <Heading>
function create_default_slot_7(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Options");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Options");
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

// (59:8) <Tip>
function create_default_slot_6(ctx) {
	var t0, a, t1, t2;

	return {
		c: function create() {
			t0 = text("The ");
			a = element("a");
			t1 = text("MandatoryIcon");
			t2 = text(" plugin is useful when you want to display the mandatory icon for required fields");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "The ");

			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "MandatoryIcon");
			a_nodes.forEach(detach);
			t2 = claim_text(nodes, " plugin is useful when you want to display the mandatory icon for required fields");
			this.h();
		},

		h: function hydrate() {
			a.href = "/guide/plugins/mandatory-icon";
			a.className = "blue dim link";
			add_location(a, file, 58, 17, 2077);
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

// (63:8) <Heading>
function create_default_slot_5(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Basic example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Basic example");
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

// (69:8) <Heading>
function create_default_slot_4(ctx) {
	var t;

	return {
		c: function create() {
			t = text("HTML5 example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "HTML5 example");
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

// (75:8) <Heading>
function create_default_slot_3(ctx) {
	var t;

	return {
		c: function create() {
			t = text("ES6 Module Example");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "ES6 Module Example");
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

// (119:12) <PrevButton target="/guide/validators/meid">
function create_default_slot_2(ctx) {
	var t;

	return {
		c: function create() {
			t = text("meid validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "meid validator");
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

// (120:12) <NextButton target="/guide/validators/numeric">
function create_default_slot_1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("numeric validator");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "numeric validator");
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
	var h1, t0, t1, h2, t2, t3, section0, t4, h30, t5, t6, p0, t7, a0, t8, t9, t10, table, tr0, th0, t11, t12, th1, t13, t14, th2, t15, t16, th3, t17, t18, tr1, td0, code0, t19, t20, td1, code1, t21, t22, td2, t23, t24, td3, t25, t26, h31, t27, t28, p1, t29, code2, t30, t31, t32, t33, h32, t34, t35, t36, t37, section1, t38, p2, t39, t40, t41, section2, t42, p3, t43, a1, t44, t45, code3, t46, t47, t48, t49, section3, t50, p4, t51, t52, t53, t54, t55, section4, div, t56, current;

	var heading0 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<select name="gender">
    <option value="">Select the gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
</select>
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import notEmpty from 'formvalidation/dist/es6/validators/notEmpty';

const result = notEmpty().validate({
    value: ...,
    options: {
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message
}
*/
` },
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var heading1 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo0 = new Demo({
		props: {
		prefix: "/guide/validators/not-empty/basic",
		frameworks: ['bootstrap', 'tachyons']
	},
		$$inline: true
	});

	var heading2 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var demo1 = new Demo({
		props: {
		prefix: "/guide/validators/not-empty/html5",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var heading3 = new Heading({
		props: {
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode2 = new SampleCode({
		props: { lang: "javascript", code: `
// You might need to change the importing path
import notEmpty from 'formvalidation/dist/es6/validators/notEmpty';

const res1 = notEmpty().validate({
    value: 'John Smith',
    options: {
        message: 'The name is required',
    },
});
// res1.valid === true

const res2 = notEmpty().validate({
    value: '',
    options: {
        message: 'The name is required',
    },
});
// res2.valid === false

const res3 = notEmpty().validate({
    value: '   ',
    options: {
        message: 'The name is required',
    },
});
// res3.valid === false
` },
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Integrating with TinyMCE',
        'Requiring at least one field',
        'Terms and conditions agreement validation',
        'Trimming a value',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['stringLength'] },
		$$inline: true
	});

	var prevbutton = new PrevButton({
		props: {
		target: "/guide/validators/meid",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var nextbutton = new NextButton({
		props: {
		target: "/guide/validators/numeric",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("notEmpty validator");
			t1 = space();
			h2 = element("h2");
			t2 = text("Check if the value an is empty string");
			t3 = space();
			section0 = element("section");
			heading0.$$.fragment.c();
			t4 = space();
			h30 = element("h3");
			t5 = text("Using with form field");
			t6 = space();
			p0 = element("p");
			t7 = text("The HTML attributes are used to set the validator options via the ");
			a0 = element("a");
			t8 = text("Declarative");
			t9 = text(" plugin");
			t10 = space();
			table = element("table");
			tr0 = element("tr");
			th0 = element("th");
			t11 = text("Name");
			t12 = space();
			th1 = element("th");
			t13 = text("HTML attribute");
			t14 = space();
			th2 = element("th");
			t15 = text("Type");
			t16 = space();
			th3 = element("th");
			t17 = text("Description");
			t18 = space();
			tr1 = element("tr");
			td0 = element("td");
			code0 = element("code");
			t19 = text("message");
			t20 = space();
			td1 = element("td");
			code1 = element("code");
			t21 = text("data-fv-not-empty___message");
			t22 = space();
			td2 = element("td");
			t23 = text("String");
			t24 = space();
			td3 = element("td");
			t25 = text("The error message");
			t26 = space();
			h31 = element("h3");
			t27 = text("Use with select element");
			t28 = space();
			p1 = element("p");
			t29 = text("If you want a select element to be required, you have to set ");
			code2 = element("code");
			t30 = text("value=\"\"");
			t31 = text(" for the option which is treated as empty one:");
			t32 = space();
			samplecode0.$$.fragment.c();
			t33 = space();
			h32 = element("h3");
			t34 = text("Using with ES6 module");
			t35 = space();
			samplecode1.$$.fragment.c();
			t36 = space();
			tip.$$.fragment.c();
			t37 = space();
			section1 = element("section");
			heading1.$$.fragment.c();
			t38 = space();
			p2 = element("p");
			t39 = text("In the following form, user is asked to enter the full name.");
			t40 = space();
			demo0.$$.fragment.c();
			t41 = space();
			section2 = element("section");
			heading2.$$.fragment.c();
			t42 = space();
			p3 = element("p");
			t43 = text("When the ");
			a1 = element("a");
			t44 = text("Declarative");
			t45 = text(" plugin is used, the notEmpty validator will be turned on automatically if the input uses HTML 5 ");
			code3 = element("code");
			t46 = text("required");
			t47 = text(" attribute.");
			t48 = space();
			demo1.$$.fragment.c();
			t49 = space();
			section3 = element("section");
			heading3.$$.fragment.c();
			t50 = space();
			p4 = element("p");
			t51 = text("The following snippet shows how to use the notEmpty validator with ES6 module:");
			t52 = space();
			samplecode2.$$.fragment.c();
			t53 = space();
			examples.$$.fragment.c();
			t54 = space();
			relatedvalidators.$$.fragment.c();
			t55 = space();
			section4 = element("section");
			div = element("div");
			prevbutton.$$.fragment.c();
			t56 = space();
			nextbutton.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "notEmpty validator");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    ");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t2 = claim_text(h2_nodes, "Check if the value an is empty string");
			h2_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n\n    ");

			section0 = claim_element(nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			heading0.$$.fragment.l(section0_nodes);
			t4 = claim_text(section0_nodes, "\n\n        ");

			h30 = claim_element(section0_nodes, "H3", {}, false);
			var h30_nodes = children(h30);

			t5 = claim_text(h30_nodes, "Using with form field");
			h30_nodes.forEach(detach);
			t6 = claim_text(section0_nodes, "\n        ");

			p0 = claim_element(section0_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t7 = claim_text(p0_nodes, "The HTML attributes are used to set the validator options via the ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t8 = claim_text(a0_nodes, "Declarative");
			a0_nodes.forEach(detach);
			t9 = claim_text(p0_nodes, " plugin");
			p0_nodes.forEach(detach);
			t10 = claim_text(section0_nodes, "\n        ");

			table = claim_element(section0_nodes, "TABLE", { class: true }, false);
			var table_nodes = children(table);

			tr0 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr0_nodes = children(tr0);

			th0 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th0_nodes = children(th0);

			t11 = claim_text(th0_nodes, "Name");
			th0_nodes.forEach(detach);
			t12 = claim_text(tr0_nodes, "\n                ");

			th1 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th1_nodes = children(th1);

			t13 = claim_text(th1_nodes, "HTML attribute");
			th1_nodes.forEach(detach);
			t14 = claim_text(tr0_nodes, "\n                ");

			th2 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th2_nodes = children(th2);

			t15 = claim_text(th2_nodes, "Type");
			th2_nodes.forEach(detach);
			t16 = claim_text(tr0_nodes, "\n                ");

			th3 = claim_element(tr0_nodes, "TH", { class: true }, false);
			var th3_nodes = children(th3);

			t17 = claim_text(th3_nodes, "Description");
			th3_nodes.forEach(detach);
			tr0_nodes.forEach(detach);
			t18 = claim_text(table_nodes, "\n            ");

			tr1 = claim_element(table_nodes, "TR", { class: true }, false);
			var tr1_nodes = children(tr1);

			td0 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td0_nodes = children(td0);

			code0 = claim_element(td0_nodes, "CODE", {}, false);
			var code0_nodes = children(code0);

			t19 = claim_text(code0_nodes, "message");
			code0_nodes.forEach(detach);
			td0_nodes.forEach(detach);
			t20 = claim_text(tr1_nodes, "\n                ");

			td1 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td1_nodes = children(td1);

			code1 = claim_element(td1_nodes, "CODE", {}, false);
			var code1_nodes = children(code1);

			t21 = claim_text(code1_nodes, "data-fv-not-empty___message");
			code1_nodes.forEach(detach);
			td1_nodes.forEach(detach);
			t22 = claim_text(tr1_nodes, "\n                ");

			td2 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td2_nodes = children(td2);

			t23 = claim_text(td2_nodes, "String");
			td2_nodes.forEach(detach);
			t24 = claim_text(tr1_nodes, "\n                ");

			td3 = claim_element(tr1_nodes, "TD", { class: true }, false);
			var td3_nodes = children(td3);

			t25 = claim_text(td3_nodes, "The error message");
			td3_nodes.forEach(detach);
			tr1_nodes.forEach(detach);
			table_nodes.forEach(detach);
			t26 = claim_text(section0_nodes, "\n\n        ");

			h31 = claim_element(section0_nodes, "H3", {}, false);
			var h31_nodes = children(h31);

			t27 = claim_text(h31_nodes, "Use with select element");
			h31_nodes.forEach(detach);
			t28 = claim_text(section0_nodes, "\n        ");

			p1 = claim_element(section0_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t29 = claim_text(p1_nodes, "If you want a select element to be required, you have to set ");

			code2 = claim_element(p1_nodes, "CODE", {}, false);
			var code2_nodes = children(code2);

			t30 = claim_text(code2_nodes, "value=\"\"");
			code2_nodes.forEach(detach);
			t31 = claim_text(p1_nodes, " for the option which is treated as empty one:");
			p1_nodes.forEach(detach);
			t32 = claim_text(section0_nodes, "\n");
			samplecode0.$$.fragment.l(section0_nodes);
			t33 = claim_text(section0_nodes, "\n\n        ");

			h32 = claim_element(section0_nodes, "H3", {}, false);
			var h32_nodes = children(h32);

			t34 = claim_text(h32_nodes, "Using with ES6 module");
			h32_nodes.forEach(detach);
			t35 = claim_text(section0_nodes, "\n");
			samplecode1.$$.fragment.l(section0_nodes);
			t36 = claim_text(section0_nodes, "\n        ");
			tip.$$.fragment.l(section0_nodes);
			section0_nodes.forEach(detach);
			t37 = claim_text(nodes, "\n\n    ");

			section1 = claim_element(nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			heading1.$$.fragment.l(section1_nodes);
			t38 = claim_text(section1_nodes, "\n        ");

			p2 = claim_element(section1_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t39 = claim_text(p2_nodes, "In the following form, user is asked to enter the full name.");
			p2_nodes.forEach(detach);
			t40 = claim_text(section1_nodes, "\n        ");
			demo0.$$.fragment.l(section1_nodes);
			section1_nodes.forEach(detach);
			t41 = claim_text(nodes, "\n\n    ");

			section2 = claim_element(nodes, "SECTION", { class: true }, false);
			var section2_nodes = children(section2);

			heading2.$$.fragment.l(section2_nodes);
			t42 = claim_text(section2_nodes, "\n        ");

			p3 = claim_element(section2_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t43 = claim_text(p3_nodes, "When the ");

			a1 = claim_element(p3_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t44 = claim_text(a1_nodes, "Declarative");
			a1_nodes.forEach(detach);
			t45 = claim_text(p3_nodes, " plugin is used, the notEmpty validator will be turned on automatically if the input uses HTML 5 ");

			code3 = claim_element(p3_nodes, "CODE", {}, false);
			var code3_nodes = children(code3);

			t46 = claim_text(code3_nodes, "required");
			code3_nodes.forEach(detach);
			t47 = claim_text(p3_nodes, " attribute.");
			p3_nodes.forEach(detach);
			t48 = claim_text(section2_nodes, "\n        ");
			demo1.$$.fragment.l(section2_nodes);
			section2_nodes.forEach(detach);
			t49 = claim_text(nodes, "\n\n    ");

			section3 = claim_element(nodes, "SECTION", { class: true }, false);
			var section3_nodes = children(section3);

			heading3.$$.fragment.l(section3_nodes);
			t50 = claim_text(section3_nodes, "\n\n        ");

			p4 = claim_element(section3_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t51 = claim_text(p4_nodes, "The following snippet shows how to use the notEmpty validator with ES6 module:");
			p4_nodes.forEach(detach);
			t52 = claim_text(section3_nodes, "\n");
			samplecode2.$$.fragment.l(section3_nodes);
			section3_nodes.forEach(detach);
			t53 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t54 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			t55 = claim_text(nodes, "\n\n    ");

			section4 = claim_element(nodes, "SECTION", { class: true }, false);
			var section4_nodes = children(section4);

			div = claim_element(section4_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			prevbutton.$$.fragment.l(div_nodes);
			t56 = claim_text(div_nodes, "\n            ");
			nextbutton.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			section4_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			h1.className = "f3 f2-m f1-l tc";
			add_location(h1, file, 5, 4, 100);
			h2.className = "f4 fw4 tc";
			add_location(h2, file, 6, 4, 156);
			add_location(h30, file, 11, 8, 292);
			a0.href = "/guide/plugins/declarative";
			a0.className = "blue dim link";
			add_location(a0, file, 12, 95, 418);
			p0.className = "lh-copy i";
			add_location(p0, file, 12, 8, 331);
			th0.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th0, file, 15, 16, 635);
			th1.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th1, file, 16, 16, 695);
			th2.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th2, file, 17, 16, 765);
			th3.className = "pv2 ph3 tl f6 fw6 ttu";
			add_location(th3, file, 18, 16, 825);
			tr0.className = "striped--light-gray";
			add_location(tr0, file, 14, 12, 586);
			add_location(code0, file, 21, 36, 975);
			td0.className = "pv2 ph3";
			add_location(td0, file, 21, 16, 955);
			add_location(code1, file, 22, 36, 1037);
			td1.className = "pv2 ph3";
			add_location(td1, file, 22, 16, 1017);
			td2.className = "pv2 ph3";
			add_location(td2, file, 23, 16, 1099);
			td3.className = "pv2 ph3";
			add_location(td3, file, 24, 16, 1147);
			tr1.className = "striped--light-gray";
			add_location(tr1, file, 20, 12, 906);
			table.className = "collapse ba br2 b--black-10 pv2 ph3 w-100 mb4";
			add_location(table, file, 13, 8, 512);
			add_location(h31, file, 28, 8, 1234);
			add_location(code2, file, 29, 88, 1355);
			p1.className = "lh-copy";
			add_location(p1, file, 29, 8, 1275);
			add_location(h32, file, 39, 8, 1678);
			section0.className = "mv5";
			add_location(section0, file, 8, 4, 226);
			p2.className = "lh-copy";
			add_location(p2, file, 63, 8, 2335);
			section1.className = "mv5";
			add_location(section1, file, 61, 4, 2264);
			a1.href = "/guide/plugins/declarative";
			a1.className = "blue dim link";
			add_location(a1, file, 69, 36, 2637);
			add_location(code3, file, 69, 207, 2808);
			p3.className = "lh-copy";
			add_location(p3, file, 69, 8, 2609);
			section2.className = "mv5";
			add_location(section2, file, 67, 4, 2538);
			p4.className = "lh-copy";
			add_location(p4, file, 76, 8, 3028);
			section3.className = "mv5";
			add_location(section3, file, 73, 4, 2951);
			div.className = "flex";
			add_location(div, file, 117, 8, 4028);
			section4.className = "mv5";
			add_location(section4, file, 116, 4, 3998);
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
			append(section0, h30);
			append(h30, t5);
			append(section0, t6);
			append(section0, p0);
			append(p0, t7);
			append(p0, a0);
			append(a0, t8);
			append(p0, t9);
			append(section0, t10);
			append(section0, table);
			append(table, tr0);
			append(tr0, th0);
			append(th0, t11);
			append(tr0, t12);
			append(tr0, th1);
			append(th1, t13);
			append(tr0, t14);
			append(tr0, th2);
			append(th2, t15);
			append(tr0, t16);
			append(tr0, th3);
			append(th3, t17);
			append(table, t18);
			append(table, tr1);
			append(tr1, td0);
			append(td0, code0);
			append(code0, t19);
			append(tr1, t20);
			append(tr1, td1);
			append(td1, code1);
			append(code1, t21);
			append(tr1, t22);
			append(tr1, td2);
			append(td2, t23);
			append(tr1, t24);
			append(tr1, td3);
			append(td3, t25);
			append(section0, t26);
			append(section0, h31);
			append(h31, t27);
			append(section0, t28);
			append(section0, p1);
			append(p1, t29);
			append(p1, code2);
			append(code2, t30);
			append(p1, t31);
			append(section0, t32);
			mount_component(samplecode0, section0, null);
			append(section0, t33);
			append(section0, h32);
			append(h32, t34);
			append(section0, t35);
			mount_component(samplecode1, section0, null);
			append(section0, t36);
			mount_component(tip, section0, null);
			insert(target, t37, anchor);
			insert(target, section1, anchor);
			mount_component(heading1, section1, null);
			append(section1, t38);
			append(section1, p2);
			append(p2, t39);
			append(section1, t40);
			mount_component(demo0, section1, null);
			insert(target, t41, anchor);
			insert(target, section2, anchor);
			mount_component(heading2, section2, null);
			append(section2, t42);
			append(section2, p3);
			append(p3, t43);
			append(p3, a1);
			append(a1, t44);
			append(p3, t45);
			append(p3, code3);
			append(code3, t46);
			append(p3, t47);
			append(section2, t48);
			mount_component(demo1, section2, null);
			insert(target, t49, anchor);
			insert(target, section3, anchor);
			mount_component(heading3, section3, null);
			append(section3, t50);
			append(section3, p4);
			append(p4, t51);
			append(section3, t52);
			mount_component(samplecode2, section3, null);
			insert(target, t53, anchor);
			mount_component(examples, target, anchor);
			insert(target, t54, anchor);
			mount_component(relatedvalidators, target, anchor);
			insert(target, t55, anchor);
			insert(target, section4, anchor);
			append(section4, div);
			mount_component(prevbutton, div, null);
			append(div, t56);
			mount_component(nextbutton, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var heading0_changes = {};
			if (changed.$$scope) heading0_changes.$$scope = { changed, ctx };
			heading0.$set(heading0_changes);

			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);

			var heading1_changes = {};
			if (changed.$$scope) heading1_changes.$$scope = { changed, ctx };
			heading1.$set(heading1_changes);

			var heading2_changes = {};
			if (changed.$$scope) heading2_changes.$$scope = { changed, ctx };
			heading2.$set(heading2_changes);

			var heading3_changes = {};
			if (changed.$$scope) heading3_changes.$$scope = { changed, ctx };
			heading3.$set(heading3_changes);

			var prevbutton_changes = {};
			if (changed.$$scope) prevbutton_changes.$$scope = { changed, ctx };
			prevbutton.$set(prevbutton_changes);

			var nextbutton_changes = {};
			if (changed.$$scope) nextbutton_changes.$$scope = { changed, ctx };
			nextbutton.$set(nextbutton_changes);
		},

		i: function intro(local) {
			if (current) return;
			heading0.$$.fragment.i(local);

			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			heading1.$$.fragment.i(local);

			demo0.$$.fragment.i(local);

			heading2.$$.fragment.i(local);

			demo1.$$.fragment.i(local);

			heading3.$$.fragment.i(local);

			samplecode2.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			prevbutton.$$.fragment.i(local);

			nextbutton.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			heading0.$$.fragment.o(local);
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			heading1.$$.fragment.o(local);
			demo0.$$.fragment.o(local);
			heading2.$$.fragment.o(local);
			demo1.$$.fragment.o(local);
			heading3.$$.fragment.o(local);
			samplecode2.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
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

			heading0.$destroy();

			samplecode0.$destroy();

			samplecode1.$destroy();

			tip.$destroy();

			if (detaching) {
				detach(t37);
				detach(section1);
			}

			heading1.$destroy();

			demo0.$destroy();

			if (detaching) {
				detach(t41);
				detach(section2);
			}

			heading2.$destroy();

			demo1.$destroy();

			if (detaching) {
				detach(t49);
				detach(section3);
			}

			heading3.$destroy();

			samplecode2.$destroy();

			if (detaching) {
				detach(t53);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t54);
			}

			relatedvalidators.$destroy(detaching);

			if (detaching) {
				detach(t55);
				detach(section4);
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
			document.title = "FormValidation • notEmpty validator";
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
