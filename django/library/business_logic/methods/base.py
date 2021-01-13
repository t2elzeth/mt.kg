from abc import ABC


class BaseMethod(ABC):
    def __init__(self, request, *args, **kwargs):
        self.request = request
        for arg in args:
            setattr(self, self.__prettify_attribute(arg), arg)

        for k, v in kwargs.items():
            setattr(self, self.__prettify_attribute(k), v)

    @staticmethod
    def __prettify_attribute(value: str):
        return value.lower().replace(" ", "_")

    def main(self):
        raise NotImplementedError("main() is not implemented yet")

    def __call__(self):
        return self.main()

    def get_url_variable(self, variable_name):
        # TODO: Force users to access url vars via this method
        return getattr(self, variable_name)