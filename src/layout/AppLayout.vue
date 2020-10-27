<template>
    <div id="app-layout">
        <app-bar />
        <app-page />
        <app-footer />
    </div>
</template>
<script>
import AppBar from '@/layout/AppBar';
import AppPage from '@/layout/AppPage';
import AppFooter from '@/layout/AppFooter';

export default {
    components: {
        'app-bar': AppBar,
        'app-page': AppPage,
        'app-footer': AppFooter
    }
}
</script>