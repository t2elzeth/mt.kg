class MethodsManager:
    methods: dict = dict()

    @classmethod
    def set_methods(cls, instance):
        for method_name, method_func in cls.methods.items():
            setattr(instance, method_name, method_func)

    def __init_subclass__(cls, **kwargs):
        methods = getattr(cls, "methods")
        if not methods:
            raise NotImplementedError("`methods` attribute must be implemented")

        return super().__init_subclass__(**kwargs)
