<template>
  <textarea
      class="input-field"
      :type="type"
      :placeholder="placeholder"
      v-model="v$.$model"
      :class="getInputFieldValidationClasses(v$)"
  ></textarea>
</template>

<script>
import {getInputFieldValidationClasses} from "@/utils/forms";

export default {
  name: "TextAreaField",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    v$field: Object,
    id: String
  },
  setup(props) {
    return {
      getInputFieldValidationClasses,
      v$: props.v$field
    };
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/vars";
@import "../../../assets/mixins";

textarea {
  @include input-default;

  width: 100%;
  height: 100%;

  @include feedback
}
</style>