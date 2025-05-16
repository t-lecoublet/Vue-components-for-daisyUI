<script setup>
import Alert from "@/components/Feedback/Alert.vue";
import Badge from "@/components/DataDisplay/Badge.vue";
import Button from "@/components/Actions/Button.vue";
import LabelInputValidator from "@/components/DataInput/LabelInputValidator.vue";
</script>

<template>
  <div>
    <h1 class="m-4 text-2xl text-neutral-500">
      Projet de librairies de composants DaisyUi VueJS 3.0
    </h1>
    <Button class="m-4" variant="primary" size="lg">Follow me !</Button>
    <Alert class="m-4" variant="success" :dismissible="true">
      <slot> Ceci est une alerte de type success. </slot>
    </Alert>
    <Badge variant="warning" class="m-4" size="xl" :icon="true"
      >Un super badge</Badge
    >
    <span class="badge badge-success badge-dash m-4">Un badge dash</span>

    <LabelInputValidator
      type="input"
      pattern="[A-Za-z][A-Za-z0-9\-]*"
      minlength="3"
      maxlength="30"
      placeholder="Username"
      required
      title="Only letters, numbers or dash"
    >
      <template #before>
        <!-- <UserIcon class="h-[1em] opacity-50" /> -->
      </template>
      <template #hint>
        Must be 3 to 30 characters
        <br />containing only letters, numbers or dash
      </template>
    </LabelInputValidator>
  </div>
</template>

<style scoped></style>
