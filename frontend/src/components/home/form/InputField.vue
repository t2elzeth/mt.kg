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
    id: String
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
.input-default {
  background: rgba(112, 112, 112, 0.4);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;

  padding-left: 10px;
}

.input-field {
  @extend .input-default;

  width: 420px;
  height: 50px;

  &.valid {
    background: #00e000;
  }

  &.invalid {
    background: #bf0000;

  }
}
</style>
