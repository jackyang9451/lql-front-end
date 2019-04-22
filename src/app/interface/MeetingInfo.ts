export interface MeetingBaseInfo {
  meetingName:           string;       // 会议名称          required
  meetingDate?:           any;         // 接受开始结束数组  required
  meetingStart?:          any;          // 会议开始时间      required
  meetingEnd?:            any;          // 会议结束时间      required
  meetingLocation:       string;       // 会议地点          required
  meetingCategory?:      any;          // 会议类别
  meetingSponsor:            string;       // 主办方            required
  meetingContact:        any;         // 联系人             required
  meetingMobile:        any;         // 会议联系方式        required
  meetingEmail?:          any;         // 会议邮箱
  meetingContent:        any;          // 会议内容          required
}
