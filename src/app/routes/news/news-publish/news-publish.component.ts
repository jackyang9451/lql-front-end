import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-news-news-publish',
  templateUrl: './news-publish.component.html',
})
export class NewsNewsPublishComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      // 板块ID
      articelSectionId: {
        type: 'string',
        title: '板块',
        enum: [
          { label: '新闻', value: 1 },
          { label: '通知', value: 2 },
          { label: '项目介绍', value: 3 },
          { label: '咨询', value: 4}
        ]
      },
      // 标签集
      articelLabels: {
        type: 'number',
        title: '标签',
        enum: [
          { value: 1, label: '标签1' },
          { value: 2, label: '标签2' },
          { value: 3, label: '标签3' },
        ],
        ui: {
          widget: 'tag'
        }
      },
      // 文章标题
      articelTitle: {
        type: 'string',
        title: '文章标题'
      },
      // 文章内容
      articelContent: {
        type: 'string',
        title: '文章正文',
        ui: {
          widget: 'tinymce',
          loadingTip: '加载中...........'
        },
      }
    }
  };

  constructor(private http: _HttpClient) { }

  ngOnInit() {
  }

  submit(value: any) {
    console.log(value);
  }
}
