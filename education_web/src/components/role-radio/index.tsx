import React from 'react';
import { Theme, RadioGroup, Radio, FormControlLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './role-radio.scss';
import { t } from '../../i18n';

const useStyles = makeStyles((theme: Theme) => ({
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  required: {
    fontSize: '12px',
    color: '#ff0000',
    lineHeight: '17px',
    position: 'absolute',
    top: '23px',
  }
}));

export const RoleRadio: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <RadioGroup className={classes.radioGroup} row value={props.role} onChange={props.onChange}>
      <div>
        <FormControlLabel
          className={"custom-radio align-left"}
          value="teacher"
          control={<Radio className={"custom-radio"} color="primary" />}
          label={t("home.teacher")}
          labelPlacement="end"
        />
        <img className="radio-img teacher" src="https://www.pinclipart.com/picdir/big/0-4979_student-thinking-students-images-clip-art-clipart-collection.png" />
      </div>

      {
        // props.type === 3 ?
        //   <div>
        //     <FormControlLabel
        //       className={"custom-radio align-middle"}
        //       value="assistant"
        //       control={<Radio className={"custom-radio"} color="primary" />}
        //       label={t("home.assistant")}
        //       labelPlacement="end"
        //     />
        //     {/* <img src="img/brand/logo.png" /> */}
        //   </div>
        //   : null
      }
      <div>
        <FormControlLabel
          className={"custom-radio align-right"}
          value="student"
          control={<Radio className={"custom-radio"} color="primary" />}
          label={t("home.student")}
          labelPlacement="end"
        />
        <img className="radio-img student" src="https://freesvg.org/img/happy.png" />
        {props.requiredText ? <Typography className={classes.required}>{props.requiredText}</Typography> : null}
      </div>

    </RadioGroup>
  )
}