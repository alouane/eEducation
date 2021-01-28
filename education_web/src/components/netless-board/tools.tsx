import React from 'react';
import { CustomIcon } from '@/components/icon';
import { Tooltip, ClickAwayListener } from '@material-ui/core';
import { UploadBtn } from './upload/upload-btn'
import { observer } from 'mobx-react';
import { useBoardStore, useRoomStore } from '@/hooks';
import { BoardStore } from '@/stores/app/board';
import { SketchPicker } from 'react-color';
import { PPTProgressPhase } from '@/utils/upload-manager';
import { get } from 'lodash';
import { t } from '@/i18n';


const ToolItem = (props: any) => {
  const onClick = (evt: any) => {
    props.onClick(props.name);
  }
  return (
    <Tooltip title={props.text} placement="right">
      <span>
        <CustomIcon data={props.name}
          onClick={onClick} className={`items ${props.name} ${props.active ? 'active' : ''}`} />
      </span>
    </Tooltip>
  )
}

export const Tools = observer(() => {

  const items: any[] = BoardStore.items

  const boardStore = useBoardStore()

  const roomStore = useRoomStore()

  const [showModal, setShowModal] = React.useState(false)
  const openShareModal = () => setShowModal(true)
  const closeShareModal = () => setShowModal(false)

  const handleClickOutSide = () => {
    switch (boardStore.selector) {
      case 'upload': {
        boardStore.setTool('')
        break;
      }
      case 'color_picker': {
        boardStore.setTool('pencil')
        break;
      }
      case 'text': {
        boardStore.setTool('')
        break;
      }
    }
  }


  const ShareItem = () => {
    return (
      <div className="shareItem">
        <div onClick={openShareModal}>
          <span title="share"><div className="icon items share " data-name="share"></div></span>
        </div>
        {showModal ?
          <ShareModal /> : null}
      </div>
    )
  }

  const ShareModal = () => {
    let url = "https://edum.io/setup/" + roomStore.roomInfo.roomName;

    const copyToClipBoard = () => {
      navigator.clipboard.writeText(url);
      closeShareModal();
    }

    return (
      <div className="shareModal">
        <div className="copyLink">
          <div className="icon-close" onClick={closeShareModal}>x</div>
          <div>Copier le lien:</div>
          <div className="url">
            {url}
          </div>
        </div>
        <div className="butn" onClick={copyToClipBoard}>
          Copier
      </div>
      </div>
    )
  }

  return (
    <ClickAwayListener onClickAway={handleClickOutSide}>
      <div className="tools">
        <div className="board-tools-menu">
          {items
            .filter((it: any) => {
              if (get(roomStore, 'roomInfo.userRole', 'student') === 'student') {
                if (['add', 'upload', 'hand_tool'].indexOf(it.name) !== -1) return false
              }
              return true
            })
            .map((item: any, key: number) => (
              <ToolItem
                key={key}
                text={item.text}
                name={item.name}
                onClick={(name: string) => {
                  boardStore.setTool(name)
                }}
                active={boardStore.selector === item.name}
              >
              </ToolItem>
            ))}
          <ShareItem></ShareItem>
        </div>
        {boardStore.showColorPicker ?
          <SketchPicker
            color={boardStore.strokeColor}
            onChangeComplete={(color: any) => {
              boardStore.changeColor(color)
            }}
          />
          : null
        }
        {boardStore.showUpload ?
          <UploadBtn />
          : null
        }
      </div>
    </ClickAwayListener>

  )
})