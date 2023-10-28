import { Input } from "./input"

export class Field {
    input: Input;
    name: string;

    constructor(input: Input, name: string) {
        this.input = input;
        this.name = name;
    };

    static register(builder: PothosSchemaTypes.SchemaBuilder<PothosSchemaTypes.ExtendDefaultTypes<{}>>): void {
        builder.objectType(Field, {
            name: 'Field',
            description: 'Character sheet field.',
            fields: (t) => ({
                input: t.expose('input', {
                    type: Input
                }),
                name: t.exposeString('name', {})
            }),
        });
    };
};
