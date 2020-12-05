<template>
  <div v-for="validator in validators" :key="validator.name">
    <small
        class="invalid-feedback"
        v-if="v$.$dirty && v$[validator.name].$invalid"
    >
      {{ validator.message }}
    </small>
  </div>
  <small class="valid-feedback" v-if="v$.$dirty && !v$.$invalid">
    Все замечательно!
  </small>
</template>

<script>
import {messages} from "@/utils/validation";

export default {
  name: "ValidationMessages",
  props: {
    v$field: {
      type: Object,
      required: true
    },
    fieldName: String,
  },
  setup(props) {
    return {
      v$: props.v$field,
      validators: messages[props.fieldName]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/vars";

.invalid-feedback {
  color: red;
}

.valid-feedback {
  color: $yellow;
}
</style>
