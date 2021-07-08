import { useCallback, useContext, useEffect } from 'react';
import {
    AddMinutesButton, PlayButton, PauseButton, ReverseButton, ForwardButton,
    ElapsedTimeRange, ElapsedTimeValue, SpeedRange, SpeedValue, SimulationDateTime,
} from 'harmoware-vis';
import { HarmowareVisContext } from '../provider/HarmowareProvider';


interface Props {
}
export const useController = () => {
    const { props } = useContext(HarmowareVisContext)
    const { actions, animatePause, animateReverse, settime, secperhour, leading, timeBegin, timeLength } = props;

    useEffect(() => {
    }, [])

    const renderController = useCallback(() => {
        return (
            <div className="harmovis_controller">
                <div className="container">
                    <ul className="list-group">
                        <li><span>コントロールパネル</span>
                            <div className="btn-group d-flex" role="group">
                                {animatePause ?
                                    <PlayButton actions={actions} className="btn btn-outline-light btn-sm w-100" /> :
                                    <PauseButton actions={actions} className="btn btn-outline-light btn-sm w-100" />
                                }
                                {animateReverse ?
                                    <ForwardButton actions={actions} className="btn btn-outline-light btn-sm w-100" /> :
                                    <ReverseButton actions={actions} className="btn btn-outline-light btn-sm w-100" />
                                }
                            </div>
                            <div className="btn-group d-flex" role="group">
                                <AddMinutesButton addMinutes={-5} actions={actions} className="btn btn-outline-light btn-sm w-100" />
                                <AddMinutesButton addMinutes={-1} actions={actions} className="btn btn-outline-light btn-sm w-100" />
                            </div>
                            <div className="btn-group d-flex" role="group">
                                <AddMinutesButton addMinutes={1} actions={actions} className="btn btn-outline-light btn-sm w-100" />
                                <AddMinutesButton addMinutes={5} actions={actions} className="btn btn-outline-light btn-sm w-100" />
                            </div>
                        </li>
                        <li>
                            再現中日時&nbsp;<SimulationDateTime settime={settime} />
                        </li>
                        <li>
                            <label htmlFor="ElapsedTimeRange">経過時間<ElapsedTimeValue settime={settime} timeBegin={timeBegin} timeLength={Math.floor(timeLength)} actions={actions} />秒&nbsp;/&nbsp;全体&nbsp;{Math.floor(timeLength)}&nbsp;秒</label>
                            <ElapsedTimeRange settime={settime} timeLength={Math.floor(timeLength)} timeBegin={timeBegin} min={-leading} actions={actions} id="ElapsedTimeRange" className="form-control-range" />
                        </li>
                        <li>
                            <label htmlFor="SpeedRange">スピード<SpeedValue secperhour={secperhour} actions={actions} />秒/時</label>
                            <SpeedRange secperhour={secperhour} actions={actions} id="SpeedRange" className="form-control-range" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }, [props])

    return { "renderController": renderController }
}
