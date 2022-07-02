<template>
    <div class="content">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <hr/>

        <callout-component calloutType="info" header="Test callout Info">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>
        <callout-component calloutType="success" header="Test callout Success">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>
        <callout-component calloutType="warning" header="Test callout Warning">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>
        <callout-component calloutType="danger" header="Test callout Danger">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>
        <callout-component calloutType="error" header="Test callout Error">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>
        <callout-component calloutType="quote" header="Test callout Quote">
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae
            pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis
            tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel
            eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam.
            Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit
            amet odio quis, porta bibendum ex.
        </callout-component>

        <hr/>

        Link test <a href="#">Link</a> link test

        <hr/>

        <p>Inline code block test <code class="inline">some code...</code> inline code block test</p>
        <br/>
        <p>Code block test</p>
        <code-block-component><pre>h1, h2, h3, h4, h5, h6 {
    color:        var(--text-important);
    margin-block: 2em 0.5em;
}</pre>
        </code-block-component>

        <hr/>

        <h1>Full Article Test</h1>
        <p>Aenean sodales elit vel consectetur sodales. Nam id urna vulputate, lacinia lorem quis, pharetra sem.
            Pellentesque scelerisque sed ante vitae aliquam. Nunc pulvinar odio at ligula facilisis, id ultricies lacus
            consectetur. Etiam condimentum consequat est, eu consectetur tortor malesuada vel. Donec faucibus diam eu
            vestibulum interdum. Ut id lobortis est.</p>
        <callout-component calloutType="info" header="Test callout Info">
            Stacking callouts
            <callout-component calloutType="success" header="Test callout Success">
                <callout-component calloutType="warning" header="Test callout Warning">
                    <callout-component calloutType="danger" header="Test callout Danger">
                        Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam
                        vitae pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in,
                        iaculis magna. Duis tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et
                        ultricies neque sapien vel eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae
                        magna molestie cursus et sit amet quam. Sed fringilla a ex sed molestie. Donec ultricies et
                        neque vitae sollicitudin. Nam magna nibh, ultricies sit amet odio quis, porta bibendum ex.
                    </callout-component>
                    <callout-component calloutType="error" header="Test callout Error">
                        Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam
                        vitae pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in,
                        iaculis magna. Duis tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et
                        ultricies neque sapien vel eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae
                        magna molestie cursus et sit amet quam. Sed fringilla a ex sed molestie. Donec ultricies et
                        neque vitae sollicitudin. Nam magna nibh, ultricies sit amet odio quis, porta bibendum ex.
                    </callout-component>
                </callout-component>
            </callout-component>
        </callout-component>
        <p>Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae pharetra
            massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis tristique,
            mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel eros. Ut
            fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam. Sed
            fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit amet
            odio quis, porta bibendum ex.</p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'TestView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class TestView extends Vue {
}
</script>

<style>
</style>