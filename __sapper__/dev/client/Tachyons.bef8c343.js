import { a as SvelteComponentDev, b as init, c as safe_not_equal, t as mount_component, N as onDestroy, h as element, i as text, g as space, k as claim_element, l as children, j as claim_text, m as detach, n as add_location, F as set_style, o as insert, p as append } from './chunk.989912da.js';
import { b as formValidation } from './chunk.b786f426.js';
import { c as Trigger } from './chunk.fb19edaf.js';
import { b as Icon } from './chunk.79c24606.js';
import { a as Tachyons } from './chunk.2bbbb746.js';
import './chunk.04c942d0.js';
import { a as DemoFrame } from './chunk.b05da373.js';
import { a as ResourceLoader } from './chunk.17752e4f.js';
import { a as TachyonsLayout } from './chunk.35ee9e13.js';

var sampleCode = `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-20 pa2">Comment</div>
                <div class="fl w-75">
                    <textarea style="height: 200px;"name="comment" class="input-reset ba b--black-20 pa2 mb2 db w-100"></textarea>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-20 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/tinymce.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                comment: {
                    validators: {
                        callback: {
                            message: 'The comment must be between 5 and 200 characters long',
                            callback: function(value) {
                                // Get the plain text without HTML
                                const text = tinyMCE.activeEditor.getContent({
                                    format: 'text'
                                });

                                return text.length <= 200 && text.length >= 5;
                            }
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    // See https://www.tinymce.com/docs/configure/editor-appearance/
    tinymce.init({
        selector: 'textarea',
        branding: false,
        menubar: false,
        setup: function(editor) {
            editor.on('keyup', function() {
                // Revalidate the comment field
                fv.revalidateField('comment');
            });
        }
    });
});
</script-tag>
</body>
</html>
`;

/* src/routes/guide/examples/integrating-with-tinymce/Tachyons.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/integrating-with-tinymce/Tachyons.svelte";

// (2:4) <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/tinymce.min.js']} onLoaded={onLoaded}>
function create_default_slot_1(ctx) {
	var form, div3, div2, div0, t0, t1, div1, textarea;

	return {
		c: function create() {
			form = element("form");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = text("Comment");
			t1 = space();
			div1 = element("div");
			textarea = element("textarea");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { id: true, method: true, style: true }, false);
			var form_nodes = children(form);

			div3 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, "Comment");
			div0_nodes.forEach(detach);
			t1 = claim_text(div2_nodes, "\n                    ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			textarea = claim_element(div1_nodes, "TEXTAREA", { style: true, name: true, class: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			form_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "fl w-20 pa2";
			add_location(div0, file, 5, 20, 296);
			set_style(textarea, "height", "200px");
			textarea.name = "comment";
			textarea.className = "input-reset ba b--black-20 pa2 mb2 db w-100";
			add_location(textarea, file, 7, 24, 401);
			div1.className = "fl w-75";
			add_location(div1, file, 6, 20, 355);
			div2.className = "fl w-100";
			add_location(div2, file, 4, 16, 253);
			div3.className = "cf mb2";
			add_location(div3, file, 3, 12, 216);
			form.id = "demoForm";
			form.method = "post";
			set_style(form, "height", "290px");
			add_location(form, file, 2, 8, 146);
		},

		m: function mount(target, anchor) {
			insert(target, form, anchor);
			append(form, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, textarea);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(form);
			}
		}
	};
}

// (1:0) <TachyonsLayout>
function create_default_slot(ctx) {
	var current;

	var resourceloader = new ResourceLoader({
		props: {
		urls: ['https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/tinymce.min.js'],
		onLoaded: ctx.onLoaded,
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			resourceloader.$$.fragment.c();
		},

		l: function claim(nodes) {
			resourceloader.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(resourceloader, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var resourceloader_changes = {};
			if (changed.onLoaded) resourceloader_changes.onLoaded = ctx.onLoaded;
			if (changed.$$scope) resourceloader_changes.$$scope = { changed, ctx };
			resourceloader.$set(resourceloader_changes);
		},

		i: function intro(local) {
			if (current) return;
			resourceloader.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			resourceloader.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			resourceloader.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var current;

	var tachyonslayout = new TachyonsLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			tachyonslayout.$$.fragment.c();
		},

		l: function claim(nodes) {
			tachyonslayout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(tachyonslayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tachyonslayout_changes = {};
			if (changed.$$scope) tachyonslayout_changes.$$scope = { changed, ctx };
			tachyonslayout.$set(tachyonslayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			tachyonslayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			tachyonslayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			tachyonslayout.$destroy(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

let fv;

const onLoaded = () => {
    $$invalidate('fv', fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            comment: {
                validators: {
                    callback: {
                        message: 'The comment must be between 5 and 200 characters long',
                        callback: (value) => {
                            // Get the plain text without HTML
                            const text = tinyMCE.activeEditor.getContent({
                                format: 'text'
                            });

                            return text.length <= 200 && text.length >= 5;
                        }
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-tinymce/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }));

    // See https://www.tinymce.com/docs/configure/editor-appearance/
    tinymce.init({
        selector: 'textarea',
        branding: false,
        menubar: false,
        setup: (editor) => {
            editor.on('keyup', () => {
                // Revalidate the comment field
                fv.revalidateField('comment');
            });
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});

	return { onLoaded };
}

class Tachyons_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Tachyons_1;
