//-------------------------------------
//   Function Components
//-------------------------------------

// interface Props {
//   action: string;
//   subject: string;
// }

// export function Card(props: Props) {
//   const { action, subject } = props;

//   return (
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         you {action} {subject}
//       </h2>
//     </div>
//   );
// }
// export default Card;

//-------------------------
//   Inline destructure
//--------------------------
interface Props {
  action: string;
  subject: string;
}

function Card({ action, subject }: Props) {
  return (
    <div className="card">
      <h1 className="headline">I am a Card</h1>
      <h2 className="paragraph">
        i {action} {subject}
      </h2>
    </div>
  );
}
export default Card;

//---------------------------------
//   Minimal function component
//---------------------------------
// interface Props {
//   action: string;
//   subject: string;
// }

// const Card = ({ action, subject }: Props) => (
//   <div className="card">
//     <h1 className="headline">I am a Card</h1>
//     <h2 className="paragraph">
//       i {action} {subject}
//     </h2>
//   </div>
// );

// export default Card;
//-----------------------------------------
//   JSX possible outputs
//   container tag / React.fragment
//   / string / null / Array of JSX blocks
//-----------------------------------------
// interface Props {
//   action: string;
//   subject: string;
// }
// const Card = ({ action, subject }: Props) => {
//   // return `you ${action} ${subject}`
//   return [
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         i {action} {subject}
//       </h2>
//     </div>,
//     <div className="card">
//       <h1 className="headline">I am a Card</h1>
//       <h2 className="paragraph">
//         i {action} {subject}
//       </h2>
//     </div>,
//   ];
// };

// export default Card;

//---------------------------------
//   Spread objects into props
//---------------------------------
// import Thumb from './Thumb'

// interface Props {
//   action: string;
//   subject: string;
// }

// function Card(props:Props) {
// 	// console.log(props)
// 	const { action, subject } = props

// 	const extraData = {
// 		action: 'kiss',
// 		day: 'Wednesday',
// 		feel: 'great'
// 	}

// 	return (
// 		<div className="card">
// 			<h1 className="headline">I am a Card</h1>
// 			<h2 className="paragraph">
// 				my goal is to {action} someeee {subject}
// 			</h2>
// 			<Thumb action={props.action} subject={props.subject} />
// 			<Thumb {...extraData} {...props} />
// 		</div>
// 	)
// }
// export default Card
// //
