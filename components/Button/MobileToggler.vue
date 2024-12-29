<script lang="ts" setup>
const isOpen = ref<boolean>(false);
</script>
<template>
  <div class="mobile-toggler-wrapper">
    <UButton
      @click="isOpen = true"
      icon="i-pajamas-hamburger"
      variant="outline"
      size="xl"
    />

    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
          },
        }"
      >
        <template #header>
          <div class="flex items-center justify-between pt-4">
            <div class="text-3xl font-semibold">Menu</div>
            <div class="flex items-center">
              <ButtonThemeToggler />
              <ButtonLangToggler />
              <UDivider icon="i-fluent-divider-tall-16-filled" size="xs" />
              <UButton
                icon="i-heroicons-x-mark-20-solid"
                variant="outline"
                size="xl"
                @click="isOpen = false"
              />
            </div>
          </div>
        </template>
        <ULink to="/" class="text-2xl font-semibold"> Home </ULink>
      </UCard>
    </UModal>
  </div>
</template>
<style lang="scss">
.mobile-toggler-wrapper {
  @apply hidden;

  @media (max-width: 1024px) {
    @apply block;
  }
}
</style>
