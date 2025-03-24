<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";

// Définition des types pour les props
const props = withDefaults(
    defineProps<{
        id?: string;
        open?: boolean;
        placement?: "top" | "middle" | "bottom" | "start" | "end";
        backdropClose?: boolean;
    }>(),
    {
        id: undefined,
        open: false,
        placement: "middle",
        backdropClose: true
    }
);

const dialogRef = ref<HTMLDialogElement | null>(null);

const placementClass = computed(() => {
    switch (props.placement) {
        case "top":
            return "modal-top";
        case "middle":
            return "modal-middle";
        case "bottom":
            return "modal-bottom";
        case "start":
            return "modal-start";
        case "end":
            return "modal-end";
        default:
            return "";
    }
});

// Méthodes pour contrôler le modal
const showModal = () => {
    if (dialogRef.value) {
        dialogRef.value.showModal();
    }
};

const closeModal = () => {
    if (dialogRef.value) {
        dialogRef.value.close();
    }
};

// Exposer les méthodes pour les utiliser depuis le parent
defineExpose({
    showModal,
    closeModal
});

onMounted(() => {
    if (props.open && dialogRef.value) {
        showModal();
    }
});

watch(() => props.open, (newValue: boolean) => {
    if (newValue && dialogRef.value) {
        showModal();
    } else if (!newValue && dialogRef.value) {
        closeModal();
    }
});
</script>

<template>
    <dialog ref="dialogRef" :id="id" :class="['modal', placementClass]">
        <div class="modal-box">
            <slot></slot>
            <slot name="actions" class="modal-action">
            </slot>
        </div>
        <form v-if="backdropClose" method="dialog" class="modal-backdrop">
            <button>Close</button>
        </form>
    </dialog>
</template>