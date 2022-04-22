import { FormContainer } from "../Form/containers"
import { InfoContainer } from "../Info/containers"

export function MainLayout() {
    return(
        <div>
            <InfoContainer />
            <FormContainer />
        </div>
    )
}