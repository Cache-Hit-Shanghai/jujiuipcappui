"use client";
import {
	Box,
	Nav,
	Text,
	CardBody,
	CheckBox,
	Button,
	MaskedInput,
} from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";
import { JuJiuLayer, IconBack, JuJiuCard, JuJiuMain } from "@/jujiuuicomponents/new/core_ui";

const timeMask = [
	{
		length: 2,
		options: Array.from({ length: 24 }, (v, k) => (k >= 10 ? k : `0${k}`)),
		regexpStr: "^2[0-3]$|^[0-1]?[0-9]$|^0$",
		placeholder: "hh",
	},
	{ fixed: ":" },
	{
		length: 2,
		options: Array.from({ length: 60 }, (v, k) => (k >= 10 ? k : `0${k}`)),
		regexpStr: "^[0-5][0-9]$|^[0-9]$",
		placeholder: "mm",
	},
];

const dayDataList = [
	{ day: 1, text: "一" },
	{ day: 2, text: "二" },
	{ day: 3, text: "三" },
	{ day: 4, text: "四" },
	{ day: 5, text: "五" },
	{ day: 6, text: "六" },
	{ day: 0, text: "日" },
];

const DormantPlan = () => {
	const [add, setAdd] = useState(false);
	const [list, setList] = useState([]);
	const [dayList, setDayList] = useState([]);
	const [request, setRequest] = useState({
		start: "",
		end: "",
	});

	return (
		<Box fill>
			{add && (
				<JuJiuLayer
					position="bottom"
					full="horizontal"
					onClickOutside={() => {
						setAdd(false);
					}}
					responsive={false}
				>
					<Box gap="medium">
						<Text>时间：</Text>
						{[
							{ name: "start", label: "开始" },
							{ name: "end", label: "结束" },
						].map(({ name, label }) => (
							<CardBody key={name}>
								<Box
									direction="row"
									align="center"
									justify="between"
								>
									<Text style={{ minWidth: "100px" }}>
										{label}时间
									</Text>
									<Box>
										<MaskedInput
											mask={timeMask}
											value={request[name]}
											onChange={({
												target: { value },
											}) => {
												setRequest((r) => {
													r[name] = value;
													return { ...r };
												});
											}}
										></MaskedInput>
									</Box>
								</Box>
							</CardBody>
						))}
					</Box>
					<Box gap="medium">
						<Text>每周重复：</Text>
						<Box direction="row" justify="around">
							{dayDataList.map(({ day, text } = {}, i) => (
								<Box key={text}>
									<Button
										label={text}
										primary={dayList[day]?.select}
										style={{
											padding: "0",
											width: "40px",
											height: "40px",
											borderRadius: "50%",
											textAlign: "center",
										}}
										onClick={() => {
											setDayList((list) => {
												list[day] = list[day] || {
													select: false,
													day,
												};
												list[day].select =
													!list[day].select;
												return Array.from(list);
											});
										}}
									></Button>
								</Box>
							))}
						</Box>
					</Box>
					<Box>
						<Button
							label="保存"
							onClick={() => {
								const el = {};
								request.start.length === 5 &&
									request.end.length === 5 &&
									Object.assign(el, request);

								el.dayList = dayList
									.filter((el = {}) => el.select)
									.map(({ day }) => day);
								// console.log(el);
								el.start &&
									setList((list) => {
										list.push(el);
										return [...list];
									});
								setAdd(false);
							}}
						></Button>
					</Box>
				</JuJiuLayer>
			)}
			<Nav direction="row" align="center">
				<IconBack />
				<Text>休眠计划设置 - 办3</Text>
			</Nav>
			<JuJiuMain>
				<JuJiuCard>
					<CardBody>
						<Box direction="row" align="center" justify="between">
							<Text>休眠计划</Text>
							<CheckBox toggle />
						</Box>
					</CardBody>
				</JuJiuCard>
				{list.map(({ start, end, dayList = [] }, i) => (
					<JuJiuCard>
						<CardBody>
							<Box
								direction="row"
								align="center"
								justify="between"
							>
								<Box>
									<Text>
										{start}-{end}
									</Text>
									<Text>
										{dayList
											.map((day) => {
												return `周${
													dayDataList[
														(day + 7 - 1) % 7
													].text
												}`;
											})
											.join(",")}
									</Text>
								</Box>
							</Box>
						</CardBody>
					</JuJiuCard>
				))}
				<Box>
					<Button
						label="添加时间段"
						icon={<Add />}
						onClick={() => setAdd(true)}
					/>
				</Box>
			</JuJiuMain>
		</Box>
	);
};

export default DormantPlan;