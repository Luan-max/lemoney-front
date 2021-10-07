export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as FormSelectInput } from '../../components/form/SelectInput.vue'
export { default as FormTextAreaInput } from '../../components/form/TextAreaInput.vue'
export { default as FormTextInput } from '../../components/form/TextInput.vue'
export { default as SharedLkpBtn } from '../../components/shared/LkpBtn.vue'
export { default as SharedLkpCol } from '../../components/shared/LkpCol.vue'
export { default as SharedLkpDeleteConfirmationAlert } from '../../components/shared/LkpDeleteConfirmationAlert.vue'
export { default as SharedLkpForm } from '../../components/shared/LkpForm.vue'
export { default as SharedLkpHeader } from '../../components/shared/LkpHeader.vue'
export { default as SharedLkpInput } from '../../components/shared/LkpInput.vue'
export { default as SharedLkpRow } from '../../components/shared/LkpRow.vue'
export { default as SharedLkpSelect } from '../../components/shared/LkpSelect.vue'
export { default as SharedLkpSideMenu } from '../../components/shared/LkpSideMenu.vue'
export { default as SharedLkpSideMenuValidate } from '../../components/shared/LkpSideMenuValidate.vue'
export { default as SharedLkpSnackbar } from '../../components/shared/LkpSnackbar.vue'
export { default as SharedLkpTextField } from '../../components/shared/LkpTextField.vue'
export { default as OffersFilter } from '../../components/offers/Filter.vue'
export { default as OffersLkpConfirmOrder } from '../../components/offers/LkpConfirmOrder.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
