import React from 'react';

class View4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            semester: 'a',
        };
        this.yearChange = this.yearChange.bind(this);
        this.semesterChange = this.semesterChange.bind(this);
    }

    yearChange(event) {
        this.setState({ year: event.target.value });
    }

    semesterChange(event) {
        this.setState({ semester: event.target.value });
    }

    render() {
        const years = [{ "PK": 2016, "NAME": "2016" }, { "PK": 2017, "NAME": "2017" }];
        const yearOptions = years.map((year, idx) => {
            return <option key={idx}>{year.NAME}</option>
        })

        const semesters = [{ "NSEM": 0, "NAME": "Весенний" }, { "NSEM": 1, "NAME": "Осенний" }];
        const semesterOptions = semesters.map((semester, idx) => {
            return <option key={idx}>{semester.NAME}</option>
        })

        return (
            <div>
                <div>
                    <div className="panel panel-default" >
                        <div className="row">
                            <div className="col-sm-1">
                                <p>Год</p>
                                <select value={this.state.year} onChange={this.yearChange}>
                                    {yearOptions}
                                </select>
                                {/* <ui-select ng-model="years_selected"
                                    theme="select2"
                                    ng-disabled="false"
                                    on-select="change_year($item)"
                                    style={{ minWidth: 80 }}
                                    title="Год">
                                    <ui-select-match>$select.selected.NAME</ui-select-match>
                                    <ui-select-choices repeat="y in years ">
                                        <div ng-bind-html="y.NAME"></div>
                                    </ui-select-choices>
                                </ui-select> */}
                            </div>
                            <div className="col-sm-1">
                                <p>Семестр</p>
                                <select value={this.state.semester} onChange={this.semesterChange}>
                                    {semesterOptions}
                                </select>
                                {/* <ui-select ng-model="semesters_selected"
                                    theme="select2"
                                    ng-disabled="false"
                                    on-select="change_sem($item)"
                                    style={{ minWidth: 80 }}
                                    title="Семестр">
                                    <ui-select-match>$select.selected.NAME</ui-select-match>
                                    <ui-select-choices repeat="s in semesters ">
                                        <div ng-bind-html="s.NAME"></div>
                                    </ui-select-choices>
                                </ui-select> */}
                            </div>

                            <div className="col-sm-1">
                                <p>Кол-во</p>
                                <input type="number" className="form-control" ng-model="hist_interval" ng-change="change_interval()" />
                                {/* <input type="number" className="form-control" /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <button className="btn btn-success" ng-click="refresh_all()">Получить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2><span className="label label-default">По отделениям</span></h2>
                <div ng-repeat="n in normatives">
                    <h3>n.SHORT</h3>
                    {/* <c3chart bindto-id="aaaaa{{n.PK}}"
                    chart-data="hist_src_t[$index]"
                    chart-columns="hist_src_columns"
                    chart-x="hist_src_x">
                    <chart-axis>
                        <chart-axis-x axis-position="outer-center"
                            axis-label="{{n.UNIT}}"
                            axis-type="category">
                        </chart-axis-x>
                        <chart-axis-y axis-position="outer-left"
                            axis-label="Человек" />
                    </chart-axis>
                    <chart-events on-click-data="showClick(n.PK,data)" />
                </c3chart> */}
                </div>
                <h2><span className="label label-default">По факультетам</span></h2>
                <br /><br />
                <div ng-repeat="n in normatives">
                    <h3>n.SHORT</h3>
                    {/* <c3chart bindto-id="aaaaaf{{n.PK}}"
                    chart-data="hist_src_fac_t[$index]"
                    chart-columns="hist_src_fac_columns"
                    chart-x="hist_src_x">
                    <chart-axis>
                        <chart-axis-x axis-position="outer-center"
                            axis-label="{{n.UNIT}}"
                            axis-type="category">
                        </chart-axis-x>
                        <chart-axis-y axis-position="outer-left"
                            axis-label="Человек" />
                    </chart-axis>
                </c3chart> */}
                </div>
            </div>
        );
    }
}

export default View4;