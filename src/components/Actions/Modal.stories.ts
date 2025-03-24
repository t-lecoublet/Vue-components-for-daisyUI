import type { Meta, StoryObj } from "@storybook/vue3";
import Modal from "@/components/Actions/Modal.vue";
import Button from "@/components/Actions/Button.vue";
import { ref } from "vue";

const meta: Meta<typeof Modal> = {
    title: "Components/Actions/Modal",
    component: Modal,
    argTypes: {
        id: { control: "text" },
        open: { control: "boolean" },
        placement: {
            control: { type: "select" },
            options: ["top", "middle", "bottom", "start", "end"],
        },
        backdropClose: { control: "boolean" }
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const defaultTplStr = `
<div>
  <Button @click="showModal">Ouvrir le modal</Button>
  <Modal ref="modalRef" v-bind="args">
    <h3 class="font-bold text-lg">Bonjour!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
  </Modal>
</div>
`;

const withActionsTplStr = `
<div>
  <Button @click="showModal">Ouvrir le modal avec actions</Button>
  <Modal ref="modalRef" v-bind="args">
    <h3 class="font-bold text-lg">Confirmation</h3>
    <p class="py-4">Êtes-vous sûr de vouloir continuer?</p>
    <template #actions>
      <div class="modal-action">
        <Button @click="closeModal" variant="error">Annuler</Button>
        <Button @click="closeModal" variant="success">Confirmer</Button>
      </div>
    </template>
  </Modal>
</div>
`;

const placementsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-4">
  <div>
    <Button @click="showTopModal">Top</Button>
    <Modal ref="topModalRef" v-bind="args" placement="top">
      <h3 class="font-bold text-lg">Modal Top</h3>
      <p class="py-4">Ce modal s'affiche en haut de l'écran</p>
    </Modal>
  </div>
  
  <div>
    <Button @click="showMiddleModal">Middle</Button>
    <Modal ref="middleModalRef" v-bind="args" placement="middle">
      <h3 class="font-bold text-lg">Modal Middle</h3>
      <p class="py-4">Ce modal s'affiche au milieu de l'écran</p>
    </Modal>
  </div>
  
  <div>
    <Button @click="showBottomModal">Bottom</Button>
    <Modal ref="bottomModalRef" v-bind="args" placement="bottom">
      <h3 class="font-bold text-lg">Modal Bottom</h3>
      <p class="py-4">Ce modal s'affiche en bas de l'écran</p>
    </Modal>
  </div>
  
  <div>
    <Button @click="showStartModal">Start</Button>
    <Modal ref="startModalRef" v-bind="args" placement="start">
      <h3 class="font-bold text-lg">Modal Start</h3>
      <p class="py-4">Ce modal s'affiche au début (gauche) de l'écran</p>
    </Modal>
  </div>
  
  <div>
    <Button @click="showEndModal">End</Button>
    <Modal ref="endModalRef" v-bind="args" placement="end">
      <h3 class="font-bold text-lg">Modal End</h3>
      <p class="py-4">Ce modal s'affiche à la fin (droite) de l'écran</p>
    </Modal>
  </div>
</div>
`;

// DEFAULT MODAL

const TemplateModal: Story = {
    render: (args) => ({
        components: { Modal, Button },
        setup() {
            const modalRef = ref<InstanceType<typeof Modal> | null>(null);

            const showModal = () => {
                if (modalRef.value) {
                    modalRef.value.showModal();
                }
            };

            return { args, modalRef, showModal };
        },
        template: defaultTplStr,
    }),
    args: {},
};
export const DefaultModal = { ...TemplateModal };

// MODAL WITH ACTIONS

const ModalWithActionsTemplate: Story = {
    render: (args) => ({
        components: { Modal, Button },
        setup() {
            const modalRef = ref<InstanceType<typeof Modal> | null>(null);

            const showModal = () => {
                modalRef.value?.showModal();
            };

            const closeModal = () => {
                if (modalRef.value) {
                    modalRef.value.closeModal();
                }
            };

            return { args, modalRef, showModal, closeModal };
        },
        template: withActionsTplStr,
    }),
    args: {},
};
export const ModalWithActions = { ...ModalWithActionsTemplate };

// MODAL PLACEMENTS

const ModalPlacementsTemplate: Story = {
    render: (args) => ({
        components: { Modal, Button },
        setup() {
            const topModalRef = ref<InstanceType<typeof Modal> | null>(null);
            const middleModalRef = ref<InstanceType<typeof Modal> | null>(null);
            const bottomModalRef = ref<InstanceType<typeof Modal> | null>(null);
            const startModalRef = ref<InstanceType<typeof Modal> | null>(null);
            const endModalRef = ref<InstanceType<typeof Modal> | null>(null);

            const showTopModal = () => {
                topModalRef.value?.showModal();
            };

            const showMiddleModal = () => {
                middleModalRef.value?.showModal();
            };

            const showBottomModal = () => {
                bottomModalRef.value?.showModal();
            };

            const showStartModal = () => {
                startModalRef.value?.showModal();
            };

            const showEndModal = () => {
                endModalRef.value?.showModal();
            };

            return {
                args,
                topModalRef,
                middleModalRef,
                bottomModalRef,
                startModalRef,
                endModalRef,
                showTopModal,
                showMiddleModal,
                showBottomModal,
                showStartModal,
                showEndModal
            };
        },
        template: placementsTplStr,
    }),
    args: {},
};
export const ModalPlacements = { ...ModalPlacementsTemplate }; 