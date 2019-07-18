import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, A as attr, o as insert, p as append, D as add_binding_callback } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import './chunk.04c942d0.js';
import { a as ReceiveMessage } from './chunk.75c83501.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import './chunk.17752e4f.js';
import './chunk.d6ef6b92.js';
import { a as BootstrapLayout, b as Bootstrap } from './chunk.c31a6f6d.js';
import { a as ismn } from './chunk.2aa68650.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">ISMN</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="ismn" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<!-- 
You have to include the full version of FormValidation which contains all validators
including the ismn validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ismn: {
                    validators: {
                        ismn: {
                            message: 'The value is not valid ISMN'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/validators/ismn/basic/Bootstrap.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/validators/ismn/basic/Bootstrap.svelte";

// (2:4) <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/ismn/basic" on:received={receive}>
function create_default_slot_1(ctx) {
	var form, div1, label, t0, t1, div0, input;

	return {
		c: function create() {
			form = element("form");
			div1 = element("div");
			label = element("label");
			t0 = text("ISMN");
			t1 = space();
			div0 = element("div");
			input = element("input");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true }, false);
			var form_nodes = children(form);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			label = claim_element(div1_nodes, "LABEL", { class: true }, false);
			var label_nodes = children(label);

			t0 = claim_text(label_nodes, "ISMN");
			label_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n                ");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input = claim_element(div0_nodes, "INPUT", { type: true, class: true, name: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			label.className = "col-sm-3 col-form-label";
			add_location(label, file, 4, 16, 248);
			attr(input, "type", "text");
			input.className = "form-control";
			input.name = "ismn";
			add_location(input, file, 6, 20, 359);
			div0.className = "col-sm-5";
			add_location(div0, file, 5, 16, 316);
			div1.className = "form-group row";
			add_location(div1, file, 3, 12, 203);
			form.id = "demoForm";
			form.method = "POST";
			add_location(form, file, 2, 8, 156);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div1);
			append(div1, label);
			append(label, t0);
			append(div1, t1);
			append(div1, div0);
			append(div0, input);
			add_binding_callback(() => ctx.input_binding(input, null));
		},

		p: function update(changed, ctx) {
			if (changed.items) {
				ctx.input_binding(null, input);
				ctx.input_binding(input, null);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}

			ctx.input_binding(null, input);
		}
	};
}

// (1:0) <BootstrapLayout onLoaded={onLoaded}>
function create_default_slot(ctx) {
	var current;

	var receivemessage = new ReceiveMessage({
		props: {
		channel: "SAMPLE_FIELD_VALUE",
		sender: "/guide/validators/ismn/basic",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});
	receivemessage.$on("received", ctx.receive);

	return {
		c: function create() {
			receivemessage.$$.fragment.c();
		},

		l: function claim(nodes) {
			receivemessage.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(receivemessage, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var receivemessage_changes = {};
			if (changed.$$scope || changed.inputEle) receivemessage_changes.$$scope = { changed, ctx };
			receivemessage.$set(receivemessage_changes);
		},

		i: function intro(local) {
			if (current) return;
			receivemessage.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			receivemessage.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			receivemessage.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var bootstraplayout = new BootstrapLayout({
		props: {
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			bootstraplayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			bootstraplayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(bootstraplayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var bootstraplayout_changes = {};
			if (changed.onLoaded) bootstraplayout_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope || changed.inputEle) bootstraplayout_changes.$$scope = { changed, ctx };
			bootstraplayout.$set(bootstraplayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			bootstraplayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bootstraplayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			bootstraplayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v; $$invalidate('inputEle', inputEle);

    if (fv) {
        fv.revalidateField('ismn').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/ismn/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            ismn: {
                validators: {
                    ismn: {
                        message: 'The value is not valid ISMN'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/ismn/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('ismn', ismn));
};

onDestroy(() => {
    fv && fv.destroy();
});

	function input_binding($$node, check) {
		inputEle = $$node;
		$$invalidate('inputEle', inputEle);
	}

	return {
		inputEle,
		receive,
		onLoaded,
		input_binding
	};
}

class Bootstrap_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Bootstrap_1;
