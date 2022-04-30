import React, {useState} from 'react';
import './card.css';
import {AnimateSharedLayout, motion} from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
    const [expanded, setExpended] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    <ExpandedCard param={props} setExpanded={()=>setExpended(false)}/>
                ) : (
                    <CompactCard param={props} setExpended={()=>setExpended(true)} />
                )
            }
        </AnimateSharedLayout>
    );
};

function CompactCard({param, setExpended}) {
    const Png = param.png;
    return (
        <motion.div
            className="compact-card"
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow
                }}
            onClick={setExpended}
            layoutId='expandableCard'
        >
            <div className="radial-bar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>
                    ${param.value}
                </span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

function ExpandedCard({setExpanded, param}) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-05-01T00:00:00.000Z",
                    "2022-05-01T01:30:00.000Z",
                    "2022-05-01T02:30:00.000Z",
                    "2022-05-01T03:30:00.000Z",
                    "2022-05-01T04:30:00.000Z",
                    "2022-05-01T05:30:00.000Z",
                    "2022-05-01T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div
            className='expanded-card'
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
            layoutId='expandableCard'
        >
            <div
                style={{alignSelf: 'flex-end', cursor:'pointer', color:'white'}}
            >
                <UilTimes
                    onClick={setExpanded}
                />
            </div>
            <span>{param.title}</span>
            <div className="chart-container">
                <Chart options={data.options} series={param.series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}

export default Card;