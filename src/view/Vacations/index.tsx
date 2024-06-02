import { createMessage } from "./logic";

interface Props {
  available: boolean;
}

export function Vacation({ available }: Props) {
	return <h1>{createMessage(available)}</h1>
}

// export const Vacation = ({ available }: Props) => (
//   <h1>{createMessage(available)}</h1>
// );
