<template>
  <div class="form-field">
    <InputField
      :type="inputType"
      :placeholder="placeholder"
      :v$field="v$"
      v-if="fieldType === 'input'"
    />
    <TextAreaField
    :type="inputType"
    :placeholder="placeholder"
    :v$field="v$"
    :id="formField"
    v-else-if="fieldType === 'textarea'"
    />
    <ValidationMessages :v$field="v$" :field-name="formField" />
  </div>
</template>

<script>
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import ValidationMessages from "@/components/form/ValidationMessages";

export default {
  name: "FormField",
  components: {
    InputField,
    ValidationMessages,
    TextAreaField
  },
  props: {
    v$field: Object,
    placeholder: String,
    inputType: String,
    fieldType: {
      type: String,
      default: 'input'
    },
    formField: String,
  },
  setup(props) {
    return {
      v$: props.v$field,
    };
  }
};
</script>

<style scoped lang="scss">
.form-field {
  text-align: left;

  height: 100%;
  width: 100%;
}

</style>
