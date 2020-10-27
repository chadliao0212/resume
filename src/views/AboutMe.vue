<template>
    <div id="view-about">
        <v-tabs
            v-model="tabs"
            style="margin-top: 56px"
            background-color="transparent"
            color="basil"
            grow
            >
            <v-tab>
                基本資料
            </v-tab>
            <v-tab>
                經歷
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item>
                <v-card
                color="basil"
                flat
                >
                <v-card-text>123123</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
export default {
    data: () => ({
        tabs: null
    })
}
</script>