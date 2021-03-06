<svelte:head>
	<title>FormValidation • remote validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">remote validator</h1>
    <h2 class="f4 fw4 tc">Perform remote checking via Ajax request</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>crossDomain</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___cross-domain</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Set it to <code>true</code> if you want to have a cross domain request. By default, it's set to <code>false</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>data</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___data</code></td>
                <td class="pv2 ph3">Object or Function</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The data sent to remote URL. You don't need to use this option if there is only field, defined as field name, sent to the remote URL.</p>
                    <p class="lh-copy">If you want to use dynamic data, then use a callback as following:</p>
                    <SampleCode lang="javascript" code={`
data: function() {
    ...
    // Return an object
    return {
        key: value,
        otherKey: otherValue,
    };
}
`} />
                    <p class="lh-copy">When using <code>data-fv-remote___data</code> attribute, its value must be an encoded JSON string.</p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>headers</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___headers</code></td>
                <td class="pv2 ph3">Object</td>
                <td class="pv2 ph3">Additonal headers that will be sent with the request</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>name</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___name</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The name of field which need to validate</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>method</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___method</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The method used to send data to back-end. It can be <code>GET</code> (the default value) or <code>POST</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>url</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-remote___url</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The remote URL. If you want to use a dynamic URL, then use a callback as following:</p>
<SampleCode lang="javascript" code={`
url: function() {
    ...

    return 'the URL';
}
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>validKey</code></td>
                <td class="pv2 ph3"><code>data-fv-remote___valid-key</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The valid key. It's <code>valid</code> by default. This option is useful when connecting to external remote server or APIs provided by 3rd parties.</td>
            </tr>
        </table>
        <p class="lh-copy">The <code>crossDomain</code> and <code>validKey</code> options are mostly used when you need to connect to external API endpoint.</p>
        <p class="lh-copy">The remote URL has to return an encoded JSON of array containing the <code>valid</code> key (the key name can be changed by the <code>validKey</code> option):</p>
<SampleCode lang="javascript" code={`
{
    "valid": true
}
// or
{
    "valid": false
}
`} />

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import remote from 'formvalidation/dist/es6/validators/remote';

const result = remote().validate({
    value: ...,
    options: {
        crossDomain: ...,
        data: ...,
        headers: ...,
        message: ...,
        name: ...,
        method: ...,
        url: ...,
        validKey: ...,
    },
});
/*
result is a Promise object which can be resolved by an object of
{
    valid: true or false,
    message: The error message,
    meta: The additional data returned by server
}
or can be rejected by an object of
{
    valid: false,
}
*/
`} />
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">The following example shows how to use a remote back-end to check if a given username is already taken or not.</p>
<SampleCode lang="html" code={`
<form id="registrationForm">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Username</div>
            <div class="fl w-50">
                <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('registrationForm'),
        {
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        // The validator will create an Ajax request
                        // sending { username: 'its value' } to the back-end
                        remote: {
                            message: 'The username is not available',
                            method: 'POST',
                            url: '/path/to/backend/',
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
});
</script-tag>
`} />
        <p class="lh-copy">The back-end then will determine if the username is available or not, and finally returns a JSON <code>{@html `{ "valid": true }`}</code> or <code>{@html `{ "valid": false }`}</code>. The code bellow demonstrates a simple back-end written in PHP:</p>
<SampleCode lang="php" code={`
&lt;?php
// Get the username from request
$username = $_POST['username'];

// Check its existence (for example, execute a query from the database) ...
$isAvailable = true; // or false

// Finally, return a JSON
echo json_encode(array(
    'valid' => $isAvailable,
));
`} />
    </section>

    <section class="mv5">
        <Heading>Sending static data example</Heading>
        <p class="lh-copy">For example, there is same back-end for validating both username and email address. The back-end uses additional parameter named <code>type</code> to determine which field is going to be validated.</p>
<SampleCode lang="html" code={`
<form id="signupForm">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Username</div>
            <div class="fl w-50">
                <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>

    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Email</div>
            <div class="fl w-50">
                <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('signupForm'),
        {
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        // Send { username: 'its value', type: 'username' } to the back-end
                        remote: {
                            data: {
                                type: 'username',
                            },
                            message: 'The username is not available',
                            method: 'POST',
                            url: '/path/to/backend/',
                        }
                    }
                },
                email: {
                    message: 'The email address is not valid',
                    validators: {
                        // Send { email: 'its value', type: 'email' } to the back-end
                        remote: {
                            data: {
                                type: 'email',
                            },
                            message: 'The email is not available',
                            method: 'POST',
                            url: '/path/to/backend/',
                        }
                    }
                }
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
});
</script-tag>
`} />
        <p class="lh-copy">The code bellow demonstrates a simple back-end written in PHP:</p>
<SampleCode lang="php" code={`
&lt;?php   
// Determine which field you want to check its existence
$isAvailable = true;

switch ($_POST['type']) {
    case 'email':
        $email = $_POST['email'];
        // Check the email existence ...
        $isAvailable = true; // or false
        break;

    case 'username':
    default:
        $username = $_POST['username'];
        // Check the username existence ...
        $isAvailable = true; // or false
        break;
}

// Finally, return a JSON
echo json_encode(array(
    'valid' => $isAvailable,
));
`} />
    </section>

    <section class="mv5">
        <Heading>Sending dynamic data example</Heading>
        <p class="lh-copy">For instance, the registration form need to validate both the username and emails.</p>
<SampleCode lang="html" code={`
<form id="regForm">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Username</div>
            <div class="fl w-50">
                <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>

    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Email</div>
            <div class="fl w-50">
                <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>

    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Password</div>
            <div class="fl w-50">
                <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('regForm');
    FormValidation.formValidation(
        form,
        {
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        remote: {
                            url: '/path/to/backend/',
                            // Send { username: 'its value', email: 'its value' } to the back-end
                            data: function() {
                                return {
                                    email: form.querySelector('[name="email"]').value,
                                };
                            },
                            message: 'The username is not available',
                            type: 'POST'
                        }
                    }
                },
                email: {
                    validators: {
                        remote: {
                            url: '/path/to/backend/',
                            // Send { email: 'its value', username: 'its value' } to the back-end
                            data: function() {
                                return {
                                    email: form.querySelector('[name="username"]').value,
                                };
                            },
                            message: 'The email is not available',
                            type: 'POST'
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
});
</script-tag>
`} />
    </section>

    <section class="mv5">
        <Heading>Overriding name example</Heading>

        <p class="lh-copy">By default, it will be set as the name of field. You can override the <code>name</code> option by using the <code>data-fv-remote___name</code> attribute. Here are two cases which you might need to use this attribute.</p>

        <h3>Using different names for same field</h3>
        <p class="lh-copy">For example, the <span class="i">Sign up</span> and <span class="i">Profile</span> forms use the same back-end URL to validate the email address which is declared with different name.</p>
        <p class="lh-copy">In this case, use the same <code>data-fv-remote___name</code> attribute and the back-end will get the same data key.</p>
        <Tip heading="Note">Remember to use the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin to turn on the validator options with the equivalent HTML attributes</Tip>

<SampleCode lang="html" code={`
// In the signup form, the email address field is named as "login"
<form id="signForm" class="form-horizontal">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Email</div>
            <div class="fl w-50">
                <input type="text" name="login" data-fv-remote___name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>

// In the edit profile form, the email address field is named as "email"
<form id="profileForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-lg-3 control-label">Email</label>
        <div class="col-lg-5">
            <input type="text" class="form-control" name="email" data-fv-remote___name="email" />
        </div>
    </div>
</form>
`} />

        <h3>Using same backend for different fields</h3>
        <p class="lh-copy">Assume that the profile form asks you to update multiple email address (primary, secondary, for example). These emails will be validated by the same backend.</p>
        <p class="lh-copy">In this case, just use the same <code>data-fv-remote___name</code> attribute for these email address fields.</p>
<SampleCode lang="html" code={`
<form id="demoForm" class="form-horizontal">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Primary email</div>
            <div class="fl w-50">
                <input type="text" name="primary_email" data-fv-remote___name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>

    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">Secondary email</div>
            <div class="fl w-50">
                <input type="text" name="secondary_email" data-fv-remote___name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>
`} />
    </section>

    <Examples examples={[
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />

    <RelatedValidators validators={['callback', 'promise']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/regexp">regexp validator</PrevButton>
            <NextButton target="/guide/validators/rtn">rtn validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>
