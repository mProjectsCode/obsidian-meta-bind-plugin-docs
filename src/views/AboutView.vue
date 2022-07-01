<template>
    <div class="content">
        <h1>Test</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, luctus quis erat iaculis, tempus lacinia libero. Praesent vel lorem leo. Proin viverra ex at urna eleifend accumsan. Nam et turpis sed leo eleifend semper. Vivamus nisl odio, molestie sed commodo eu, pulvinar id lectus. Nullam urna elit, euismod quis posuere at, sodales vitae massa. Mauris gravida laoreet semper. Morbi bibendum sapien ut varius blandit. Maecenas mauris diam, interdum ut placerat et, ultricies in lacus. Quisque congue erat id dui maximus porttitor. Phasellus id leo quis erat commodo euismod. Donec elit felis, posuere quis arcu eu, condimentum viverra nisi.
        </p>
        <h2 id="heading 1">Test 3</h2>
        <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus molestie vel mi vestibulum porttitor. Sed accumsan sodales quam ut gravida. Donec suscipit interdum mi, id rhoncus nisi vestibulum eu. Donec condimentum nisi non sapien rutrum, in convallis velit sollicitudin. Aliquam erat volutpat. Sed viverra posuere eros, non tincidunt enim auctor nec. Morbi eget tortor tempus, vulputate tortor nec, mollis sem. Aliquam eleifend nunc sed imperdiet vestibulum. Etiam vehicula laoreet viverra.
        </p>
        <p>
            Cras ornare suscipit ligula, id dictum nibh malesuada egestas. Curabitur at pellentesque turpis. Fusce consectetur nisl id lorem hendrerit porttitor. Aenean vehicula blandit viverra. Vestibulum auctor vehicula luctus. Sed sodales, augue id aliquam lobortis, nibh dui maximus augue, eu placerat arcu nunc sit amet mauris. Vestibulum euismod risus in mattis dignissim. Aliquam interdum magna id purus malesuada efficitur.
        </p>
        <h2 id="heading 2">Test 2</h2>
        <callout-component header="Test callout 1" calloutType="info">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <callout-component header="Test callout 1" calloutType="success">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <callout-component header="Test callout 1" calloutType="warning">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <callout-component header="Test callout 1" calloutType="danger">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <callout-component header="Test callout 1" calloutType="error">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <callout-component header="Test callout 1" calloutType="quote">
            Aenean sodales elit vel consectetur sodales.
        </callout-component>
        <p>
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. <code class="inline">Donec ornare ligula leo.</code> Nam vitae pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam. Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit amet odio quis, porta bibendum ex.
        </p>
        <code-block-component><pre>Aenean sodales elit vel consectetur sodales.
Nam id urna vulputate, lacinia lorem quis, pharetra sem.</pre></code-block-component>

        <p>
            Aenean sodales elit vel consectetur sodales. Nam id urna vulputate, lacinia lorem quis, pharetra sem. Pellentesque scelerisque sed ante vitae aliquam. Nunc pulvinar odio at ligula facilisis, id ultricies lacus consectetur. Etiam condimentum consequat est, eu consectetur tortor malesuada vel. Donec faucibus diam eu vestibulum interdum. Ut id lobortis est.
        </p>
        <p>
            Quisque et urna quis lectus ullamcorper viverra eget vitae nulla. Donec ornare ligula leo. Nam vitae pharetra massa, quis fringilla elit. Nunc facilisis eros dignissim, elementum quam in, iaculis magna. Duis tristique, mauris vitae ultricies tincidunt, turpis orci pulvinar libero, et ultricies neque sapien vel eros. Ut fringilla turpis non rutrum rutrum. Donec vel quam vitae magna molestie cursus et sit amet quam. Sed fringilla a ex sed molestie. Donec ultricies et neque vitae sollicitudin. Nam magna nibh, ultricies sit amet odio quis, porta bibendum ex.
        </p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CalloutComponent from '@/components/CalloutComponent.vue';
import CodeBlockComponent from '@/components/CodeBlockComponent.vue';

@Options({
    name: 'AboutView',

    components: {CodeBlockComponent, CalloutComponent},
})
export default class AboutView extends Vue {
}
</script>

<style>
</style>