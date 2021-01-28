import React, { useState } from 'react';
import { Theme, FormControl, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CustomButton } from '@/components/custom-button';
import { RoleRadio } from '@/components/role-radio';
import { CustomIcon } from '@/components/icon';
import { FormInput } from '@/components/form-input';
import { FormSelect } from '@/components/form-select';
import { LangSelect } from '@/components/lang-select';
import { useHistory, useParams } from 'react-router-dom';
import { GithubIcon } from '@/components/github-icon';
import { t } from '../i18n';
import { useUIStore, useRoomStore, useAppStore } from '@/hooks';
import { UIStore } from '@/stores/app';
import { GlobalStorage } from '@/utils/custom-storage';
import { EduManager } from '@/sdk/education/manager';
import { isElectron } from '@/utils/platform';
import './home.scss';

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    minWidth: '240px',
    maxWidth: '240px',
  }
}));

type SessionInfo = {
  roomName: string
  roomType: number
  userName: string
  role: string
  isinvited: boolean
}

const defaultState: SessionInfo = {
  roomName: '',
  roomType: 1,
  role: '',
  userName: '',
  isinvited: false,
}

const roomTypes = isElectron ? UIStore.roomTypes.filter((it: any) => it.value !== 3) : UIStore.roomTypes

function HomePage() {
  document.title = t(`home.short_title.setup`)

  const classes = useStyles();

  const history = useHistory();

  const uiStore = useUIStore();

  const { roomName } = useParams()

  const appStore = useAppStore();

  const handleSetting = (evt: any) => {
    history.push({ pathname: '/setting' })
  }

  const [lock, setLock] = useState<boolean>(false);

  const [session, setSessionInfo] = useState<SessionInfo>(defaultState);

  const [required, setRequired] = useState<any>({} as any);

  const verifyRoomNameAsParam = () => {
    //Check if roomName is defined
    if (roomName) {
      defaultState.roomType = 1;
      defaultState.roomName = roomName;
      defaultState.role = 'student';
      defaultState.isinvited = true;
    }
  }
  verifyRoomNameAsParam()

  const handleSubmit = () => {
    if (!session.roomName) {
      setRequired({ ...required, roomName: t('home.missing_room_name') });
      return;
    }

    if (!session.userName) {
      setRequired({ ...required, userName: t('home.missing_your_name') });
      return;
    }

    if (!session.role) {
      setRequired({ ...required, role: t('home.missing_role') });
      return;
    }

    if (!roomTypes[session.roomType]) { return; alert('4') }
    appStore.setRoomInfo({
      ...session,
      roomType: roomTypes[session.roomType].value
    })
    const path = roomTypes[session.roomType].path

    if (session.role === 'assistant') {
      history.push(`/breakout-class/assistant/courses`)
    } else {
      history.push(`/classroom/${path}`)
    }
    // history.push(`/classroom/${path}`)
  }

  return (
    <div className="setup">
      <div className="card">

        {uiStore.isElectron ? null :
          <div className="">
            <div className="head">
              <div className="logo">
                <img src="img/brand/logo.png" />
              </div>
              <div className="welcome">
                Welcome 👋
              </div>
            </div>
            <div className="setting-container">
              <div>
                {/* <Tooltip title={t("icon.upload-log")} placement="top">
                  <span>
                    <CustomIcon className={lock ? "icon-loading" : "icon-upload"} onClick={handleUpload}></CustomIcon>
                  </span>
                </Tooltip> */}
                <Tooltip title={t("icon.setting")} placement="top">
                  <span>
                    <CustomIcon className="icon-setting" onClick={handleSetting} />
                  </span>
                </Tooltip>
              </div>
              <LangSelect
                value={uiStore.language.match(/^fr/) ? 0 : 1}
                onChange={(evt: any) => {
                  const value = evt.target.value;
                  window.location.reload()
                  if (value === 1) {
                    uiStore.setLanguage('fr');
                  } else {
                    uiStore.setLanguage('en');
                  }
                }}
                items={UIStore.languages}>
              </LangSelect>
            </div>
          </div>
        }
        <div className="form">
          {!session.isinvited ?
            <FormControl className={classes.formControl}>
              <FormInput
                alphabetical={true}
                LIMIT_LENGTH={200}
                Label={t('home.room_name')}
                value={session.roomName}
                onChange={
                  (val: string) => {
                    setSessionInfo({
                      ...session,
                      roomName: val
                    });
                  }
                }
                requiredText={required.roomName}
              />
            </FormControl>
            : <div className="joinSes">Rejoindre la session {session.roomName}</div>}
          <FormControl className={classes.formControl}>
            <FormInput
              alphabetical={false}
              Label={t('home.nickname')}
              value={session.userName}
              onChange={(val: string) => {
                setSessionInfo({
                  ...session,
                  userName: val
                });
              }}
              requiredText={required.userName}
            />
          </FormControl>
          <br />
          {/* <FormControl className={classes.formControl}>
            <FormSelect
              Label={t('home.room_type')}
              value={session.roomType}
              onChange={(evt: any) => {
                setSessionInfo({
                  ...session,
                  roomType: evt.target.value
                });
              }}
              items={roomTypes
                .map((it: any) => ({
                  value: it.value,
                  text: t(`${it.text}`),
                  path: it.path
                }))}
            />
          </FormControl> */}
          {!session.isinvited ?
            <FormControl className="choice">
              <RoleRadio value={session.role} type={session.roomType} onChange={(evt: any) => {
                setSessionInfo({
                  ...session,
                  role: evt.target.value
                });
              }} requiredText={required.role}></RoleRadio>
            </FormControl>
            : null}
          <CustomButton name={t('home.room_join')} className="submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}
export default React.memo(HomePage);