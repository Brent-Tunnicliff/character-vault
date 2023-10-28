export class Input {
    type: InputType;

    constructor(type: InputType) {
        this.type = type;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.interfaceType(Input, {
            name: 'Input',
            description: 'Base user input type.',
            fields: (t) => ({
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });

        builder.enumType(InputType, {
            name: 'InputType',
            description: 'Types of input fields.',
        })

        InputCounter.register(builder);
        InputNumber.register(builder);
        InputReadOnly.register(builder);
        InputTextBlock.register(builder);
        InputTextField.register(builder);
    };
};

export enum InputType {
    COUNTER,
    NUMBER,
    READ_ONLY,
    TEXT_BLOCK,
    TEXT_FIELD,
};

export class InputCounter extends Input {
    maximum: number;
    minimum: number;
    value: number;

    constructor(maximum: number, minimum: number, value: number) {
        super(InputType.COUNTER);
        this.maximum = maximum;
        this.minimum = minimum;
        this.value = value;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.objectType(InputCounter, {
            name: 'InputCounter',
            description: 'Counter user input type.',
            interfaces: [Input],
            isTypeOf: (value) => value instanceof InputCounter,
            fields: (t) => ({
                maximum: t.exposeInt('maximum', {}),
                minimum: t.exposeInt('minimum', {}),
                value: t.exposeInt('value', {}),
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });
    };
};

export class InputNumber extends Input {
    value: number;

    constructor(value: number) {
        super(InputType.NUMBER);
        this.value = value;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.objectType(InputNumber, {
            name: 'InputNumber',
            description: 'Number user input type.',
            interfaces: [Input],
            isTypeOf: (value) => value instanceof InputNumber,
            fields: (t) => ({
                value: t.exposeInt('value', {}),
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });
    };
};

export class InputReadOnly extends Input {
    constructor() {
        super(InputType.READ_ONLY);
    }

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.objectType(InputReadOnly, {
            name: 'InputReadOnly',
            description: 'Read only type.',
            interfaces: [Input],
            isTypeOf: (value) => value instanceof InputReadOnly,
            fields: (t) => ({
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });
    };
};

export class InputTextBlock extends Input {
    value: string;

    constructor(value: string) {
        super(InputType.TEXT_BLOCK);
        this.value = value;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.objectType(InputTextBlock, {
            name: 'InputTextBlock',
            description: 'Multiline text user input type.',
            interfaces: [Input],
            isTypeOf: (value) => value instanceof InputTextBlock,
            fields: (t) => ({
                value: t.exposeString('value', {}),
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });
    };
};

export class InputTextField extends Input {
    value: string;

    constructor(id: string, value: string) {
        super(InputType.TEXT_FIELD);
        this.value = value;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>) {
        builder.objectType(InputTextField, {
            name: 'InputTextField',
            description: 'Single line text user input type.',
            interfaces: [Input],
            isTypeOf: (value) => value instanceof InputTextField,
            fields: (t) => ({
                value: t.exposeString('value', {}),
                type: t.expose('type', {
                    type: InputType
                }),
            }),
        });
    };
};
