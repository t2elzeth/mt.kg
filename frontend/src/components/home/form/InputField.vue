<template>
  <input
      class="input-field"
      :type="type"
      :placeholder="placeholder"
      v-model="v$.$model"
      :class="getInputFieldValidationClasses(v$)"
  >
</template>

<script>
import {getInputFieldValidationClasses} from "@/utils/forms";

export default {
  name: "InputField",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    v$field: Object,
  },
  setup(props) {
    return {
      getInputFieldValidationClasses,
      v$: props.v$field
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/vars";
@import "../../../assets/mixins";

.input-field {
  @include input-default;

  width: 420px;
  height: 50px;

  @include feedback

}
</style>
