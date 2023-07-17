import { Cognito, StackContext } from "sst/constructs";
import { DateTimeAttribute } from "aws-cdk-lib/aws-cognito";

export function Auth ({ stack }: StackContext) {
    const auth = new Cognito(stack, "Auth", {
        login: ["email", "phone", "username", "preferredUsername"],
        cdk: {
            userPool: {
                customAttributes: {
                    timestamp: new DateTimeAttribute(),
                },
            },
        },
        identityPoolFederation: {
            // TODO: Add the Apple and Google auth details.
            apple: { servicesId: "<<value>>" },
            google: {
              clientId:
                "<<value>>",
            },
          },
    });

    return {
        auth
    };
};
