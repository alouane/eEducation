const BUILD_VERSION = process.env.REACT_APP_BUILD_VERSION as string;
const build_version = BUILD_VERSION ? BUILD_VERSION : '0.0.1';

const zhCN: any = {
  "unknown": "[未知]: ",
  "from_room": "[教室]: ",
  "student_role": "[学生]: ",
  "teacher_role": "[老师]: ",
  "assistant_role": "[助教]: ",
  "upload_log_failed": "上传日志失败",
  "create_screen_share_failed": "创建屏幕共享失败",
  "screen_share_permission": "缺少屏幕共享权限",
  "electron": {
    "start_screen_share_failed": "native screen sharing failed"
  },
  "icon": {
    "setting": "设置",
    "upload-log": "上传日志",
    "exit-room": "退出教室",
    "lang-select": "语言切换",
    "requests_to_connect_the_microphone": '申请连接麦克风',
  },
  'doc_center': '文档中心',
  'upload_picture': '上传图片',
  'convert_webpage': '转换动态PPT',
  'convert_to_picture': 'PPT转图片',
  'upload_audio_video': '上传音视频',
  'return': {
    'home': '返回主页',
  },
  'control_items': {
    "first_page": "第一页",
    "prev_page": "上一页",
    "next_page": "下一页",
    "last_page": "最后一页",
    "stop_recording": "停止云端录制",
    "recording": "开始云端录制",
    "quit_screen_sharing": "停止屏幕分享",
    "screen_sharing": "开始屏幕分享",
    "delete_current": "删除当前",
    "delete_all": "删除全部",
  },
  'zoom_control': {
    'folder': '文档中心',
    'lock_board': '设置白板跟随',
    'unlock_board': '取消白板跟随'
  },
  'tool': {
    'selector': '鼠标选择器',
    'pencil': '画笔',
    'rectangle': '矩形',
    'ellipse': '椭圆',
    'eraser': '橡皮擦',
    'text': '文字',
    'color_picker': '调色板',
    'add': '新增一页',
    'upload': '上传',
    'hand_tool': '手抓工具'
  },
  'error': {
    'not_found': '页面找不到',
    'components': {
      'paramsEmpty': '参数：{reason}不能为空',
    }
  },
  'whiteboard': {
    'loading': '加载中...',
    'converting': '转换中...',
    'global_state_limit': '请不要给白板设置过大的globalState size',
    'locked_board': '老师正在控制白板，请勿书写',
    'unlocked_board': '白板已解除锁定。',
  },
  'toast': {
    'upload_log_failure': '上传日志失败，错误类型：{reason}, 详情参考开发者工具',
    'show_log_id': `请提供你的日志ID: {no}`,
    'api_login_failured': '房间加入失败, 原因: {reason}',
    'confirm': '确定',
    'cancel': '取消',
    'quit_room': '确定退出课程吗？',
    'kick': '其他端登录，被踢出房间',
    'login_failure': '登录房间失败',
    'whiteboard_lock': '设置白板跟随',
    'whiteboard_unlock': '取消白板跟随',
    'canceled_screen_share': '已取消屏幕共享',
    'screen_sharing_failed': '屏幕分享失败, 原因：{reason}',
    'recording_failed': '开启云录制失败, 原因：{reason}',
    'start_recording': '开始云录制',
    'stop_recording': '结束云录制',
    'recording_too_short': '录制太短，至少15秒',
    'rtm_login_failed': '房间登录失败, 请检查网络设置',
    'rtm_login_failed_reason': '房间登录失败, 原因： {reason}',
    'replay_failed': '回放失败，请刷新页面重试',
    'teacher_exists': '该房间老师已存在，请等待30秒或重新创建教室',
    'student_over_limit': '超出学生最大人数，请等待30秒或重新创建教室',
    'teacher_and_student_over_limit': '超出学生和老师的最大人数',
    'teacher_accept_whiteboard': '老师已授权了你白板的权限',
    'teacher_cancel_whiteboard': '老师已收回了你白板的权限',
    'teacher_accept_co_video': '老师已允许连麦',
    'teacher_reject_co_video': '老师已拒绝连麦',
    'teacher_cancel_co_video': '老师已取消连麦',
    'student_cancel_co_video': '学生已取消连麦',
    'student_send_co_video_apply': '"{reason}" 学生发起了连麦申请',
    'student_peer_leave': '"{reason}" 离开了',
    'stop_co_video': '教师停止了"{reason}"的连麦',
    'reject_co_video': '您取消了学生的连麦申请',
    'close_co_video': '您关闭了学生的连麦',
    'close_youself_co_video': '你关闭了自己的连麦',
    'accept_co_video': '您同意了连麦',
    'successfully_joined_the_room': '加入房间成功',
    'failed_to_join_the_room': '加入房间失败',
    'failed_to_authorize_whiteboard': '授权白板失败',
    'failed_to_deauthorize_whiteboard': '取消授权白板失败',
    'failed_to_query_playback_list': '查询回放列表失败',
    'audio_equipment_has_changed': '音频设备发生了变化',
    'video_equipment_has_changed': '视频设备发生了变化',
    'failed_to_initiate_screen_sharing': '发起屏幕共享失败',
    'failed_to_end_screen_sharing': '结束屏幕共享失败',
    'failed_to_initiate_screen_sharing_to_remote': '向远端发起屏幕共享失败',
    'failed_to_enable_screen_sharing': '开启屏幕共享失败',
    'failed_to_enable_screen_sharing_permission_denied': '开启屏幕共享失败！请先授权屏幕共享权限！',
    'failed_to_send_chat': '发送聊天失败',
    'failed_to_join_rtc_please_refresh_and_try_again': '加入rtc失败，请刷新重试',
    'leave_rtc_channel': '离开rtc频道',
    'failed_to_leave_rtc': '离开rtc失败',
    'co_video_close_success': '下麦成功',
    'co_video_close_failed': '下麦失败',
    'publish_rtc_success': '发布RTC成功',
    'open_whiteboard_follow': '打开白板跟随',
    'close_whiteboard_follow': '关闭白板跟随',
    'i': '我',
    'teacher': '老师',
    'the_teacher_authorized_your_whiteboard': '老师授权了你的白板',
    'the_teacher_cancelled_your_whiteboard_permission': '老师取消了你的白板权限',
    'publish_business_flow_successfully': '发布业务流成功',
    'media_method_call_failed': '媒体方法调用失败',
    'successfully_left_the_business_channel': '离开业务频道成功',
    'course_started_successfully': '课程开始成功',
    'setting_start_failed': '设置开始失败',
    'the_course_ends_successfully': '课程结束成功',
    'setting_ended_failed': '设置结束失败',
    'start_recording_successfully': '开始录制成功',
    'start_recording_failed': '开始录制失败',
    'successfully_ended_recording': '结束录制成功',
    'failed_to_end_recording': '结束录制失败',
    'you_have_a_default_message': '你有一条默认消息',
    'the_teacher_agreed': '老师同意了',
    'student_applied': '学生申请了',
    'you_were_dismissed_by_the_teacher': '你被老师下麦了',
    'student_canceled': '学生取消了',
    'the_teacher_refused': '老师拒绝了',
    'failed_to_initiate_a_raise_of_hand_application': '发起举手申请失败',
    'failed_to_end_the_call': '结束通话失败',
  },
  'notice': {
    'student_interactive_apply': `"{reason}"想和你连麦`
  },
  'chat': {
    'placeholder': '说点什么',
    'banned': '禁言中',
    'send': '发送'
  },
  'device': {
    'camera': '摄像头',
    'microphone': '麦克风',
    'speaker': '扬声器',
    'finish': '完成',
    'detect': '检测',
    'test_again': '再测一次',
    'close': '关闭',
    'test_report': '检测报告',
    'is_look': '是否可以看到画面？',
    'no': '否',
    'yes': '是',
    'is_hear': '音乐播放中，您是否可以听到音乐？',
    'click_play': '点击播放后开始检测扬声器',
    'test_microphone': '对麦克风说些什么，检测麦克风是否正常',
  },
  'nav': {
    'delay': '延迟: ',
    'network': '网络: ',
    'cpu': 'CPU: ',
    'class_end': '课程结束',
    'class_start': '课程开始',
    'back': '返回',
  },
  'home': {
    'entry-home': '进入教室',
    'teacher': '老师',
    'student': '学生',
    'assistant': '助教',
    'cover_class': 'cover-cn',
    'room_name': '房间名',
    'nickname': '昵称',
    'room_type': '房间类型',
    'room_join': '加入房间',
    'short_title': {
      'setup': 'Setup',
      'title': 'Edum',
      'subtitle': '由声网提供',
    },
    'name_too_long': '名字过长，不得超过20个字符',
    '1v1': '一对一',
    'mini_class': '小班课',
    'large_class': '大班课',
    'super_mini_class': '超级小班课',
    'missing_room_name': '缺少房间名',
    'missing_your_name': '缺少昵称',
    'missing_password': '缺少房间密码',
    'missing_role': '缺少角色',
    'account': '姓名',
    'password': '密码',
  },
  'room': {
    'show': '显示',
    'course_list': '教室列表',
    'chat_room': '消息列表',
    'student_list': '学生列表',
    'uploading': '上传中...',
    'converting': '转换中...',
    'upload_success': '上传成功',
    'upload_failure': '上传失败，请检查网络',
    'convert_success': '转换成功',
    'convert_failure': '转换失败，请检查网络',
  },
  'replay': {
    'loading': '加载中...',
    'recording': '在录制中',
    'finished': '录制完成',
    'finished_recording_to_be_download': '服务端准备下载中',
    'finished_download_to_be_convert': '服务端准备转换中',
    'finished_convert_to_be_upload': '服务端准备保存中',
  },
  'assistant': {
    'className': '班级名',
    'creatTime': '创建时间',
    'operation': '操作',
    'classList': '班级列表',
    'enterClassRoom': '进入班级',
    'data_null_text': '当前没有正在上课的班级，您可以刷新或者退出界面',
    'refresh': '刷新',
    'exit': '退出',
  },
  'course_recording': '录制回放',
  'build_version': `构建版本: ${build_version}`,
}

export default zhCN;