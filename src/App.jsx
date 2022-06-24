import styled from 'styled-components'
import { useState } from 'react'
import { COLORS } from './vars'
import ArrowSVG from './assets/Arrow.svg'
import ReactMarkdown from 'react-markdown'

import test from './lessons/00_Generals.md'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect } from 'react'

const App = () => {
	/*
  To add kind of a progress bar, based on the number of 
  */
	const [index, setIndex] = useState(0)

	const [html, setHTML] = useState('')

	//Use componentDidMount(): if class based component to load md file
	useEffect(() => {
		fetch(test)
			.then((data) => data.text())
			.then((text) => {
				setHTML(text)
			})
	}, [])

	const markdown = `asdasds asdasdasd asdasdas dasasdasdas asd sasdsad asd asd asdas asd asd asdas`

	const split = html.split('|')
	// console.log(split)

	split.push(
		`# You are doing awesome!  You have completed today's lesson!
		`
	) // keep going, you are doing great!

	const handleLeftArrowClick = () => {
		if (index > 0) setIndex((index) => index - 1)
	}

	const handleRightArrowClick = () => {
		if (index < split.length - 1) setIndex((index) => index + 1)
	}

	return (
		<Container>
			<MainCard>
				<PrograssBar>
					<ProgressBarContent
						percentage={((index + 1) * 100) / split.length}
					></ProgressBarContent>
				</PrograssBar>
				<Slider>
					{split.map((item, i) => (
						<SliderItem
							key={i}
							style={{ left: `${(i - index) * 100}%` }}
						>
							<StyledReactMarkdown
								children={split[i]}
								style={{
									width: '100%',
									backgroundColor: 'red',
								}}
								components={{
									// code: ({ node, ...props }) => (
									// 	<span
									// 		style={{ backgroundColor: 'green' }}
									// 		{...props}
									// 	/>
									// ),
									code({
										node,
										inline,
										className,
										children,
										...props
									}) {
										const match = /language-(\w+)/.exec(
											className || ''
										)
										return !inline && match ? (
											<SyntaxHighlighter
												children={String(
													children
												).replace(/\n$/, '')}
												customStyle={{
													maxHeight: '200px',
												}}
												style={nightOwl}
												language={match[1]}
												PreTag='div'
												{...props}
											/>
										) : (
											<code
												className={className}
												{...props}
											>
												{children}
											</code>
										)
									},
									h1: ({ node, ...props }) => (
										<h1
											style={{
												fontSize: '2em',
												fontWeight: 700,
												lineHeight: '1.2em',
											}}
											{...props}
										/>
									),
									h2: ({ node, ...props }) => (
										<h1
											style={{
												fontSize: '1.5em',
												fontWeight: 700,
												marginBottom: '20px',
											}}
											{...props}
										/>
									),
									em: ({ node, ...props }) => (
										<InlineCode {...props} />
									),
									strong: ({ node, children, ...props }) => (
										<StyledBoldSpan
											{...props}
											style={{
												fontWeight: 800,
												display: 'inline',
											}}
										>
											{children}
										</StyledBoldSpan>
									),
								}}
							/>
						</SliderItem>
					))}

					{/* <SyntaxHighlighter
						customStyle={{ maxHeight: '100px', width: '100%' }}
						language='javascript'
						style={nightOwl}
					>
						{`function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}
function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}`}
					</SyntaxHighlighter> */}
				</Slider>
				<Controls>
					<Arrow
						src={ArrowSVG}
						onClick={handleLeftArrowClick}
						viewBox='0 0 18 31'
						xmlns='http://www.w3.org/2000/svg'
						disabled={!(index > 0)}
					>
						<ArrowPath
							d='M13.6125 30.2411L0.755352 17.3243C0.249102 16.8238 -1.71462e-06 16.1618 -1.72252e-06 15.4998C-1.73041e-06 14.8378 0.251114 14.1774 0.753348 13.6737L13.6105 0.756846C14.615 -0.252282 16.2422 -0.252282 17.2467 0.756846C18.2511 1.76597 18.2511 3.40076 17.2467 4.40989L11.0809 10.601C10.2284 11.457 10.8347 12.9164 12.0428 12.9164C13.4643 12.9164 14.5419 14.0733 14.5419 15.4271C14.5419 16.781 13.4643 18.0832 12.0428 18.0832C10.8344 18.0832 10.2279 19.5428 11.0803 20.3992L17.2446 26.5921C18.2491 27.6013 18.2491 29.236 17.2446 30.2452C16.2402 31.2543 14.617 31.2503 13.6125 30.2411Z'
							fill='white'
							disabled={!(index > 0)}
						/>
					</Arrow>
					<Arrow
						src={ArrowSVG}
						rotated
						darken
						onClick={handleRightArrowClick}
						viewBox='0 0 18 31'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						disabled={!(index < split.length - 1)}
					>
						<ArrowPath
							d='M13.6125 30.2411L0.755352 17.3243C0.249102 16.8238 -1.71462e-06 16.1618 -1.72252e-06 15.4998C-1.73041e-06 14.8378 0.251114 14.1774 0.753348 13.6737L13.6105 0.756846C14.615 -0.252282 16.2422 -0.252282 17.2467 0.756846C18.2511 1.76597 18.2511 3.40076 17.2467 4.40989L11.0809 10.601C10.2284 11.457 10.8347 12.9164 12.0428 12.9164C13.4643 12.9164 14.5419 14.0733 14.5419 15.4271C14.5419 16.781 13.4643 18.0832 12.0428 18.0832C10.8344 18.0832 10.2279 19.5428 11.0803 20.3992L17.2446 26.5921C18.2491 27.6013 18.2491 29.236 17.2446 30.2452C16.2402 31.2543 14.617 31.2503 13.6125 30.2411Z'
							fill='white'
							disabled={!(index < split.length - 1)}
						/>
					</Arrow>
				</Controls>
			</MainCard>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	justify-items: center;
	align-items: center;
`

const MainCard = styled.div`
	position: relative;
	display: grid;
	justify-items: center;
	align-items: center;
	width: 89vw;
	height: 80vh;
	background-color: ${COLORS.darkBackgroundCard};
	border-radius: 20px;
`

const PrograssBar = styled.div`
	position: absolute;
	height: 80%;
	width: 5px;
	left: 4%;
	border-radius: 50px;
	background-color: ${COLORS.lightBackgoundCard};
`

const ProgressBarContent = styled.div`
	position: absolute;
	transition: 1s ease-out;
	bottom: 0;
	width: 100%;
	height: ${(props) => props.percentage}%;
	background-color: ${COLORS.blue};
	border-radius: 50px;
`

const Controls = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	width: 13%;
	height: 25%;
	bottom: -10%;
	right: -5%;
	background-color: ${COLORS.lightBackgoundCard};
	border-radius: 10px;
`

const ArrowPath = styled.path`
	transition: 0.2s ease-out;
	fill: ${(props) => (props.disabled ? '#8d8d8d' : 'white')};
`

const Arrow = styled.svg`
	display: block;
	height: 50%;
	max-width: 30%;
	transform: rotateZ(${(props) => (props.rotated ? '180deg' : '0deg')});
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover ${ArrowPath} {
		fill: ${(props) => (props.disabled ? '#8d8d8d' : `${COLORS.blue}`)};
	}
`

const Slider = styled.div`
	position: relative;
	overflow: hidden;
	width: 80%;
	height: 90%;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		height: 100%;
		background: rgb(4, 15, 33);
		background: linear-gradient(
			90deg,
			rgba(4, 15, 33, 1) 0%,
			rgba(0, 212, 255, 0) 100%
		);
		z-index: 1;
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 50px;
		height: 100%;
		background: rgb(4, 15, 33);
		background: linear-gradient(
			270deg,
			rgba(4, 15, 33, 1) 0%,
			rgba(0, 212, 255, 0) 100%
		);
		z-index: 1;
	}
	/* background-color: red; */
`

const SliderItem = styled.div`
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 1s ease-out;
	padding: 0px 50px;
	font-size: 1.1em;
	line-height: 1.5em;
`

const InlineCode = styled.span`
	display: inline-block;
	margin: 0 0.4em;
	padding: 5px;
	border-radius: 5px;
	color: ${COLORS.pink};
	background-color: ${COLORS.lightBackgoundCard};
`

const StyledReactMarkdown = styled(ReactMarkdown)`
	display: block;
	text-align: center;
	width: 100%;
`
const StyledBoldSpan = styled.p`
	display: inline;
	font-weight: 800;
	color: ${COLORS.pink};
`

export default App
